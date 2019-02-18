<template>
  <div class="phone_container">
    <span>{{data.name}}</span>
    <div class="phone_content">
      <div class="require_phone">
        <el-input v-model="inputData.value" placeholder="请输入" @change="check(inputData.value)"></el-input>
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
        }
    },
    props:{
        data:{
            type:Object,
            default:function(){
                return {}
            }
        },
    },
    methods:{
        //检查格式是否是手机号
        check(value){
            if(value){
                /^1\d{10}$/.test(value) ? this.isCorrect.result=true : this.isCorrect.result=false
                console.log(this.isCorrect)
                this.$emit(EVENTS.CHECK_DATA_FORMAT, this.isCorrect)
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
}

.require_phone span {
  font-size: 20px;
  color: red;
}
</style>