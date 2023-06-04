<template>
  <div class="component">
      <div class="left-content"
          style="background-image: url('https://themes.pixelstrap.com/fastkart/assets/images/inner-page/log-in.png');">
      </div>
      <div class="right-content">
          <h1 class="title" style="margin-bottom: 50px;">管理员登陆</h1>
          <el-form ref="ruleFormRef" :model="ruleForm" status-icon label-width="120px" class="demo-ruleForm">
              <el-form-item prop="username">
                  <el-input class="input" placeholder="账号" v-model="ruleForm.username" />
              </el-form-item>
              <el-form-item prop="password">
                  <el-input class="input" placeholder="密码" v-model="ruleForm.password" type="password"
                      autocomplete="off" />
              </el-form-item>

          </el-form>
          <el-button type="danger" size="large" class="button" @click="
              login(ruleFormRef)">登陆</el-button>
         
      </div>
  </div>
</template>

<script setup>
import { reactive, h, getCurrentInstance } from "vue";
import {useRouter} from 'vue-router'
import { ElNotification } from 'element-plus';
let r = useRouter()
let ruleForm = reactive({
  username: '',
  password: ''
})
let that = getCurrentInstance()
let tcb = that.proxy.$tcb
async function login() {
  if (ruleForm.username.length == 0 || ruleForm.password.length == 0) {
      ElNotification({
          title: '错误',
          message: h('i', { style: 'color: teal' }, '请先补充完整信息'),
      })
      return
  }
  try {
      let res = await tcb.database().collection('admin').where({
        username:ruleForm.username,
        password:ruleForm.password
      }).count()
      if(res.total>0){
        localStorage.setItem('login',true)
        r.push('/admin')
        ElNotification({
              title: '登陆成功'
          })
      }else{
        ElNotification({
              title: '登陆失败',
              message: h('i', { style: 'color: teal' }, '账号或密码错误'),
          })
      }
      console.log(res)
  
  } catch (err) {
      console.log(err)
  }
} 
</script>

<style>
h1{
    margin: 0;
}
.left-content{
    margin-top: 100px;
    width: 550px;
    height: 540px;
    background-size:cover ;
    background-image: url('https://themes.pixelstrap.com/fastkart/assets/images/inner-page/sign-up.png');
    background-repeat: no-repeat;
}
.title{
    font-size: 30px;
    color: #222;
}
.component{
    display: flex;
    justify-content: space-evenly;
   margin-top: 20px;
    
}
.button{
    margin-top: 20px;
     color: #fff;
     font-size: 20px;
     padding: 25px 0 25px 0;
 }
 .input{
    width: 330px !important;
    height: 50px !important;
    font-size: medium;
}
.el-form-item__content{
    margin: 0 !important;
}
.right-content{
    display: flex;
    align-content: center;
    flex-direction: column;
    text-align: left;
    width: 357px;
    height: 584px;
    padding: 45px;
    background-color: #fff;
    border-radius: 10px;
}
.active{
    background-color: #0da487;
}
.point{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #000;
    margin-right: 5px;
}
.agreement{
    display: flex;
    align-items: center;
}


.title{
    font-size: 30px;
    color: #222;
}


.el-form-item__content{
    margin: 0 !important;
}

.login-nav{
    color: #0da487;
}</style>