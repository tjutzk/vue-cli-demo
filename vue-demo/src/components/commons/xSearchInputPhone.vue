<template>
  <div class="phone_container">
    <span>{{data.name}}</span>
    <div class="phone_content">
      <div class="require_phone">
        <el-input 
          v-model="inputData.value" 
          placeholder="请输入" 
          :size="mySize" 
          :style="styleObject"
          :class="{active_border:isActive()}"
          v-checkphone="{data:inputData.value,result:isCorrect.result,callback:check}">
        </el-input>
        <span v-show="inputData.isRequire">*</span>
      </div>
      <p v-show="!isCorrect.result">手机格式不正确，请重新输入</p>
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
            isCorrect:{
                uncorrectTitle:this.data.name,
                result:true,
            },
            mySize:this.size,
            styleObject:{
                width:this.width,
            }
        }
    },
    //定义vue自定义指令
    directives:{
        //检查手机号格式
        checkphone:{
            update:function(el,binding){
                console.log(el)
                console.log(binding)
                let re_phone = /^1\d{10}$/
                binding.value.result= re_phone.test(binding.value.data) ? true : false
                console.log(binding.value.result)
                binding.value.callback(binding.value.result)  
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
        //检查格式是否是手机号
        check(result){
            // if(result){
            //     this.isCorrect.result = /^1\d{10}$/.test(value) ? true : false
            //     console.log(this.isCorrect)
            //     this.$emit(EVENTS.CHECK_DATA_FORMAT, this.isCorrect)
            // }
            this.isCorrect.result = result
            this.$emit(EVENTS.CHECK_DATA_FORMAT, this.isCorrect)
        },
        isActive(){
            if(this.inputData.isRequire){
                return this.inputData.value=="" ? true : false
            }
        }, 
    }
}
</script>

<style scoped>
.phone_container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.phone_container .phone_content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.phone_content p {
  color: red;
  font-size: 5px;
}

.require_phone {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 10px;
}

.require_phone span {
  font-size: 20px;
  color: red;
}
</style>