<template>
    <div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="气象" name="1">
                <weather-page :list-prop="atmosphere" type="atmosphere"></weather-page>
            </el-tab-pane>
            <el-tab-pane label="空气" name="2">
                <weather-page :list-prop="weather" type="weather"></weather-page>
            </el-tab-pane>
            <el-tab-pane label="水质" name="3">
                <weather-page :list-prop="rain" type="rain"></weather-page>
            </el-tab-pane>
            <el-tab-pane label="河涌" name="4">
                <weather-page :list-prop="river" type="river"></weather-page>
            </el-tab-pane>
            <el-tab-pane label="拍门" name="5">
                <weather-page :list-prop="other" type="other"></weather-page>
            </el-tab-pane>
        </el-tabs>


    </div>
</template>

<script>
import WeatherPage from './weather-page.vue'
export default {
    name: "index-admin",
    components: {
        WeatherPage
    },
    data() {
        return {
            activeName: "1",
            atmosphere: [
                {
                    prop: "temperature",
                    required: true,
                    message: "必为一个数字",
                    trigger: 'change',
                    label:"气温",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "num",
                    required: true,
                    
                    trigger: 'change',
                    label:"风级",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "drection",
                    required: true,
                    
                    trigger: 'change',
                    label:"风向",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必填"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "status",
                    required: true,
                    
                    trigger: 'change',
                    label:"天气情况",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必填"))
                        }else{
                            callback()
                        }
                    }
                },
       

            ],
            weather: [
                {
                    prop: "pm25",
                    required: true,
                    message: "必为一个数字",
                    trigger: 'change',
                    label:"pm2.5",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "pm10",
                    required: true,
                    
                    trigger: 'change',
                    label:"pm10",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "so2",
                    required: true,
                    
                    trigger: 'change',
                    label:"so2",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "no2",
                    required: true,
                    
                    trigger: 'change',
                    label:"no2",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "o3",
                    required: true,
                    
                    trigger: 'change',
                    label:"o3",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "co",
                    required: true,
                    
                    trigger: 'change',
                    label:"co",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
        
                }

            ],
            rain:  [
                {
                    prop: "smell",
                    required: true,
                    trigger: 'change',
                    label:"气味",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必填"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "color",
                    required: true,
                    
                    trigger: 'change',
                    label:"颜色",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必填"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "oil",
                    required: true,
                    
                    trigger: 'change',
                    label:"浮油（g）",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "temperature",
                    required: true,
                    
                    trigger: 'change',
                    label:"温度",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "ph",
                    required: true,
                    
                    trigger: 'change',
                    label:"PH",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "o2",
                    required: true,
                    
                    trigger: 'change',
                    label:"氧气",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
        
                },
                {
                    prop: "km",
                    required: true,
                    
                    trigger: 'change',
                    label:"高猛酸钾指数",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
        
                },
                {
                    prop: "pho2",
                    required: true,
                    
                    trigger: 'change',
                    label:"化学需氧量",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
        
                },
                {
                    prop: "N3",
                    required: true,
                    
                    trigger: 'change',
                    label:"氨氮",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
        
                },
                {
                    prop: "p",
                    required: true,
                    
                    trigger: 'change',
                    label:"总磷",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
        
                },
                {
                    prop: "people",
                    required: true,
                    
                    trigger: 'change',
                    label:"采样人",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必填"))
                        }else{
                            callback()
                        }
                    }
        
                }
    

            ],
            river:  [
                {
                    prop: "value",
                    required: true,
                    trigger: 'change',
                    label:"水位",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "monitoringDeNum",
                    required: true,
                    
                    trigger: 'change',
                    label:"监控设备",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必填"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "onlineQuantity。",
                    required: true,
                    
                    trigger: 'change',
                    label:"在线数量",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "alertQuantity",
                    required: true,
                    
                    trigger: 'change',
                    label:"警戒数量",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "variationTrend",
                    required: true,
                    
                    trigger: 'change',
                    label:"变化趋势",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必为一个数字"))
                        }else if(isNaN(value)){
                            callback(new Error("必为一个数字"))
                        }else{
                            callback()
                        }
                    }
                },
            
            ],
            other:  [
                {
                    prop: "name",
                    required: true,
                    trigger: 'change',
                    label:"名称",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必填"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "state",
                    required: true,
                    
                    trigger: 'change',
                    label:"状态",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必填"))
                        }else{
                            callback()
                        }
                    }
                },
                {
                    prop: "online",
                    required: true,
                    
                    trigger: 'change',
                    label:"在线情况",
                    validator:function(rules,value,callback){
                        if(value===''){
                            callback(new Error("必填"))
                        }else{
                            callback()
                        }
                    }
                }
            
            ],
        }
    }
}
</script>

<style lang='less' scoped></style>