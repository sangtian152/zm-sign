(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["zm-sign"] = factory();
	else
		root["zm-sign"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3430":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"zm-sign\",\"version\":\"1.0.2\",\"author\":\"zzh\",\"private\":false,\"main\":\"lib/zm-sign.common.js\",\"homepage\":\"https://gitee.com/sangtian152/zm-sign\",\"files\":[\"lib\"],\"repository\":{\"type\":\"git\",\"url\":\"https://gitee.com/sangtian152/zm-sign.git\"},\"keywords\":[\"canvas\",\"vue\",\"components\"],\"scripts\":{\"serve\":\"vue-cli-service serve\",\"build\":\"vue-cli-service build\",\"lint\":\"vue-cli-service lint --fix\",\"build-lib\":\"vue-cli-service build --target lib --name zm-sign --dest lib src/index.js\"},\"dependencies\":{\"core-js\":\"^3.6.5\",\"style-loader\":\"^2.0.0\",\"vue\":\"^2.6.11\"},\"devDependencies\":{\"@vue/cli-plugin-babel\":\"~4.5.0\",\"@vue/cli-plugin-eslint\":\"~4.5.0\",\"@vue/cli-plugin-router\":\"~4.5.0\",\"@vue/cli-plugin-vuex\":\"~4.5.0\",\"@vue/cli-service\":\"~4.5.0\",\"@vue/eslint-config-prettier\":\"^6.0.0\",\"babel-eslint\":\"^10.1.0\",\"eslint\":\"^6.7.2\",\"eslint-plugin-prettier\":\"^3.1.3\",\"eslint-plugin-vue\":\"^6.2.2\",\"iview-loader\":\"^1.3.0\",\"markdown-it\":\"^12.0.2\",\"markdown-it-anchor\":\"^6.0.0\",\"markdown-it-chain\":\"^1.3.0\",\"markdown-it-container\":\"^3.0.0\",\"node-sass\":\"^4.12.0\",\"prettier\":\"^1.19.1\",\"sass-loader\":\"^10.0.4\",\"transliteration\":\"^2.1.11\",\"view-design\":\"^4.4.0\",\"vue-router\":\"^3.2.0\",\"vue-template-compiler\":\"^2.6.11\"}}");

/***/ }),

/***/ "b20f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b841":
/***/ (function(module, exports) {

if (!Object.assign) {
  Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target, firstSource) {
      "use strict";
      if (target === undefined || target === null) {
        console.log(firstSource);
        throw new TypeError("Cannot convert first argument to object");
      }
      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) continue;
        var keysArray = Object.keys(Object(nextSource));
        for (
          var nextIndex = 0, len = keysArray.length;
          nextIndex < len;
          nextIndex++
        ) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable)
            to[nextKey] = nextSource[nextKey];
        }
      }
      return to;
    }
  });
}
if (!Array.isArray) {
  Object.defineProperty(Array, "isArray", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      return Object.prototype.toString.call(target) == "[object Array]";
    }
  });
}


/***/ }),

/***/ "f6d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_iview_loader_index_js_ref_0_2_sign_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3430");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_iview_loader_index_js_ref_0_2_sign_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_iview_loader_index_js_ref_0_2_sign_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/utils/polyfill.js
var polyfill = __webpack_require__("b841");

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("9224");

// CONCATENATED MODULE: ./src/utils/log.js
const log = {};

/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
function typeColor(type = "default") {
  let color = "";
  switch (type) {
    case "primary":
      color = "#2d8cf0";
      break;
    case "success":
      color = "#19be6b";
      break;
    case "info":
      color = "#909399";
      break;
    case "warning":
      color = "#ff9900";
      break;
    case "danger":
      color = "#ff4d4f";
      break;
    case "default":
      color = "#35495E";
      break;
    default:
      color = type;
      break;
  }
  return color;
}

log.print = function(text, type = "default", back = false) {
  if (typeof text === "object") {
    // 如果是对象则调用打印对象方式
    console.dir(text);
    return;
  }
  if (back) {
    // 如果是打印带背景图的
    console.log(
      `%c ${text} `,
      `background:${typeColor(
        type
      )}; padding: 2px; border-radius: 4px;color: #fff;`
    );
  } else {
    console.log(`%c ${text} `, `color: ${typeColor(type)};`);
  }
};
// 漂亮的
log.pretty = function(title, text, type = "primary") {
  console.log(
    `%c ${title} %c ${text} %c`,
    `background:${typeColor(type)};border:1px solid ${typeColor(
      type
    )}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
    `border:1px solid ${typeColor(
      type
    )}; padding: 1px; border-radius: 0 4px 4px 0; color: ${typeColor(type)};`,
    "background:transparent"
  );
};

log.primary = function(text, back = false) {
  this.print(text, "primary", back);
};
log.success = function(text, back = false) {
  this.print(text, "success", back);
};
log.info = function(text, back = false) {
  this.print(text, "info", back);
};
log.warning = function(text, back = false) {
  this.print(text, "warning", back);
};
log.danger = function(text, back = false) {
  this.print(text, "danger", back);
};

/* harmony default export */ var utils_log = (log);

// CONCATENATED MODULE: ./src/plugin/core/index.js

// 功能插件


/* harmony default export */ var core = ({
  async install(Vue) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示
    Vue.config.productionTip = false;

    Vue.prototype.$log = utils_log;
    // 打印UI官网
    utils_log.pretty("[" + package_0.name + "] " + package_0.version, "success");
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f829147e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/iview-loader??ref--0-2!./src/components/sign/sign.vue?vue&type=template&id=0d74015e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"canvasHW",staticClass:"zm-sign"},[_c('div',{staticClass:"can_vans"},[_c('canvas',{ref:"canvasF",attrs:{"width":_vm.canvasWidth ? _vm.canvasWidth : _vm.w,"height":_vm.canvasHeight ? _vm.canvasHeight : _vm.h},on:{"touchstart":_vm.touchStart,"touchmove":_vm.touchMove,"touchend":_vm.touchEnd,"mousedown":_vm.mouseDown,"mousemove":_vm.mouseMove,"mouseup":_vm.mouseUp}})]),(_vm.footer)?_c('div',{staticClass:"zm-sign-handle"},[_c('button',{staticClass:"zm-buttom zm-button--mini",on:{"click":_vm.handleClear}},[_vm._v(" 清空 ")]),_c('button',{staticClass:"zm-buttom zm-button--mini",on:{"click":_vm.handleDone}},[_vm._v(" 完成 ")])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sign/sign.vue?vue&type=template&id=0d74015e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/iview-loader??ref--0-2!./src/components/sign/sign.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var signvue_type_script_lang_js_ = ({
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
        });
        this.$emit("on-done", this.ImgSrc);
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
});

// CONCATENATED MODULE: ./src/components/sign/sign.vue?vue&type=script&lang=js&
 /* harmony default export */ var sign_signvue_type_script_lang_js_ = (signvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/sign/sign.vue?vue&type=style&index=0&lang=scss&
var signvue_type_style_index_0_lang_scss_ = __webpack_require__("f6d3");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/sign/sign.vue






/* normalize component */

var component = normalizeComponent(
  sign_signvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sign = (component.exports);
// CONCATENATED MODULE: ./src/components/sign/index.js


/* istanbul ignore next */
sign.install = function(Vue) {
  Vue.component(sign.name, sign);
};

/* harmony default export */ var components_sign = (sign);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__("b20f");

// CONCATENATED MODULE: ./src/index.js
// ES6 API兼容处理

// 核心插件

// 组件



const components = [components_sign];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.use(core);
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src_0 = ({
  install,
  ZmSign: components_sign
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
});
//# sourceMappingURL=zm-sign.umd.js.map