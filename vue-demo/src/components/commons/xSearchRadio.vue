<template>
    <div class="radio_container">
        <span>{{radioData.name}}</span>
        <div class="radio_content">
            <el-radio 
                v-model="radioData.value"
                v-for="item in radioData.options"
                :key="item.id"
                :label="item.id"
                :size="mySize"
                :class="{active_border:isActive()}">
                {{item.label}}
            </el-radio>
            <span class="radio_require" v-show="radioData.isRequire">*</span>
        </div>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            radioData:this.data,
            mySize:this.size,
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
    },
    methods:{
        isActive(){
            if(this.radioData.isRequire){
                return String(this.radioData.value)=="" ? true : false
            }
        }, 
    }
}
</script>
<style scoped>
    .radio_container{
        display: flex;
        flex-direction: row;
        align-items: center
    }

    .radio_container .radio_content{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-left: 10px;
    }

    .radio_content span{
        color: red;
        font-size: 20px;
    }
</style>
