<template>
    <div class="add">
        <div>
            type:
            <label>
                <input type="radio"  name="type"  value="view"  checked="checked"  @click="type =1">跳转页面
                <input type="radio"  name="type"  value="click"  @click="type=2">图文信息
            </label>
        </div>
        <div v-if="type === 1">
            <div  v-for=" (item , name) in view"  v-show="!(name == 'type')">  
                <label>
                    <p class="name">{{name}} :</p>
                    <input  class="addName" type="text" v-model="view[name]">
                </label>
            </div>
        </div>
        <div v-if="type === 2">
            <div  v-for=" (item , name) in click"  v-show="!(name == 'type')">
                <label>
                    <p class="name">{{name}} :</p>
                    <input    class="addName"   type="text"  v-model="click[name]">
                </label>
            </div>
        </div>
        <div class="addClick">
            <a  @click="add()">添加</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            button:['view' , 'click'],
            type:1,
            view:{
                name : '',
                type:'view',
                url:'',
            },
            click:{
                key:'',
                name:'',
                type:'click',
            }

        }
    },
    methods:{
        add(){
            let id = this.$route.query.id
            let add = this.type === 1 ? this.view : this.click
            if(this.check(add)){
                this.test.button[id]['sub_button'].list.push(add)
                alert('添加成功')
                this.$router.push({path:'/meun'})
            }else{
                alert('请正确填入相关信息')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.addName{
    width: 25em;
     height: 2.4em;
}
.add{
    position: relative;
    margin-top: 50px;
    width: 100%;
    height: 100%;
    div{
        margin: 20px 0 ;
    }
    p{
        margin: 0 0 ;
        padding:0 0;
    }
    .addClick{
        position: absolute;
        width: 100%;
        height: 50px;
        bottom: 50px;
        a{
            color: blue;
        }
    }
}
</style>