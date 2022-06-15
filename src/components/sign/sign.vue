<template>
  <div class="zm-sign">
    <div v-if="erasable" class="zm-sign-tool">
      <span :class="['iconfont','icon-eraser', {'active': clip}]" @click="doErase(!clip)"></span>
    </div>
    <div class="can_vans">
      <canvas
        ref="canvasF"
        :width="canvasWidth ? canvasWidth : w"
        :height="canvasHeight ? canvasHeight : h"
      ></canvas>
    </div>
    <div v-if="footer" class="zm-sign-handle">
      <button class="zm-buttom zm-button--mini" @click="handleClear">
        清空
      </button>
      <button class="zm-buttom zm-button--mini" @click="handleDone">
        完成
      </button>
    </div>
  </div>
</template>
<script type="text/babel">
import clip from "./clip"
export default {
  name: "ZmSign",
  mixins:[clip],
  props: {
    canvasWidth: Number,
    canvasHeight: Number,
    lineColor: {
      type: String,
      default: "#000"
    },
    lineWidth: {
      type: Number,
      default: 3
    },
    bgColor: {
      type: String,
      default: "#f7f7f7"
    },
    imgBgColor: {
      type: String,
      default: "transparent"
    },
    crop: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    },
    beforeDone: Function
  },
  data() {
    return {
      ImgSrc: "",
      points: [],
      canvasTxt: null,
      w: "",
      h: "",
      startX: 0,
      startY: 0,
      endY: 0,
      endX: 0,
      isDraw: false, //签名标记
      hasDrew: false,
      isVertical: false,
      clip: false,
    };
  },
  watch: {
    canvasWidth(value) {
      this.w = value;
    },
    canvasHeight(value) {
      this.h = value;
    }
  },
  mounted() {
    let canvas = this.$refs.canvasF;
    this.canvas = canvas;
    canvas.style.background = this.bgColor;
    this.canvasTxt = canvas.getContext("2d");
    this.resizeRender(true);
    // 在画板以外松开鼠标后冻结画笔
    document.onmouseup = () => {
      this.isDraw = false;
    };
    const { tapstart, tapend } = this.touchEvent();
    document.addEventListener(tapend, this.closure);
    canvas.addEventListener(tapstart, this.drawStart, { passive: false });
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(evt, this.resizeRender, false);
  },
  beforeDestoryed() {
    const { tapend } = this.touchEvent();
    document.removeEventListener(tapend, this.closure)
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.removeEventListener(evt, this.resizeRender, false);
  },
  methods: {
    doErase(bool){
      this.clip = bool;
      if (this.clip) {
        this.initClip(this.canvas)
      } else {
        this.removeClip(this.canvas)
      }
    },
    resizeRender(init) {
      const orientation = window.orientation;
      const isVertical = orientation == 0 || orientation == 180;
      this.isVertical = isVertical;
      setTimeout(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        if (isVertical) {
          this.verticalCanvas(w, h);
        } else {
          this.horizontalCanvas(w, h);
        }
      }, 50);
      if (init !== true) {
        this.$emit("orientationchange", orientation);
      }
    },
    verticalCanvas(width, height) {
      this.w = width - 40;
      this.h = height / 2;
    },
    horizontalCanvas(width, height) {
      this.w = width - 40;
      this.h = height - 120;
    },
    touchEvent(){
      const hastouch = "ontouchstart" in window ? true : false;
      const tapstart = hastouch ? "touchstart" : "mousedown",
        tapmove = hastouch ? "touchmove" : "mousemove",
        tapend = hastouch ? "touchend" : "mouseup";
      return {
        tapstart,
        tapmove,
        tapend
      }
    },
    getPoiner(e){
      const hastouch = "ontouchstart" in window ? true : false;
      console.log(e);
      let x = hastouch ? e.targetTouches[0].pageX : e.offsetX;
		  let y = hastouch ? e.targetTouches[0].pageY : e.offsetY;
      if (hastouch) {
        let ndom = this.canvas;
        while(ndom.tagName!=="BODY"){
          x -= ndom.offsetLeft;
          y -= ndom.offsetTop;
          ndom = ndom.offsetParent;
        }
      }
      return {
        x: x,
        y: y
      }
    },
    // 绘制
    drawStart(event) {
      if(event.cancelable){
        event.preventDefault();
      }
      if(this.clip) return;
      const obj = this.getPoiner(event);
      this.isDraw = true;
      this.hasDrew = true;
      this.startX = obj.x;
      this.startY = obj.y;
      const { canvas, canvasTxt } = this;
      canvasTxt.globalCompositeOperation = "source-over";
      canvasTxt.beginPath();
      canvasTxt.moveTo(this.startX, this.startY);
      canvasTxt.lineTo(obj.x, obj.y);
      canvasTxt.lineCap = "round";
      canvasTxt.lineJoin = "round";
      canvasTxt.strokeStyle = this.lineColor;
      canvasTxt.lineWidth = this.lineWidth;
      canvasTxt.stroke();
      canvasTxt.closePath();
      this.points.push(obj);
      const { tapmove, tapend } = this.touchEvent();
      canvas.addEventListener(tapmove, this.drawMove, { passive: false });
      canvas.addEventListener(tapend, this.drawEnd, { passive: false });
    },
    drawMove(event) {
      if(event.cancelable){
        event.preventDefault();
      }
      if(this.clip || !this.isDraw) return;
      const obj = this.getPoiner(event);
      const { canvasTxt } = this;
      canvasTxt.beginPath();
      canvasTxt.moveTo(this.startX, this.startY);
      canvasTxt.lineTo(obj.x, obj.y);
      canvasTxt.lineWidth = this.lineWidth;
      canvasTxt.lineCap = "round";
      canvasTxt.lineJoin = "round";
      canvasTxt.stroke();
      canvasTxt.closePath();
      this.startY = obj.y;
      this.startX = obj.x;
      this.points.push(obj);
    },
    drawEnd(event) {
      if(event.cancelable){
        event.preventDefault();
      }
      if(this.clip) return;
      const obj = this.getPoiner(event)
      const { canvas, canvasTxt } = this;
      canvasTxt.beginPath();
      canvasTxt.moveTo(this.startX, this.startY);
      canvasTxt.lineTo(obj.x, obj.y);
      canvasTxt.lineCap = "round";
      canvasTxt.lineJoin = "round";
      canvasTxt.stroke();
      canvasTxt.closePath();
      this.points.push(obj);
      this.points.push({ x: -1, y: -1 });
      const { tapmove, tapend } = this.touchEvent();
      canvas.removeEventListener(tapmove, this.drawMove);
      canvas.removeEventListener(tapend, this.drawEnd);
    },
    closure(){
      this.isDraw = false;
    },
    // 创建图片
    createImage() {
      const pm = new Promise((resolve, reject) => {
        if (!this.hasDrew) {
          reject(`Warning: Not Signned!`);
          return;
        }
        const canvas = this.$refs.canvasF;
        const { canvasTxt } = this;
        const ImgData = canvasTxt.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        canvasTxt.globalCompositeOperation = "destination-over";
        canvasTxt.fillStyle = this.bgColor;
        canvasTxt.fillRect(0, 0, canvas.width, canvas.height);
        let resultImg = canvas.toDataURL();
        canvasTxt.clearRect(0, 0, canvas.width, canvas.height);
        canvasTxt.putImageData(ImgData, 0, 0);
        canvasTxt.globalCompositeOperation = "source-over";
        if (this.crop) {
          const crop_area = this.getCropArea(ImgData.data);
          var crop_canvas = document.createElement("canvas");
          const crop_ctx = crop_canvas.getContext("2d");
          crop_canvas.width = crop_area[2] - crop_area[0];
          crop_canvas.height = crop_area[3] - crop_area[1];
          const crop_imgData = canvasTxt.getImageData(...crop_area);
          crop_ctx.globalCompositeOperation = "destination-over";
          crop_ctx.putImageData(crop_imgData, 0, 0);
          crop_ctx.fillStyle = this.imgBgColor;
          crop_ctx.fillRect(0, 0, crop_canvas.width, crop_canvas.height);
          resultImg = crop_canvas.toDataURL();
          crop_canvas = null;
        }
        this.doErase(this.clip);
        resolve(resultImg);
      });
      return pm;
    },
    getCropArea(imgData) {
      const canvas = this.$refs.canvasF;
      var topX = canvas.width;
      var btmX = 0;
      var topY = canvas.height;
      var btnY = 0;
      for (var i = 0; i < canvas.width; i++) {
        for (var j = 0; j < canvas.height; j++) {
          var pos = (i + canvas.width * j) * 4;
          if (
            imgData[pos] > 0 ||
            imgData[pos + 1] > 0 ||
            imgData[pos + 2] ||
            imgData[pos + 3] > 0
          ) {
            btnY = Math.max(j, btnY);
            btmX = Math.max(i, btmX);
            topY = Math.min(j, topY);
            topX = Math.min(i, topX);
          }
        }
      }
      topX++;
      btmX++;
      topY++;
      btnY++;
      const data = [topX, topY, btmX, btnY];
      return data;
    },
    handleClear() {
      this.clear();
      this.$emit("on-clear");
    },
    handleDone() {
      let canvas = this.$refs["canvasF"];
      const { beforeDone } = this;
      let flag = true;
      if (beforeDone && typeof beforeDone === "function") {
        flag = beforeDone(canvas);
      }
      if (flag) {
        this.createImage().then(res => {
          this.ImgSrc = res;
          this.$emit("on-done", this.ImgSrc);
        });
      }
    },
    clear() {
      this.hasDrew = false;
      this.doErase(this.clip);
      const { canvasTxt } = this;
      canvasTxt.clearRect(
        0,
        0,
        this.$refs.canvasF.width,
        this.$refs.canvasF.height
      );
      this.points = [];
      this.ImgSrc = "";
      this.isDraw = false; //签名标记
    },
    async done() {
      let ImgSrc = await this.createImage();
      return ImgSrc;
    }
  }
};
</script>
<style lang="scss" scoped>

.can_vans {
  position: relative;
  border: 1px solid #ddd;
  padding: 3px;
  canvas {
    border: 1px dashed #ddd;
    vertical-align: middle;
  }
}
</style>
