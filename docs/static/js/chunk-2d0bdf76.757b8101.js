(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdf76"],{"2df4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content element-doc"},[t._m(0),t._m(1),n("br"),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div style="height: 420px; text-align:center;">\n    <zm-sign\n     ref="sign"\n     color="#409EFF"\n     :line-width="4"\n     :canvas-width="692"\n     :canvas-height="350"\n     :footer="false"\n     @on-clear="handleClear"\n     @on-done="handleDone"\n    ></zm-sign>\n    <Button @click="clear">清空</Button>\n    <Button @click="done">完成</Button>\n  </div>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n        } \n      },\n      created(){\n      }, \n      methods:{\n        async done(){\n          let res = await this.$refs.sign.done();\n          console.log(res)\n        },\n        clear(){\n          this.$refs.sign.clear();\n        },\n        handleClear(){\n          this.$Message.success("画布已清空")\n        },\n        handleDone(data){\n          console.log(data)\n        }\n      }  \n    }\n<\/script>\n')])])])],2),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"demo-yan-shi-an-li"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demo-yan-shi-an-li"}},[t._v("$")]),t._v(" Demo 演示案例")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("$")]),t._v(" 基础用法")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("$")]),t._v(" Attributes")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("color")]),n("td",[t._v("签名颜色")]),n("td",[t._v("String")]),n("td",[t._v("—")]),n("td",[t._v("#000000")])]),n("tr",[n("td",[t._v("line-width")]),n("td",[t._v("线条宽度")]),n("td",[t._v("Number")]),n("td",[t._v("—")]),n("td",[t._v("3")])]),n("tr",[n("td",[t._v("canvasWidth")]),n("td",[t._v("画布宽度")]),n("td",[t._v("Number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("canvasHeight")]),n("td",[t._v("画布高度")]),n("td",[t._v("Number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("bgColor")]),n("td",[t._v("画布背景色")]),n("td",[t._v("String")]),n("td",[t._v("—")]),n("td",[t._v("#f7f7f7")])]),n("tr",[n("td",[t._v("imgBgColor")]),n("td",[t._v("生成图片背景色")]),n("td",[t._v("String")]),n("td",[t._v("—")]),n("td",[t._v("tranparent")])]),n("tr",[n("td",[t._v("crop")]),n("td",[t._v("是否裁剪图片")]),n("td",[t._v("Boolean")]),n("td",[t._v("—")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("footer")]),n("td",[t._v("是否显示底部")]),n("td",[t._v("Boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("before-done")]),n("td",[t._v("签名完成前调用，如果返回false会阻止默认签名完成事件")]),n("td",[t._v("Function")]),n("td",[t._v("—")]),n("td",[t._v("canvas")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("$")]),t._v(" Events")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("返回值")])])]),n("tbody",[n("tr",[n("td",[t._v("orientationchange")]),n("td",[t._v("移动设备旋转事件")]),n("td",[t._v("orientation")])]),n("tr",[n("td",[t._v("on-clear")]),n("td",[t._v("清空画布事件")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("on-done")]),n("td",[t._v("完成签名事件，返回签名生成的图片")]),n("td",[t._v("data:image/png;base64")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("$")]),t._v(" Methods")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("返回值")])])]),n("tbody",[n("tr",[n("td",[t._v("clear")]),n("td",[t._v("清空画布")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("done")]),n("td",[t._v("完成签名")]),n("td",[t._v("—")])])])])}],d={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",{staticStyle:{height:"420px","text-align":"center"}},[n("zm-sign",{ref:"sign",attrs:{color:"#409EFF","line-width":4,"canvas-width":692,"canvas-height":350,footer:!1},on:{"on-clear":t.handleClear,"on-done":t.handleDone}}),t._v(" "),n("Button",{on:{click:t.clear}},[t._v("清空")]),t._v(" "),n("Button",{on:{click:t.done}},[t._v("完成")])],1)]],2)},e=[];const n={data(){return{}},created(){},methods:{async done(){let t=await this.$refs.sign.done();console.log(t)},clear(){this.$refs.sign.clear()},handleClear(){this.$Message.success("画布已清空")},handleDone(t){console.log(t)}}};return{render:t,staticRenderFns:e,...n}}()}},s=d,o=n("2877"),_=Object(o["a"])(s,a,r,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0bdf76.757b8101.js.map