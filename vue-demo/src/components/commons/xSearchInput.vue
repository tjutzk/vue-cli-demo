<template>
    <div class="input_container">
        <span>{{inputData.name}}</span>
        <div class="required_mark">
            <el-input v-model="inputData.value" placeholder="请输入" :class="{active:inputData.isrequiore}"></el-input>
            <span v-show="inputData.isRequire">*</span>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            inputData:this.data,
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
    justify-content: flex-start
}

.required_mark span{
    font-size: 20px;
    color: red;
}

.active{
    border: 1px solid red;
}
</style>


