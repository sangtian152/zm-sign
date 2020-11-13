<template>
  <div class="container">
    <zm-sign
     color="#409EFF"
     :line-width="4"
     @on-clear="handleClear"
     @on-done="handleDone"
    ></zm-sign>
    <Button class="back" @click="back">返回</Button>
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
        back(){
          this.$router.push({path:'/'})
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
<style lang="scss" scoped>
  .container {
    position: relative;
    .back {
      position: fixed;
      bottom: 15px;
      right: 15px;
    }
  }
</style>