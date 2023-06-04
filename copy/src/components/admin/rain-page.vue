<template>
    <div>
        <h1>降雨</h1>
        <div class="flexCenter">

            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
                status-icon>
                <el-form-item label="日期" prop="date">
                    <el-date-picker v-model="ruleForm.date" type="date" label="Pick a date" placeholder="Pick a date"
                        style="width: 100%" />
                </el-form-item>
                <el-form-item label="降雨量（mm）" prop="value">
                    <el-input v-model="ruleForm.value" placeholder="请输入" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        上传
                    </el-button>
                    <el-button @click="resetForm(ruleFormRef)">重制</el-button>
                </el-form-item>
            </el-form>
            <div>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                    <el-table-column fixed="right" label="Operations" width="120">
                        <template #default>
                            <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="prev, pager, next" :total="50" />
            </div>
        </div>
    </div>
</template>
   
<script>
import { ElMessage } from 'element-plus'
export default {
    name: "weather-edit",
    data() {
        return {
            ruleForm: {
                value: '',
                date: ''
            },
            rules: {
                value: [
                    {
                        required: true,
                        message: "必填",
                        trigger: 'change',

                    }
                ],
                date: [
                    {
                        required: true,
                        message: "必填一个数字",
                        trigger: 'change',
                        type: "number"
                    }
                ]

            }
        }
    },
    methods: {
        submitForm() {
            let keys = Object.keys(this.ruleForm)
            for (let i = 0; i < keys.length; i++) {
                if (this.ruleForm[keys[i]] === '') {
                    ElMessage("请补充完整内容")
                    return
                }
            }
            this.$tcb.database().collection('weather').add(this.ruleForm).then(() => {
                ElMessage({
                    message: "添加成功",
                    type: 'success',
                })
            })
        },
        resetForm() {
            this.ruleForm.value = ''
            this.ruleForm.date = ''
        }
    }
}
</script>
   
<style>
.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>