import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入axios
import axios from 'axios'
//全局引用axios
Vue.prototype.$axios = axios

//引入通用样式
import  "./assets/css/common.css"

Vue.config.productionTip = false

//将按钮数据定义为全局变量初始化
Vue.prototype.test = {
  button : [ 
    { 
        "type": "click", 
        "name": "今日歌曲", 
        "key": "V1001_TODAY_MUSIC"
    }, 
    { 
        "name": "菜单", 
        "sub_button": { 
            "list": [ 
                { 
                    "type": "view", 
                    "name": "搜索", 
                    "url": "http://www.soso.com/"
                }, 
                { 
                    "type": "view", 
                    "name": "视频", 
                    "url": "http://v.qq.com/"
                }, 
                { 
                    "type": "click", 
                    "name": "赞一下我们", 
                    "key": "V1001_GOOD"
                }
            ]
        }
    }
]
}

//对按钮信息进行浅拷贝的方法
Vue.prototype.copy = function(obj){
    let newObj = {}
    for(let item in obj){
        newObj[item] = obj[item]
    }
    return newObj
}

//检测输入的值是否为空
Vue.prototype.check = function(obj){
    for(let item in obj){
        let test = obj[item].trim()
        if( test == null || test == ''  || test == undefined){
            return  false
        }
    }
    return true
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
