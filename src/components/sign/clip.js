export default {
  props:{
    erasable: {
      type: Boolean,
      default: true
    },
    eraserRadius:{
      type: Number,
      default: 6
    }
  },
  data(){
    return {
      clipCanvas: null,
      ctx: null,
      clipX: "",
      clipY: "",
      timeout: null,
    }
  },
  methods:{
    initClip(canvas){
      if (!this.erasable) return;
      this.clipCanvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.tapClip();
    },
    removeClip(canvas){
      this.clipCanvas = null;
      const hastouch = "ontouchstart" in window ? true : false;
      const tapstart = hastouch ? "touchstart" : "mousedown";
      canvas.getContext("2d").globalCompositeOperation = "source-over";
      canvas.removeEventListener(tapstart, this.tapdownHandler)
    },
    getClipArea(e, hastouch){
      let x = hastouch ? e.targetTouches[0].pageX : e.offsetX;
		  let y = hastouch ? e.targetTouches[0].pageY : e.offsetY;
      if (hastouch) {
        let ndom = this.clipCanvas;
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
  
    //通过修改globalCompositeOperation来达到擦除的效果
    tapClip() {
      const hastouch = "ontouchstart" in window ? true : false;
      const tapstart = hastouch ? "touchstart" : "mousedown";
      const { ctx } = this;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = this.eraserRadius * 2;
      ctx.globalCompositeOperation = "destination-out";
      this.clipCanvas.addEventListener(tapstart, this.tapdownHandler, { passive: false })
    },
    tapdownHandler(e){
      e.preventDefault();
      const _this = this;
      clearTimeout(this.timeout);
      const hastouch = "ontouchstart" in window ? true : false;
      const tapmove = hastouch ? "touchmove" : "mousemove",
        tapend = hastouch ? "touchend" : "mouseup";
      let area;
      let x2,y2;
      const distance = 3;
      const { clipCanvas, ctx } = this;
      area = _this.getClipArea(e, hastouch);
      this.clipX = area.x;
      this.clipY = area.y;

      this.drawLine(_this.clipX, _this.clipY);

      clipCanvas.addEventListener(tapmove, tapmoveHandler, { passive: false });

      clipCanvas.addEventListener(tapend, function () {
        clipCanvas.removeEventListener(tapmove, tapmoveHandler, { passive: false });
        //检测擦除状态
        _this.timeout = setTimeout(function () {
          const imgData = ctx.getImageData(0, 0, clipCanvas.width, clipCanvas.height);
          let dd = 0;
          for (let x = 0; x < imgData.width; x += distance) {
            for (let y = 0; y < imgData.height; y += distance) {
              let i = (y * imgData.width + x) * 4;
              if (imgData.data[i + 3] > 0) { dd++ }
            }
          }
          if (dd / (imgData.width * imgData.height / (distance * distance)) < 0.4) {
            clipCanvas.className = "noOp";
          }
        }, 100)
      });

      function tapmoveHandler(e) {
        clearTimeout(_this.timeout);

        e.preventDefault();

        area = _this.getClipArea(e, hastouch);

        x2 = area.x;
        y2 = area.y;
        _this.drawLine(_this.clipX, _this.clipY, x2, y2);
        _this.clipX = x2;
        _this.clipY = y2;
      }
    },
    drawLine(clipX, clipY, x2, y2){
      const { ctx } = this;
      ctx.save();
      ctx.beginPath();
      if(arguments.length==2){
        ctx.arc(clipX, clipY, this.eraserRadius, 0, 2 * Math.PI);
        ctx.fill();
      }else {
        ctx.moveTo(clipX, clipY);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.restore();
    },
  }
}