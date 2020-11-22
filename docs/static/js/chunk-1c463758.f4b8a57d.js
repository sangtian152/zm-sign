(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c463758","chunk-0a839ca7","chunk-2d0c1369"],{"2df4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content element-doc"},[t._m(0),t._m(1),n("br"),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div style="height: 420px; text-align:center;">\n    <zm-sign\n     ref="sign"\n     line-color="#409EFF"\n     :line-width="4"\n     :canvas-width="692"\n     :canvas-height="350"\n     :footer="false"\n     @on-clear="handleClear"\n     @on-done="handleDone"\n    ></zm-sign>\n    <Button @click="clear">清空</Button>\n    <Button @click="done">完成</Button>\n  </div>\n</template>\n<script>\n    export default {\n      methods:{\n        async done(){\n          let res = await this.$refs.sign.done();\n          console.log(res)\n        },\n        clear(){\n          console.log("clear", this.$refs.sign)\n          this.$refs.sign.clear();\n        },\n        handleClear(){\n          this.$Message.success("画布已清空")\n        },\n        handleDone(data){\n          console.log(data)\n        }\n      }  \n    }\n<\/script>\n')])])])],2),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"demo-yan-shi-an-li"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demo-yan-shi-an-li"}},[t._v("$")]),t._v(" Demo 演示案例")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("$")]),t._v(" 基础用法")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("$")]),t._v(" Attributes")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("line-color")]),n("td",[t._v("签名颜色")]),n("td",[t._v("String")]),n("td",[t._v("—")]),n("td",[t._v("#000000")])]),n("tr",[n("td",[t._v("line-width")]),n("td",[t._v("线条宽度")]),n("td",[t._v("Number")]),n("td",[t._v("—")]),n("td",[t._v("3")])]),n("tr",[n("td",[t._v("canvas-width")]),n("td",[t._v("画布宽度")]),n("td",[t._v("Number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("canvas-height")]),n("td",[t._v("画布高度")]),n("td",[t._v("Number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("bg-color")]),n("td",[t._v("画布背景色")]),n("td",[t._v("String")]),n("td",[t._v("—")]),n("td",[t._v("#f7f7f7")])]),n("tr",[n("td",[t._v("img-bg-color")]),n("td",[t._v("生成图片背景色")]),n("td",[t._v("String")]),n("td",[t._v("—")]),n("td",[t._v("tranparent")])]),n("tr",[n("td",[t._v("erasable")]),n("td",[t._v("是否启用橡皮擦")]),n("td",[t._v("Boolean")]),n("td",[t._v("—")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("eraser-radius")]),n("td",[t._v("橡皮擦半径")]),n("td",[t._v("Number")]),n("td",[t._v("—")]),n("td",[t._v("6")])]),n("tr",[n("td",[t._v("crop")]),n("td",[t._v("是否裁剪图片")]),n("td",[t._v("Boolean")]),n("td",[t._v("—")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("footer")]),n("td",[t._v("是否显示底部")]),n("td",[t._v("Boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("before-done")]),n("td",[t._v("签名完成前调用，如果返回false会阻止默认签名完成事件")]),n("td",[t._v("Function")]),n("td",[t._v("—")]),n("td",[t._v("canvas")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("$")]),t._v(" Events")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("返回值")])])]),n("tbody",[n("tr",[n("td",[t._v("orientationchange")]),n("td",[t._v("移动设备旋转事件")]),n("td",[t._v("orientation")])]),n("tr",[n("td",[t._v("on-clear")]),n("td",[t._v("清空画布事件")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("on-done")]),n("td",[t._v("完成签名事件，返回签名生成的图片")]),n("td",[t._v("data:image/png;base64")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("$")]),t._v(" Methods")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("返回值")])])]),n("tbody",[n("tr",[n("td",[t._v("clear")]),n("td",[t._v("清空画布")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("done")]),n("td",[t._v("完成签名")]),n("td",[t._v("—")])])])])}];n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n("96cf");var c=n("1da1"),d={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",{staticStyle:{height:"420px","text-align":"center"}},[n("zm-sign",{ref:"sign",attrs:{"line-color":"#409EFF","line-width":4,"canvas-width":692,"canvas-height":350,footer:!1},on:{"on-clear":t.handleClear,"on-done":t.handleDone}}),t._v(" "),n("Button",{on:{click:t.clear}},[t._v("清空")]),t._v(" "),n("Button",{on:{click:t.done}},[t._v("完成")])],1)]],2)},e=[],n={methods:{done:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.sign.done();case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})))()},clear:function(){console.log("clear",this.$refs.sign),this.$refs.sign.clear()},handleClear:function(){this.$Message.success("画布已清空")},handleDone:function(t){console.log(t)}}};return i({render:t,staticRenderFns:e},n)}()}},v=d,l=n("2877"),_=Object(l["a"])(v,r,a,!1,null,null,null);e["default"]=_.exports},"44a4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content element-doc"},[n("h2",{attrs:{id:"jie-shao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jie-shao"}},[t._v("$")]),t._v(" 介绍")]),n("p",[t._v("一个简易签名组件，基于vue和canvas。")]),n("h2",{attrs:{id:"an-zhuang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-zhuang"}},[t._v("$")]),t._v(" 安装")]),n("p",[n("code",[t._v("@1.0.1")]),t._v(" 表示版本号，建议锁定版本号来保证代码的稳定性")]),n("h3",{attrs:{id:"npm-an-zhuang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-an-zhuang"}},[t._v("$")]),t._v(" npm 安装")]),n("p",[t._v("推荐使用npm安装，它能更好地和"),n("a",{attrs:{href:"https://webpack.js.org/"}},[t._v("webpack")]),t._v("打包工具配合使用。而且可以更好的和 es6配合使用。并且支持按需引入")]),n("pre",[n("code",{staticClass:"language-shell"},[t._v("npm i zm-sign -S\n# or \nyarn add zm-sign\n")])]),n("h3",{attrs:{id:"yin-ru"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yin-ru"}},[t._v("$")]),t._v(" 引入")]),n("p",[t._v("在 main.js 中写入以下内容：")]),n("pre",[n("code",{staticClass:"language-javascript"},[t._v("import Vue from 'vue';\nimport ZmSign from 'zm-sign';\nimport \"zm-sign/lib/zm-sign.css\";\n\nVue.use(ZmSign);\n")])]),n("h3",{attrs:{id:"zui-xin-ban-ben"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zui-xin-ban-ben"}},[t._v("$")]),t._v(" 最新版本")]),n("p",[n("a",{attrs:{href:"https://www.npmjs.com/package/zm-sign"}},[n("img",{attrs:{src:"https://img.shields.io/npm/v/zm-sign",alt:"NPM version"}})])])])}],s=n("2877"),o={},i=Object(s["a"])(o,r,a,!1,null,null,null);e["default"]=i.exports},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,s=n("1dde"),o=n("ae40"),i=s("filter"),c=o("filter");r({target:"Array",proto:!0,forced:!i||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),s=n("56ef"),o=n("fc6a"),i=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),a=i.f,d=s(r),v={},l=0;while(d.length>l)n=a(r,e=d[l++]),void 0!==n&&c(v,e,n);return v}})},ef23:function(t,e,n){var r={"./demo.md":"2df4","./guide.md":"44a4"};function a(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=s,t.exports=a,a.id="ef23"}}]);
//# sourceMappingURL=chunk-1c463758.f4b8a57d.js.map