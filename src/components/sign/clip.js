import { touchEvent, getPointer } from "@/utils/utils";
export default {
  props: {
    erasable: {
      type: Boolean,
      default: true
    },
    eraserRadius: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      clipCanvas: null,
      ctx: null,
      clipX: "",
      clipY: ""
    };
  },
  methods: {
    // 初始化橡皮擦效果
    initClip(canvas) {
      if (!this.erasable) return;
      this.clipCanvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.tapClip();
    },
    // 移除橡皮擦效果
    removeClip(canvas) {
      this.clipCanvas = null;
      const { tapstart } = touchEvent();
      canvas.getContext("2d").globalCompositeOperation = "source-over";
      canvas.removeEventListener(tapstart, this.tapdownHandler);
    },

    //通过修改globalCompositeOperation来达到擦除的效果
    tapClip() {
      const { tapstart } = touchEvent();
      const { ctx } = this;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = this.eraserRadius * 2;
      // destination-out 在源图像之外显示目标图像。只有源图像之外的目标图像部分会被显示，源图像是透明的。
      ctx.globalCompositeOperation = "destination-out";
      this.clipCanvas.addEventListener(tapstart, this.tapdownHandler, {
        passive: false
      });
    },
    // 鼠标或触屏按下事件
    tapdownHandler(e) {
      e.preventDefault();
      const _this = this;
      const { tapmove, tapend } = touchEvent();
      let area;
      let x2, y2;
      const { clipCanvas } = this;
      area = getPointer(e, clipCanvas);
      this.clipX = area.x;
      this.clipY = area.y;

      this.drawHyaline(_this.clipX, _this.clipY);
      // 监听鼠标或触屏移动
      clipCanvas.addEventListener(tapmove, tapmoveHandler, { passive: false });
      // 监听鼠标或触屏抬起
      clipCanvas.addEventListener(tapend, tapendHandler);
      function tapendHandler() {
        clipCanvas.removeEventListener(tapmove, tapmoveHandler, {
          passive: false
        });
        clipCanvas.removeEventListener(tapend, tapendHandler, {
          passive: false
        });
      }
      function tapmoveHandler(e) {
        e.preventDefault();
        area = getPointer(e, clipCanvas);
        if (area) {
          x2 = area.x;
          y2 = area.y;
          _this.drawHyaline(_this.clipX, _this.clipY, x2, y2);
          _this.clipX = x2;
          _this.clipY = y2;
        }
      }
    },
    // 绘制擦除线
    drawHyaline(clipX, clipY, x2, y2) {
      const { ctx } = this;
      ctx.save();
      ctx.beginPath();
      if (arguments.length == 2) {
        ctx.arc(clipX, clipY, this.eraserRadius, 0, 2 * Math.PI);
        ctx.fill();
      } else {
        ctx.moveTo(clipX, clipY);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.restore();
    }
  }
};
