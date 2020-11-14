<template>
  <div class="zm-sign" ref="canvasHW">
    <div class="can_vans">
      <canvas
        ref="canvasF"
        :width="canvasWidth ? canvasWidth : w"
        :height="canvasHeight ? canvasHeight : h"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        @mousedown="mouseDown"
        @mousemove="mouseMove"
        @mouseup="mouseUp"
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
export default {
  name: "ZmSign",
  props: {
    color: {
      type: String,
      default: "#000"
    },
    canvasWidth: Number,
    canvasHeight: Number,
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
      canvas2d: null,
      w: "",
      h: "",
      startX: 0,
      startY: 0,
      endY: 0,
      endX: 0,
      isDraw: false, //签名标记
      hasDrew: false,
      isVertical: false
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
    canvas.style.background = this.bgColor;
    this.canvas2d = canvas.getContext("2d");
    this.canvas2d.strokeStyle = this.color;
    this.canvas2d.lineWidth = this.lineWidth;
    this.resizeRender(true);
    // 在画板以外松开鼠标后冻结画笔
    document.onmouseup = () => {
      this.isDraw = false;
    };
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(evt, this.resizeRender, false);
  },
  beforeDestoryed() {
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.removeEventListener(evt, this.resizeRender, false);
  },
  methods: {
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
      this.h = height - 90;
    },
    mouseDown(ev) {
      ev = ev || event;
      if (ev.cancelable) {
        ev.preventDefault();
      }
      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      };
      this.drawStart(obj);
      this.isDraw = true;
    },
    touchStart(ev) {
      ev = ev || event;
      if (ev.cancelable) {
        ev.preventDefault();
      }
      if (ev.touches.length == 1) {
        const ele = ev.targetTouches[0];
        this.isDraw = true; //签名标记
        let obj = {
          x: ele.clientX - ele.target.offsetLeft,
          y: ele.clientY - ele.target.offsetTop
        };
        this.drawStart(obj);
      }
    },
    mouseMove(ev) {
      ev = ev || event;
      if (ev.cancelable) {
        ev.preventDefault();
      }
      if (this.isDraw) {
        let obj = {
          x: ev.offsetX,
          y: ev.offsetY
        };
        this.drawMove(obj);
      }
    },
    touchMove(ev) {
      ev = ev || event;
      if (ev.cancelable) {
        ev.preventDefault();
      }
      if (ev.touches.length == 1) {
        const ele = ev.targetTouches[0];
        let obj = {
          x: ele.clientX - ele.target.offsetLeft,
          y: ele.clientY - ele.target.offsetTop
        };
        this.drawMove(obj);
      }
    },
    mouseUp(ev) {
      ev = ev || event;
      if (ev.cancelable) {
        ev.preventDefault();
      }
      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      };
      this.drawEnd(obj);
      this.isDraw = false;
    },
    touchEnd(ev) {
      ev = ev || event;
      if (ev.cancelable) {
        ev.preventDefault();
      }
      if (ev.touches.length == 1) {
        const ele = ev.targetTouches[0];
        let obj = {
          x: ele.clientX - ele.target.offsetLeft,
          y: ele.clientY - ele.target.offsetTop
        };
        this.drawEnd(obj);
      }
    },
    // 绘制
    drawStart(obj) {
      this.hasDrew = true;
      this.startX = obj.x;
      this.startY = obj.y;
      const { canvas2d } = this;
      canvas2d.beginPath();
      canvas2d.moveTo(this.startX, this.startY);
      canvas2d.lineTo(obj.x, obj.y);
      canvas2d.lineCap = "round";
      canvas2d.lineJoin = "round";
      canvas2d.lineWidth = this.lineWidth;
      canvas2d.stroke();
      canvas2d.closePath();
      this.points.push(obj);
    },
    drawMove(obj) {
      const { canvas2d } = this;
      canvas2d.beginPath();
      canvas2d.moveTo(this.startX, this.startY);
      canvas2d.lineTo(obj.x, obj.y);
      canvas2d.strokeStyle = this.lineColor;
      canvas2d.lineWidth = this.lineWidth;
      canvas2d.lineCap = "round";
      canvas2d.lineJoin = "round";
      canvas2d.stroke();
      canvas2d.closePath();
      this.startY = obj.y;
      this.startX = obj.x;
      this.points.push(obj);
    },
    drawEnd(obj) {
      const { canvas2d } = this;
      canvas2d.beginPath();
      canvas2d.moveTo(this.startX, this.startY);
      canvas2d.lineTo(obj.x, obj.y);
      canvas2d.lineCap = "round";
      canvas2d.lineJoin = "round";
      canvas2d.stroke();
      canvas2d.closePath();
      this.points.push(obj);
      this.points.push({ x: -1, y: -1 });
    },
    // 创建图片
    createImage() {
      const pm = new Promise((resolve, reject) => {
        if (!this.hasDrew) {
          reject(`Warning: Not Signned!`);
          return;
        }
        const canvas = this.$refs.canvasF;
        const { canvas2d } = this;
        const ImgData = canvas2d.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        canvas2d.globalCompositeOperation = "destination-over";
        canvas2d.fillStyle = this.bgColor;
        canvas2d.fillRect(0, 0, canvas.width, canvas.height);
        let resultImg = canvas.toDataURL();
        canvas2d.clearRect(0, 0, canvas.width, canvas.height);
        canvas2d.putImageData(ImgData, 0, 0);
        canvas2d.globalCompositeOperation = "source-over";
        if (this.crop) {
          const crop_area = this.getCropArea(ImgData.data);
          var crop_canvas = document.createElement("canvas");
          const crop_ctx = crop_canvas.getContext("2d");
          crop_canvas.width = crop_area[2] - crop_area[0];
          crop_canvas.height = crop_area[3] - crop_area[1];
          const crop_imgData = canvas2d.getImageData(...crop_area);
          crop_ctx.globalCompositeOperation = "destination-over";
          crop_ctx.putImageData(crop_imgData, 0, 0);
          crop_ctx.fillStyle = this.imgBgColor;
          crop_ctx.fillRect(0, 0, crop_canvas.width, crop_canvas.height);
          resultImg = crop_canvas.toDataURL();
          crop_canvas = null;
        }
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
      const { canvas2d } = this;
      canvas2d.clearRect(
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
<style lang="scss">
.can_vans {
  border: 1px solid #ddd;
  padding: 3px;
  canvas {
    border: 1px dashed #ddd;
    vertical-align: middle;
  }
}
</style>
