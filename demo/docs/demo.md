## Demo 演示案例

### 基础用法

<br />

::: demo
```html
<template>
  <div style="height: 400px">
    <zm-sign
     color="#409EFF"
     :line-width="4"
     @on-clear="handleClear"
     @on-done="handleDone"
    ></zm-sign>
  </div>
</template>
<script>
    export default {
      data(){
        return {
    
        } 
      },
      created(){
      }, 
      methods:{
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
| line-width    | 线条宽   | Number  |  —   |  3  |
| before-done    | 签名完成前调用，如果返回false会阻止默认签名完成事件   | Function  |  —   |  canvas  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-clear | 清空画布事件  |  —   |
| on-done | 完成签名事件，返回签名生成的图片 | data:image/png;base64  |

### Methods

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| clear | 清空画布  |  —   |
| done | 完成签名 |  —   |
