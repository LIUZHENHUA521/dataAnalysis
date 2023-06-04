<template>
   <div>
      <h1></h1>
      <div class="flexCenter">

         <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" status-icon>
            <el-form-item label="日期" prop="date">
               <el-date-picker v-model="ruleForm.date" type="date" label="Pick a date" placeholder="Pick a date"
                  style="width: 100%" />
            </el-form-item>

            <el-form-item :label="item.label" :prop="item.prop" v-for="(item) in listProp" :key="item.prop">
               <el-input v-model="ruleForm[item.prop]" placeholder="请输入" />
            </el-form-item>

            <el-form-item>
               <el-button type="primary" @click="submitForm(ruleFormRef)">
                  上传
               </el-button>
               <el-button @click="resetForm(ruleFormRef)">重制</el-button>
            </el-form-item>
         </el-form>
         <div>
            <el-table :data="list" border style="width: 100%">
               <el-table-column prop="dateStr" label="时间" />
               <el-table-column :prop="item.prop" :label="item.label" v-for="(item) in listProp" :key="item.prop" />
               <el-table-column fixed="right" label="Operations" width="120">
                  <template #default="scope">
                     <el-button link type="danger" size="small" @click="handleClick(scope)">删除</el-button>
                  </template>
               </el-table-column>
            </el-table>
            <el-pagination layout="prev, pager, next" :total="maxPage" @current-change="changePage" />
         </div>
      </div>
   </div>
</template> 
<script>
import { ElMessage } from 'element-plus'
export default {
   name: "weather-edit",
   props: ['listProp', 'type'],
   data() {
      return {
         list: [],
         pageIndex: 1,
         maxPage: 10,
         ruleForm: {
            date: ''
         },
         rules: {
            date: [
               {
                  required: true,
                  message: "必填一个数字",
                  trigger: 'change',

               }
            ],
         }
      }
   },
   methods: {
      changePage(e){
         this.pageIndex = e
         this.getList()

      },
      submitForm() {
         let keys = Object.keys(this.ruleForm)
         for (let i = 0; i < keys.length; i++) {
            if (this.ruleForm[keys[i]] === '') {
               ElMessage("请补充完整内容")
               return
            }
         }
         let obj = {
            ...this.ruleForm,
            time: this.ruleForm.date.getTime(),
            dateStr:this.ruleForm.date.toDateString()
         }
         this.$tcb.database().collection(this.type).add(obj).then(() => {
            ElMessage({
               message: "添加成功",
               type: 'success',
            })
            this.pageIndex = 1
            this.getList()
         })
      },
      resetForm() {
         Object.keys(this.ruleForm).forEach(key => {
            this.ruleForm[key] = ''
         })
      },
      getList() {
      
         this.$tcb.database().collection(this.type).skip(this.pageIndex-1).limit(this.maxPage).get().then(res => {
            this.list = res.data
         })
         this.$tcb.database().collection(this.type).count().then(res=>{
            this.maxPage = Math.ceil(res.total/20)
         })
      },
      handleClick(e) {
         console.log(e.row)
         this.$tcb.database().collection(this.type).doc(e.row._id).remove().then(()=>{
            this.pageIndex = 1
            this.getList()
         })
      }
   },
   created() {
      this.listProp.forEach(item => {
         this.rules[item.prop] = [item]
         this.ruleForm[item.prop] = ''

      })
      this.getList()
   }
}
</script>
  
<style>
.flexCenter {
   display: flex;
   justify-content: space-around;
   align-items: center;
}
</style>