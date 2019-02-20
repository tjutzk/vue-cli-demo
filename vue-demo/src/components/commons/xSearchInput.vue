<template>
    <div class="input_container">
        <span>{{inputData.name}}</span>
        <div class="required_mark">
            <el-input 
                v-model="inputData.value" 
                placeholder="请输入"  
                :size="mySize" 
                :style="styleObject"
                :class="{active_border:isActive()}">
            </el-input>
            <span v-show="inputData.isRequire">*</span>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            inputData:this.data,
            mySize:this.size,
            styleObject:{
                width:this.width,
            }
        }
    },
    props:{
        data:{
            type:Object,
            default:function(){
                return {}
            }
        },
        size:{
            type:String,
            default:function(){
                return ""
            }
        },
        width:{
            type:String,
            default:function(){
                return ""
            }
        }
    },

    methods:{
        isActive(){
            if(this.inputData.isRequire){
                return this.inputData.value=="" ? true : false
            }
        }
    }
}
</script>

<style scoped>
.input_container{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.required_mark{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 10px;
}

.required_mark span{
    font-size: 20px;
    color: red;
}
</style>





