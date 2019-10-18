<template>
  <div id="app">
    <div class="appCon">
      <!-- 侧边栏 -->
      <div class="menuLeft">
        <router-link  :to="{path: '/meun'}">小帮手菜单栏设置</router-link>
        <!-- <router-link  :to={}>小帮手菜单栏设置</router-link>
        <router-link  :to={}>小帮手菜单栏设置</router-link> -->
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-active{
    background-color: rgb(97, 12, 19);
}
#app {
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 600px;
}
.appCon{
  width: 100%;
  height: 100%;
  display: flex;
  .menuLeft{
    box-shadow: 0 1px 5px gray;
    background-color: #2c3e50;
    padding-top: 25px;
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
