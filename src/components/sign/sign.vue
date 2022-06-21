<template>
  <div class="zm-sign">
    <div v-if="erasable" class="zm-sign-tool">
      <span
        :class="['iconfont', 'icon-eraser', { active: clip }]"
        @click="doErase(!clip)"
      ></span>
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
import clip from "./clip";
import { touchEvent, getPointer } from "@/utils/utils";
export default {
  name: "ZmSign",
  mixins: [clip],
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
      clip: false
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
      this.closure();
    };
    const { tapstart, tapend } = touchEvent();
    document.addEventListener(tapend, this.closure);
    canvas.addEventListener(tapstart, this.drawStart, { passive: false });
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(evt, this.resizeRender, false);
  },
  beforeDestoryed() {
    const { tapend } = touchEvent();
    document.removeEventListener(tapend, this.closure);
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.removeEventListener(evt, this.resizeRender, false);
  },
  methods: {
    doErase(bool) {
      this.clip = bool;
      if (this.clip) {
        this.initClip(this.canvas);
      } else {
        this.removeClip(this.canvas);
      }
    },
    // 页面尺寸改变，主要用于手机旋转屏幕时调用
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
    // 垂直方向
    verticalCanvas(width, height) {
      this.w = width - 40;
      this.h = height / 2;
    },
    // 水平方向
    horizontalCanvas(width, height) {
      this.w = width - 40;
      this.h = height - 120;
    },
    // 绘制开始
    drawStart(event) {
      if (event.cancelable) {
        event.preventDefault();
      }
      if (this.clip) return;
      const obj = getPointer(event, this.canvas);
      if (obj) {
        const { canvasTxt } = this;
        this.isDraw = true;
        this.hasDrew = true;
        this.startX = obj.x;
        this.startY = obj.y;
        canvasTxt.lineCap = "round"; // 设置或返回线条的结束端点样式。
        canvasTxt.lineJoin = "round"; // 设置或返回两条线相交时，所创建的拐角类型。
        canvasTxt.strokeStyle = this.lineColor;
        canvasTxt.lineWidth = this.lineWidth;
        this.drawLine(obj, "source-over");
      }
      const { canvas } = this;
      const { tapmove, tapend } = touchEvent();
      canvas.addEventListener(tapmove, this.drawMove, { passive: false });
      canvas.addEventListener(tapend, this.drawEnd, { passive: false });
    },
    // 鼠标移动
    drawMove(event) {
      if (event.cancelable) {
        event.preventDefault();
      }
      if (this.clip || !this.isDraw) return;
      const obj = getPointer(event, this.canvas);
      if (obj) {
        this.drawLine(obj);
        this.startY = obj.y;
        this.startX = obj.x;
      }
    },
    // 绘制结束
    drawEnd(event) {
      if (event.cancelable) {
        event.preventDefault();
      }
      if (this.clip) return;
      const { canvas } = this;
      const { tapmove, tapend } = touchEvent();
      canvas.removeEventListener(tapmove, this.drawMove);
      canvas.removeEventListener(tapend, this.drawEnd);
    },
    drawLine({ x, y }, globalCompositeOperation) {
      const { canvasTxt } = this;
      if (globalCompositeOperation) {
        // 设置或返回如何将一个源（新的）图像绘制到目标（已有的）的图像上。
        // 启用橡皮擦后会设置成destination-out，所以重新绘制时需要设置回默认值source-over
        canvasTxt.globalCompositeOperation = globalCompositeOperation;
      }
      canvasTxt.beginPath();
      canvasTxt.moveTo(this.startX, this.startY);
      canvasTxt.lineTo(x, y);
      canvasTxt.stroke();
      canvasTxt.closePath();
    },
    // isDraw false冻结画笔
    closure() {
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
          if (crop_canvas.width > 0 && crop_canvas.height > 0) {
            resolve(resultImg);
          } else {
            reject(`Warning: Not Signned!`);
          }
          crop_canvas = null;
        }
        this.doErase(this.clip);
        resolve(resultImg);
      });
      return pm;
    },
    // 计算画布中，有图像的区域坐标
    getCropArea(imgData) {
      const canvas = this.$refs.canvasF;
      var topX = canvas.width;
      var btmX = 0;
      var topY = canvas.height;
      var btmY = 0;
      for (var i = 0; i < canvas.width; i++) {
        for (var j = 0; j < canvas.height; j++) {
          var pos = (i + canvas.width * j) * 4;
          if (
            imgData[pos] > 0 ||
            imgData[pos + 1] > 0 ||
            imgData[pos + 2] ||
            imgData[pos + 3] > 0
          ) {
            btmY = Math.max(j, btmY);
            btmX = Math.max(i, btmX);
            topY = Math.min(j, topY);
            topX = Math.min(i, topX);
          }
        }
      }
      topX++;
      btmX++;
      topY++;
      btmY++;
      return [topX, topY, btmX, btmY];
    },
    // 清空画布
    handleClear() {
      this.clear();
      this.$emit("on-clear");
    },
    // 完成
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
        }).catch(() => {
          this.ImgSrc = '';
          this.$emit("on-done", '');
        });
      }
    },
    // 清空画布方法，供外部调用
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
      this.ImgSrc = "";
      this.closure();
    },
    // 完成签名方法，供外部调用
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
