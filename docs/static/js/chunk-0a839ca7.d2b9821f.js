(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a839ca7"],{"2df4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content element-doc"},[t._m(0),t._m(1),n("br"),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div style="height: 420px; text-align:center;">\n    <zm-sign\n     ref="sign"\n     line-color="#409EFF"\n     :line-width="4"\n     :canvas-width="692"\n     :canvas-height="350"\n     :footer="false"\n     @on-clear="handleClear"\n     @on-done="handleDone"\n    ></zm-sign>\n    <Button @click="clear">清空</Button>\n    <Button @click="done">完成</Button>\n  </div>\n</template>\n<script>\n    export default {\n      methods:{\n        async done(){\n          let res = await this.$refs.sign.done();\n          console.log(res)\n        },\n        clear(){\n          console.log("clear", this.$refs.sign)\n          this.$refs.sign.clear();\n        },\n        handleClear(){\n          this.$Message.success("画布已清空")\n        },\n        handleDone(data){\n          console.log(data)\n        }\n      }  \n    }\n<\/script>\n')])])])],2),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"demo-yan-shi-an-li"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demo-yan-shi-an-li"}},[t._v("$")]),t._v(" Demo 演示案例")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("$")]),t._v(" 基础用法")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("$")]),t._v(" Attributes")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("line-color")]),n("td",[t._v("签名颜色")]),n("td",[t._v("String")]),n("td",[t._v("—")]),n("td",[t._v("#000000")])]),n("tr",[n("td",[t._v("line-width")]),n("td",[t._v("线条宽度")]),n("td",[t._v("Number")]),n("td",[t._v("—")]),n("td",[t._v("3")])]),n("tr",[n("td",[t._v("canvas-width")]),n("td",[t._v("画布宽度")]),n("td",[t._v("Number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("canvas-height")]),n("td",[t._v("画布高度")]),n("td",[t._v("Number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("bg-color")]),n("td",[t._v("画布背景色")]),n("td",[t._v("String")]),n("td",[t._v("—")]),n("td",[t._v("#f7f7f7")])]),n("tr",[n("td",[t._v("img-bg-color")]),n("td",[t._v("生成图片背景色")]),n("td",[t._v("String")]),n("td",[t._v("—")]),n("td",[t._v("tranparent")])]),n("tr",[n("td",[t._v("erasable")]),n("td",[t._v("是否启用橡皮擦")]),n("td",[t._v("Boolean")]),n("td",[t._v("—")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("eraser-radius")]),n("td",[t._v("橡皮擦半径")]),n("td",[t._v("Number")]),n("td",[t._v("—")]),n("td",[t._v("6")])]),n("tr",[n("td",[t._v("crop")]),n("td",[t._v("是否裁剪图片")]),n("td",[t._v("Boolean")]),n("td",[t._v("—")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("footer")]),n("td",[t._v("是否显示底部")]),n("td",[t._v("Boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("before-done")]),n("td",[t._v("签名完成前调用，如果返回false会阻止默认签名完成事件")]),n("td",[t._v("Function")]),n("td",[t._v("—")]),n("td",[t._v("canvas")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("$")]),t._v(" Events")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("返回值")])])]),n("tbody",[n("tr",[n("td",[t._v("orientationchange")]),n("td",[t._v("移动设备旋转事件")]),n("td",[t._v("orientation")])]),n("tr",[n("td",[t._v("on-clear")]),n("td",[t._v("清空画布事件")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("on-done")]),n("td",[t._v("完成签名事件，返回签名生成的图片")]),n("td",[t._v("data:image/png;base64")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("$")]),t._v(" Methods")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("返回值")])])]),n("tbody",[n("tr",[n("td",[t._v("clear")]),n("td",[t._v("清空画布")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("done")]),n("td",[t._v("完成签名")]),n("td",[t._v("—")])])])])}];n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n("96cf");var d=n("1da1"),i={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",{staticStyle:{height:"420px","text-align":"center"}},[n("zm-sign",{ref:"sign",attrs:{"line-color":"#409EFF","line-width":4,"canvas-width":692,"canvas-height":350,footer:!1},on:{"on-clear":t.handleClear,"on-done":t.handleDone}}),t._v(" "),n("Button",{on:{click:t.clear}},[t._v("清空")]),t._v(" "),n("Button",{on:{click:t.done}},[t._v("完成")])],1)]],2)},e=[],n={methods:{done:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.sign.done();case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})))()},clear:function(){console.log("clear",this.$refs.sign),this.$refs.sign.clear()},handleClear:function(){this.$Message.success("画布已清空")},handleDone:function(t){console.log(t)}}};return c({render:t,staticRenderFns:e},n)}()}},v=i,l=n("2877"),_=Object(l["a"])(v,r,a,!1,null,null,null);e["default"]=_.exports},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,o=n("1dde"),s=n("ae40"),c=o("filter"),d=s("filter");r({target:"Array",proto:!0,forced:!c||!d},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),o=n("56ef"),s=n("fc6a"),c=n("06cf"),d=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),a=c.f,i=o(r),v={},l=0;while(i.length>l)n=a(r,e=i[l++]),void 0!==n&&d(v,e,n);return v}})}}]);
//# sourceMappingURL=chunk-0a839ca7.d2b9821f.js.map