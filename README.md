# wxmeun

### 技术栈
vue 3+vue-router +axios +scss

### 文件目录
```
|-public
      |-index.html
|-src
      |-assets 
              |-css
                  |-common.css               用于公共样式的配置
              |-js
              |-leftMeun.json                 最左侧菜单栏的菜单配置文件
      |-components
              |-meun.vue                          小帮手菜单栏的主组件
      |-viwes
              |-wxmuen                             小帮手的子组件文件夹
                   |-add.vue                          小帮手菜单栏的按钮添加组件     
                   |-leftMeunBtn.vue         管理系统的边侧菜单栏的菜单组件
                   |-meunBtn.vue                小帮手仿手机容器中的按钮组件
                   |-set.vue                             小帮手按钮的设置组件,包括修改，删除操作。
               |-Home.vue                           最开始进入的显示界面
|-App.vue
|-main.js
|router.js                                               路由配置文件


```