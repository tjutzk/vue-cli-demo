<template>
    <div class="number_container">
        <span>{{data.name}}</span>
        <div class="number_content">
            <div class="number_require">
                <el-input 
                    v-model="inputData.value" 
                    placeholder="请输入" 
                    @change="valueChange()" 
                    :size="mySize" 
                    :style="styleObject">
                </el-input>
                <span v-show="inputData.isRequire">*</span>
            </div>
            <p v-show="!isCorrect.result">不全是数字，请重新输入</p>
        </div>
    </div>
</template>

<script>
const EVENTS={
    VALUE_CHANGE:"value-Change",
    CHECK_DATA_FORMAT: "check_data_format"
}
export default {
    data () {
        return {
            inputData:this.data,
            mySize:this.size,
            isCorrect:{
                uncorrectTitle:this.data.name,
                result:true,
            },
            styleObject:{
                width:this.width,
            },
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
                return {}
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
    //校验是否是数字
        valueChange(value){
            if(value){
                this.isCorrect.result = /^[0-9]*$/.test(value) ? true : false
                this.$emit(EVENTS.CHECK_DATA_FORMAT,this.isCorrect)
            }
        }
    }
}
</script>

<style scoped>
.number_container{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.number_container .number_content{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10px;
}

.number_content p{
    color:red;
    font-size:5px;
}

.number_content .number_require{
    display: flex;
    flex-direction: row;
    justify-content: flex-start
}

.number_require span{
    font-size: 20px;
    color: red;
}
</style>