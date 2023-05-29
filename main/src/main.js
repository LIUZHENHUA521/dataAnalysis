import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
const routes = [
    {   
        name:"index",
        path:"/",
        component:()=>import('./components/index.vue')
    },
    {   
        name:"login",
        path:"/login",
        component:()=>import('./components/login.vue')
    },
    {   
        name:"register",
        path:"/register",
        component:()=>import('./components/register.vue')
    },

]
app.mount('#app')
