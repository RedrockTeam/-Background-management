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
const baseUrl = "https://wx.redrock.team/magicloop/menu?token=magicloooooooooop"
export default {
    data(){
        return{
            meun:[],
            data:{},
        }
    },
    components:{
        'meun'  : btn
    },
    created(){
        this.$axios.get(baseUrl).then((res) =>{
            this.data = res.data
            try{
               this.test.button = res.data.selfmenu_info.button
            }
            catch{
                alert("请求错误")
            }
            this.meun  = this.test.button
        })
    },
    methods:{
        send(){
            if( this.data.selfmenu_info.button){
                this.data.selfmenu_info.button =  this.test.button
            }else{
                return;
            }
            // this.$axios.patch(baseUrl , this.data, {
            //     headers:{
            //         "Content-Type" : "application/json"
            //     }
            // }).then((res) =>{
            //     if(res.data.errcode === 0){
            //         alert('修改成功')
            //     }else{
            //         alert('修改失败')
            //     }
            // })
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