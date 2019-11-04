<template>
    <div class="set">
        <div v-show="set.type">
        <div class="delete  clearFix">
            <a @click="del()">删除</a>
        </div>
        <div>
            <label>
                type:{{set.type}}
            </label>
        </div>
        </div>
        <div v-for="(item , name) in detail">
            <label v-show="name != 'type'">
                <p> {{name}}: </p>
                <input   type="text"    v-model="set[name]"> 
            </label>
        </div>
        <div class="done">
            <a @click="done()">修改完成</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            set:{},
            type:''
        }
    },
    computed:{
        detail(){
            let id = this.$route.query.id
            let index = this.$route.query.index
            this.set =  this.copy( this.test.button[id]['sub_button'].list[index])
            this.type = this.set.type
            return this.test.button[id]['sub_button'].list[index]
        }
    },
    methods:{
        del(){
             let id = this.$route.query.id
             let index = this.$route.query.index  
             this.test.button[id]['sub_button'].list.splice(index , 1)   
             alert("删除成功")
             this.$router.push({path:'/meun'})
        },
        done(){
            let id = this.$route.query.id
            let index = this.$route.query.index
            if(this.check()){
                this.test.button[id]['sub_button'].list[index] = this.set
                alert('修改成功')
            }else{
                alert('修改格式不能为空')
            }
        },
    }
}
</script>
<style lang="scss" scoped>
.set{
    width: 100%;
    height: 100%;
    margin-top: 50px;
    position: relative;
    div{
        margin: 20px 0 ;
        input{
            height: 2.4em;
            width: 25em;
        }
    }
    p{
        margin:  0 0;
        padding:  0  0;
    }
    .delete {
        padding-right: 50px;
        a{
            float: right;
            font-size: 16px;
            color: red;
        }
    }
    .done{
        width: 100%;
        height: 50px;
        position:absolute;
        bottom: 50px;
        a{
            cursor: pointer;
            color: blue;
        }
    }
}
</style>