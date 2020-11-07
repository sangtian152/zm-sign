<template>
  <div class="zm-sign" ref="canvasHW">
    <div class="can_vans">
      <canvas
        ref="canvasF"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        @mousedown="mouseDown"
        @mousemove="mouseMove"
        @mouseup="mouseUp"
      ></canvas>
    </div>
    <div class="zm-sign-handle">
      <button class="zm-buttom zm-button--mini" @click="handleDone">完成</button>
      <button class="zm-buttom zm-button--mini" @click="handleClear">清空</button>
    </div>
  </div>
</template>
<script>
export default {
  name:"ZmSign",
  props:{
    color:{
      type: String,
      default: "#000"
    },
    lineWidth:{
      type: Number,
      default: 3
    },
    beforeDone: Function,
  },
  data() {
    return {
      ImgSrc: "",
      points: [],
      canvasTxt: null,
      startX: 0,
      startY: 0,
      moveY: 0,
      moveX: 0,
      endY: 0,
      endX: 0,
      isDown: false,
      isDraw: false //签名标记
    };
  },
  mounted() {
    let canvas = this.$refs.canvasF;
    canvas.height = 300;
    canvas.width = this.$refs.canvasHW.offsetWidth - 10;
    this.canvasTxt = canvas.getContext("2d");
    this.canvasTxt.strokeStyle = this.color;
    this.canvasTxt.lineWidth = this.lineWidth;
  },
  methods: {
    mouseDown(ev) {
      ev = ev || event;
      if(ev.cancelable){
        ev.preventDefault();
      }
      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      };
      this.startX = obj.x;
      this.startY = obj.y;
      this.canvasTxt.beginPath(); //开始作画
      this.points.push(obj); //记录点
      this.isDown = true;
    },
    touchStart(ev) {
      ev = ev || event;
      if(ev.cancelable){
        ev.preventDefault();
      }
      if (ev.touches.length == 1) {
        const ele = ev.targetTouches[0];
        this.isDraw = true; //签名标记
        let obj = {
          x: ele.clientX - ele.target.offsetLeft,
          y: ele.clientY - ele.target.offsetTop
        };
        this.startX = obj.x;
        this.startY = obj.y;
        this.canvasTxt.beginPath(); //开始作画
        this.points.push(obj); //记录点
      }
    },
    mouseMove(ev) {
      ev = ev || event;
      if(ev.cancelable){
        ev.preventDefault();
      }
      if (this.isDown) {
        let obj = {
          x: ev.offsetX,
          y: ev.offsetY
        };
        this.moveY = obj.y;
        this.moveX = obj.x;
        this.canvasTxt.moveTo(this.startX, this.startY); //移动画笔
        this.canvasTxt.lineTo(obj.x, obj.y); //创建线条
        this.canvasTxt.stroke(); //画线
        this.startY = obj.y;
        this.startX = obj.x;
        this.points.push(obj); //记录点
      }
    },
    touchMove(ev) {
      ev = ev || event;
      if(ev.cancelable){
        ev.preventDefault();
      }
      if (ev.touches.length == 1) {
        const ele = ev.targetTouches[0];
        let obj = {
          x: ele.clientX - ele.target.offsetLeft,
          y: ele.clientY - ele.target.offsetTop
        };
        this.moveY = obj.y;
        this.moveX = obj.x;
        this.canvasTxt.moveTo(this.startX, this.startY); //移动画笔
        this.canvasTxt.lineTo(obj.x, obj.y); //创建线条
        this.canvasTxt.stroke(); //画线
        this.startY = obj.y;
        this.startX = obj.x;
        this.points.push(obj); //记录点
      }
    },
    mouseUp(ev) {
      ev = ev || event;
      if(ev.cancelable){
        ev.preventDefault();
      }
      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      };
      this.canvasTxt.closePath(); //收笔
      this.points.push(obj); //记录点
      this.points.push({ x: -1, y: -1 });
      this.isDown = false;
    },
    touchEnd(ev) {
      ev = ev || event;
      if(ev.cancelable){
        ev.preventDefault();
      }
      if (ev.touches.length == 1) {
        const ele = ev.targetTouches[0];
        let obj = {
          x: ele.clientX - ele.target.offsetLeft,
          y: ele.clientY - ele.target.offsetTop
        };
        this.canvasTxt.closePath(); //收笔
        this.points.push(obj); //记录点
        this.points.push({ x: -1, y: -1 }); //记录点
      }
    },
    handleClear() {
      this.canvasTxt.clearRect(
        0,
        0,
        this.$refs.canvasF.width,
        this.$refs.canvasF.height
      );
      this.points = [];
      this.isDraw = false; //签名标记
    },
    handleDone() {
      let canvas = this.$refs["canvasF"];
      const { beforeDone } = this;
      let flag = false;
      if (beforeDone 
        && typeof beforeDone === "function"){
        flag = beforeDone(canvas)
      }
      if (flag) {
        let ctx = canvas.getContext("2d");
        var oImg = new Image();
        ctx.drawImage(oImg, 0, 0);
        this.ImgSrc = canvas.toDataURL("image/png");
        this.$emit("on-done", this.ImgSrc)
      }
    },
    ClearCanvas() {
      let canvas = this.$refs["canvasF"];
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.$emit("on-clear")
    }
  }
};
</script>
<style lang="scss">
.can_vans {
  border: 1px solid #ddd;
}
</style>
