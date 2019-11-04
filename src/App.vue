<template>
  <div id="app">
    <div class="appCon">
      <!-- 侧边栏 -->
      <div class="menuLeft">
        <div v-for="(item , key , index) in meun">
          <leftMeunBtn  :name="key"   :sonMeun="item"></leftMeunBtn>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftMeunBtn from './views/wxmuen/leftMeunBtn'

let meun = require("./assets/leftMeun.json")
export default {
  data(){
    return{
      meun
    }
  },
  components:{
    "leftMeunBtn" : leftMeunBtn
  }
}
</script>

<style lang="scss" scoped>
#app {
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
.appCon{
  width: 100%;
  height: 100%;
  display: flex;
  .menuLeft{
    box-shadow: 0 1px 5px gray;
    background-color: #2c3e50;
    padding-top: 25px;
    min-height: 600px;
    min-width: 12rem;
    a{
      display: block;
      color: #ccc;
      //color: #42b983;
     padding:  .5em  1em;
     font-size: 18px;
     line-height: 2em;
     &:hover{
       background-color: rgb(97, 12, 19);
     }
    }
  }
}
</style>
