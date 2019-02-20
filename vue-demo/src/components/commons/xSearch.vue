<template>
    <ul class="search_container">
        <li v-for="item in mySearchList" :key="item.id">
            <component 
                :is="item.type" 
                :data="item" 
                :size="mySize"
                :width="myWidth"
                @onclick-search-btn="handleOnclickSearchBtn"
                @onclick-adchange-btn="handleOnclickAdchangeBtn"
                @onclick-clear-btn="handleOnclickClearBtn"
                @check_data_format="handleCheckDataFormat"
                v-show="show(item.searchType)">
            </component>
        </li>
    </ul>
</template>
<script>
const EVENTS={
    ONCLICK_SEARCH:'onclick-search'
}
import XSearchInput from "./xSearchInput";
import XSearchSelect from "./xSearchSelect";
import XSearchData from "./xSearchData";
import XSearchRadio from "./xSearchRadio";
import XSearchBtn from "./xSearchBtn";
import XSearchInputPhone from "./xSearchInputPhone"
import XSearchInputNumber from "./xSearchInputNumber"
export default {
    components: {
        XSearchInput,
        XSearchSelect,
        XSearchData,
        XSearchRadio,
        XSearchBtn,
        XSearchInputPhone,
        XSearchInputNumber
    },
   
    data () {
        return {
            // data数据格式：1.当数据格式中type传入的是按钮类型时，该value值传入的是按钮类型;
            //2.searchType属于高级搜索还是普通搜索
            //3.isRequire 是否为必填项
            mySearchList:this.searchList,
            //切换普通搜索、高级搜索
            showType:"ordinary",
            //数据格式是否正确,将数据格式不正确的组件以对象的形式保存到改数据中
            isCorrect:[],
            //输入框size设置（设置el-ui size）值为：medium、small、mini 主要影响高度
            mySize:this.size,
            //输入框宽度
            myWidth:this.width,
        }
    },
    props:{
        searchList:{
            type:Array,
            default:function(){
                return[]
            }
        },
        //输入框size设置（设置el-ui size）
        size:{
            type:String,
            default:function(){
                return "medium"
            }
        },

        width:{
            type:String,
            default:function(){
                return "150px"
            }
        },

    },
    methods:{  
        //点击普通搜索或者高级搜索，切换搜索类型
        handleOnclickAdchangeBtn(){
            console.log('触发adchangebtn')
            //循环遍历过程中foreach不能使用return退出循环，改用try、catch
            this.mySearchList.forEach((item,index) => {
                try {
                    if(item.name === "高级搜索"){
                        item.name = "普通搜索"
                        this.showType = "all"
                        console.log("你点击了高级搜索按钮，按钮文案切换为普通搜索")
                        throw 'btnTrext already change'//在这里抛出异常
                    }
                    if(item.name === "普通搜索"){
                        item.name = "高级搜索"
                        this.showType = "ordinary"
                        console.log("你点击了普通搜索按钮，按钮文案切换为普通搜索")
                        throw 'btnTrext already change'//在这里抛出异常
                    }
                } catch (e) {
                    console.log(e);
                }
                
            }); 
        },
        //点击搜索按钮
        handleOnclickSearchBtn(){
            let searchValue=[]
            console.log("触发搜索按钮")
            //先判断所有必填项是否填写
            let isComplete = this.checkDataComplete()
            if(!isComplete.result){
                alert( isComplete.title + "不能为空")
                return
            }

            //判断数据格式是否正确
            let uncorrectTitle=""
            this.isCorrect.forEach((item)=>{
                if(!item.result){
                    uncorrectTitle = item.uncorrectTitle
                }
            })
            if(uncorrectTitle){
                alert(uncorrectTitle + "数据格式不正确")
                return;
            }

            //发送数据格式化{id："xxx",value:"xxx"}
            searchValue = this.formatData()
            
            //将数据发送给外层，并调用外层对应的ONCLICK_SEARCH方法
            this.$emit(EVENTS.ONCLICK_SEARCH,searchValue)

        },
        //点击清空，清空搜索数据
        handleOnclickClearBtn(){
            console.log("触发清空按钮")
            this.mySearchList.forEach((item,index)=>{
                if(item.type === "x-search-data"){
                    item.value = []
                }else if(item.type != "x-search-btn"){
                    item.value = ""
                }
            })
        },
        //是否显示高级搜索
        show(type){
            if(this.showType === 'all'){
                return true
            }
            if(this.showType === 'ordinary'){
                return type === 'ordinarySearch' ? true : false
            }
        },

        //检查数据格式是否正确
        handleCheckDataFormat(correctMsg){
            console.log(correctMsg)
            this.formatisCorrect(correctMsg)
            console.log(this.isCorrect)
        },

        //判断一个对象在包含许多对象的数组中是否存在
        isExistObj(json1,arr){
            if(JSON.stringify(arr).indexOf(JSON.stringify(json1))==-1){
                return false;
            }else{
                return true;
            }
        },

        //格式化isCorrect
        formatisCorrect(json1){
            if(this.isCorrect.length == 0 || !this.isExistObj(json1, this.isCorrect)){
                this.isCorrect.push(json1)
                return
            }

            if(this.isExistObj(json1, this.isCorrect)){
                this.isCorrect.forEach((item)=>{
                    if(item.uncorrectTitle === json1.uncorrectTitle){
                        item.result = json1.result
                    }
                })
                return
            }
        },

        //判断数据是否完整，必填项的value值不为空
        checkDataComplete(){
            let isComplete = {title:"",result:true}
            this.mySearchList.forEach((item)=>{
                if(item.isRequire){
                    this.isNull(item.value) ? (isComplete.result=false,isComplete.title = item.name) : ''
                }
            })
            return isComplete
        },

        //点击搜索按钮格式化数据{id："xxx",value:"xxx"}
        formatData(){
            let tempArr = []
            console.log(this.mySearchList)
            this.mySearchList.forEach((item)=>{
                if(item.type != "x-search-btn" && String(item.value) !=""){
                    let tempJson={
                        id:'',
                        value:''
                    }
                    tempJson.id=item.id
                    tempJson.value=item.value
                    tempArr.push(tempJson)
                }
            })
            console.log(tempArr)
            return tempArr
        },

        //判断字符串或者是数组是否为空
        isNull(obj){
            //字符串类型不能使用instanceof判断
            if(typeof(obj) === "string"){
                return obj === "" ? true : false
            }

            if (obj instanceof Array){
                return obj.length == 0 ? true : false
            }
        }
    },
    
    //监控外部传入的searchList,当searchList变化是赋值给mySearchList重新渲染
    watch:{
        searchList:{
            handler(newVal){
                this.mySearchList=newVal
            },
            deep:true,
        }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
    }
    .search_container{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        background-color: rgb(240, 240, 240)
    }

    .search_container li{
        margin:0 30px 15px 0px;
    }
</style>

<style>
    .active_border{
        border-radius: 4px;
        border: 1px solid red;  
    }
</style>



