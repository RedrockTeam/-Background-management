<template>
    <div  class="meun">
        <!-- 菜单按钮仿手机容器 -->
            <div class="pone">
                <ul>
                    <meun v-for="(item , index) in meun"  :sMeun="item['sub_button']  ?   item['sub_button'].list : []"  :id="index">
                        <a >{{item.name}}</a>
                    </meun>
                </ul>
            </div>
            <!-- 点击菜单之后的相应的设置选项展示 -->
            <div class="meunSet">
                <router-view></router-view>
                <div class="send">
                   <a @click="send()">提交保存</a>
            </div>
            </div>
    </div>
</template>
<script>
import  btn from '../views/wxmuen/meunBtn.vue'
export default {
    data(){
        return{
            meun:[{name : '重邮小帮手'  , son:['11' , '22' , '33']} ,  {name : '大学习'  , son:['11' , '22' , '33']}   , {name : '重邮小帮手'  , son:['11' , '22' , '33']} ]
        }
    },
    components:{
        'meun'  : btn
    },
    created(){
        this.meun  = this.test.button
    },
    methods:{
        send(){

        }
    }
}
</script>
<style lang="scss" scoped>
// 手机的最小宽度设置
$minWight  : 350px;
.meun{
    font-size: 20px;
    margin: 0  2.5em  0  2.5em; 
    padding-top: 4em;
    display: flex;
    .pone{
        display: flex;
        align-items: flex-end;
        min-width: $minWight;
        height: 80%;
        box-shadow: 0 1px 5px gray;
        ul{
            display: flex;
        }
    }
    .meunSet{
        width: 600px;
        height: 80%;
        box-shadow: 0 1px 5px gray;
        margin-left: 50px;
        position: relative;
        .send{
            position: absolute;
            height: 50px;
            width: 100%;
            bottom: -100px;
            a{
                color: blue;
            }
        }
    }
}
</style>