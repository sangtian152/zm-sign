export const isObject = function(arg) {
  return Object.prototype.toString.call(arg) === "[object Object]";
};

export const hastouch = "ontouchstart" in window ? true : false;
// 处理事件监听，pc端监听mouse事件，移动端监听touch事件
export const touchEvent = function() {
  // const hastouch = "ontouchstart" in window ? true : false;
  const tapstart = hastouch ? "touchstart" : "mousedown",
    tapmove = hastouch ? "touchmove" : "mousemove",
    tapend = hastouch ? "touchend" : "mouseup";
  return {
    tapstart,
    tapmove,
    tapend
  };
};

// 计算坐标点
export const getPointer = function(e, dom) {
  try {
    let x = hastouch ? e.targetTouches[0].pageX : e.offsetX;
    let y = hastouch ? e.targetTouches[0].pageY : e.offsetY;
    if (hastouch) {
      let ndom = dom;
      while (ndom && ndom.tagName !== "BODY") {
        x -= ndom.offsetLeft;
        y -= ndom.offsetTop;
        ndom = ndom.offsetParent;
      }
    }
    return {
      x: x,
      y: y
    };
  } catch (err) {
    console.log(err);
  }
};
