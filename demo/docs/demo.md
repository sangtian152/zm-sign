## Demo 演示案例

### 基础用法

<br />

::: demo
```html
<template>
  <div style="height: 420px; text-align:center;">
    <zm-sign
     ref="sign"
     color="#409EFF"
     :line-width="4"
     :canvas-width="692"
     :canvas-height="350"
     :footer="false"
     @on-clear="handleClear"
     @on-done="handleDone"
    ></zm-sign>
    <Button @click="clear">清空</Button>
    <Button @click="done">完成</Button>
  </div>
</template>
<script>
    export default {
      methods:{
        async done(){
          let res = await this.$refs.sign.done();
          console.log(res)
        },
        clear(){
          console.log("clear", this.$refs.sign)
          this.$refs.sign.clear();
        },
        handleClear(){
          this.$Message.success("画布已清空")
        },
        handleDone(data){
          console.log(data)
        }
      }  
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color     | 签名颜色   | String  |  —   |   #000000   |
| line-width    | 线条宽度   | Number  |  —   |  3  |
| canvas-width    | 画布宽度   | Number  |  —   |  —  |
| canvas-height   | 画布高度   | Number  |  —   |  —  |
| bg-color    | 画布背景色   | String  |  —   |  #f7f7f7  |
| img-bg-color    | 生成图片背景色   | String  |  —   |  tranparent  |
| erasable    | 是否启用橡皮擦   | Boolean  |  —   |  true  |
| eraser-radius    | 橡皮擦半径   | Number  |  —   |  6  |
| crop    | 是否裁剪图片   | Boolean  |  —   |  true  |
| footer    | 是否显示底部   | Boolean  |  —   |  false  |
| before-done    | 签名完成前调用，如果返回false会阻止默认签名完成事件   | Function  |  —   |  canvas  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| orientationchange | 移动设备旋转事件 | orientation  |
| on-clear | 清空画布事件  |  —   |
| on-done | 完成签名事件，返回签名生成的图片 | data:image/png;base64  |

### Methods

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| clear | 清空画布  |  —   |
| done | 完成签名 |  —   |
