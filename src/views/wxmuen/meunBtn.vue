<template>
<li @click="isShow()"  ref="li">
    <slot></slot>
    <div class="btns"  v-show="show  && test.button[id]['sub_button']">
        <router-link  :to="{name : 'add' , query : {'id' : id}}" >+</router-link>
        <router-link v-for="(item  , index) in sMeun"   :to="{name:'set' , query:{id : id, index : index}}">{{item.name}}</router-link>
    </div>
</li>
</template>
<script>
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        isShow(){
            this.show = !this.show
            if(this.show){
            let that = this
            document.body.addEventListener('click'  , function(){
                that.show = false
            } , true)
            this.$refs.li.addEventListener('click' , function(){
                that.show = !that.show
            })
            }else{
            let that = this
            document.body.removeEventListener('click'  , function(){
                that.show = false
            } , true)
            }
        }
    },
    mounted(){
    },

    props:['sMeun' , 'id']
}
</script>
<style lang="scss" scoped>
li{
    font-size: 20px;
    line-height: 3em;
     min-width: 5em;
     padding: 0  .5em;
     cursor: pointer;
     background-color: #c2c2c2;
     border-right: 1px solid #e7e7eb;
     position: relative;
     .btns{
         font-size: 20px;
         max-width: 150px;
         min-height:50px;
         background-color:  #c2c2c2;
         position: absolute;
         bottom: 3.5em;
         &::after{
             content: ' ';
             width: 0;
             height: 0;
             border-right:7px solid transparent;
	         border-left:7px solid transparent;
	         border-top:7px solid #c2c2c2;
             position: absolute;
             bottom: -7px;
         }
         a{
             font-size: 18px;
             line-height:2em;
             margin: 0   .5em;
             display: block;
             border-bottom: 1px solid #e7e7eb;
             &:hover{
                 background-color: #c2c2c2;
             }
         }
     }
 }
</style>