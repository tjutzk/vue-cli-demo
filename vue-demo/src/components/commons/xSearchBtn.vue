<template>
    <el-button type="primary" @click="onClick(data.value)" :size="mySize">{{data.name}}</el-button>
</template>

<script>
//定义点击按钮的事件类型
const EVENTS = {
        ONCLICK_SEARCH_BTN: 'onclick-search-btn',
        ONCLICK_ADCHANGE_BTN: 'onclick-adchange-btn',
        ONCLICK_CLEAR_BTN:'onclick-clear-btn',
    }
export default {
    data () {
        return {
            mySize:this.size
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
    },
    methods:{
        //
        onClick(btnType){
            console.log("点击了" + btnType)
            if(btnType === "searchBtn"){
                this.$emit(EVENTS.ONCLICK_SEARCH_BTN);
                return;
            }
            if(btnType === "adChangeBtn"){
                this.$emit(EVENTS.ONCLICK_ADCHANGE_BTN);
                return;
            }
            if(btnType === "clearBtn"){
                this.$emit(EVENTS.ONCLICK_CLEAR_BTN);
                return;
            }
        }
    }
}
</script>
