import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus,{ElNotification} from 'element-plus'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts';
import cloudbase from "@cloudbase/js-sdk";
import { createRouter, createWebHashHistory } from 'vue-router'
const app = createApp(App)
const tcb = cloudbase.init({
    env: "shop-9gnlh0319ac1f397"
});//云开发
tcb.auth({
    persistence: "local"
  })
  .anonymousAuthProvider()
  .signIn()
  .then(() => {
    console.log("登陆成功")
    // 登录成功
  })
  .catch((err) => {
    // 登录失败
    console.log('err',err)
  });
app.config.globalProperties.$echarts = echarts //全局添加echarts
app.config.globalProperties.$tcb = tcb//全局添加腾讯云
const routes = [
    {
        name: "indexHome",
        path: "/",
        component: () => import('./components/index-page.vue')
    },
    {
        name: "loginUser",
        path: "/login",
        component: () => import('./components/login-page.vue')
    },
    {
        name: "admin",
        path: "/admin",
        component: () => import('./components/admin/admin-index.vue'),
        beforeEnter(to,from,next) {
            let login = localStorage.getItem('login')
            if(login){
                next()
            }else{
                ElNotification({
                    title:"请先登录"
                })
                next('/login')
            }
        },
    },


]//配置路透
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
app.use(ElementPlus)
app.use(router)
app.mount('#app')
