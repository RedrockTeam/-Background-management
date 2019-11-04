<template>
<div class="leftMeunBtn"  @click="show = !show">
    {{name}}
    <transition  name="leftMeunBtn">
          <div  v-show="show">
              <router-link  v-for="(item ,index) in sonMeun"   :to="{path : item.path}">
                  {{item.name}}
              </router-link>
           </div>
    </transition>
</div>
</template>
<script>
export default {
    data(){
        return{
            show: false
        }
    },
    props:["name" , "sonMeun"]
}
</script>
<style lang="scss" scoped>
.router-link-active{
    background-color: rgb(97, 12, 19);
}
.leftMeunBtn{
    cursor: pointer;
    width: 100%;
    min-height: 60px;
    text-align: center;
    line-height: 60px;
    color: #cccccc;
    font-size: 20px;
    div{
        a{
            display: block;
            width: 100%;
            font-size: 18px;
            line-height: 2.5em;
            text-align: center;
        }
    }
}

@keyframes  transition {
    from{
        height: 0%;
    }to{
        height: 100%;
    }
}
</style>