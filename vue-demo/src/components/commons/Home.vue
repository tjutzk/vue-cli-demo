<template>
    <div class="container">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div class="content_box">
            <v-tags></v-tags>
            <div class="content">
                <list-container></list-container>
                <router-view></router-view>
                <x-search :search-list="data" @onclick-search="handleOnclickSearch"></x-search>
            </div>
        </div>
    </div>
</template>

<script>
import VHeader from './Header.vue';
import VSidebar from './Sidebar.vue';
import VTags from './Tags.vue';
import ListContainer from './listContainer.vue';
import XListView from './xListView.vue'
import XSearch from './xSearch.vue'
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            //数据格式：1.当数据格式中type传入的是按钮类型时，该value值传入的是按钮类型;
            //2.searchType属于高级搜索还是普通搜索
            //3.isRequire 是否为必填项
            data:[{
                    id:1001,
                    name:"微信昵称",
                    value:"就不吃肉",
                    type:"x-search-input",
                    searchType:"ordinarySearch",
                    isRequire:true
                },
                {
                    id:1002,
                    name:"微信号",
                    value:"K2still",    
                    type:"x-search-input",
                    searchType:"ordinarySearch",
                    isRequire:false,
                },
                {
                    id:1003,
                    name:"手机号1",
                    value:"13821641625",
                    type:"x-search-input-phone",
                    searchType:"ordinarySearch",
                    isRequire:true,
                },
                {
                    id:1100,
                    name:"手机号2",
                    value:"13821641625",
                    type:"x-search-input-phone",
                    searchType:"ordinarySearch",
                    isRequire:true,
                },
                {
                    id:1004,
                    name:"性别",
                    value:"",
                    type:"x-search-select",
                    searchType:"ordinarySearch",
                    isRequire:false,
                    options:[
                        {
                            id:0,
                            label:"男"
                        },
                        {
                            id:1,
                            label:"女"
                        },
                    ]
                },
                {
                    id:1005,
                    name:"商品种类",
                    value:"",
                    type:"x-search-select",
                    searchType:"ordinarySearch",
                    isRequire:true,
                    options:[
                        {
                            id:0,
                            label:"生活用品"
                        },
                        {
                            id:1,
                            label:"零食小吃"
                        },
                        {
                            id:2,
                            label:"运动健身"
                        },
                        {
                            id:3,
                            label:"休闲娱乐"
                        },
                    ]
                },
                {
                    id:1006,
                    name:"生成时间",
                    value:[],
                    type:"x-search-data",
                    searchType:"seniorSearch",
                    isRequire:true,
                },
                {
                    id:1007,
                    name:"是否关注公众号",
                    value:"",
                    type:"x-search-radio",
                    searchType:"seniorSearch",
                    isRequire:false,
                    options:[
                        {
                            id:0,
                            label:"是"  
                        },
                        {
                            id:1,
                            label:"否"  
                        }
                    ]
                },
                {
                    id:1008,
                    name:"搜索",
                    type:"x-search-btn",
                    value:"searchBtn",
                    searchType:"ordinarySearch",      
                },
                {
                    id:1009,
                    name:"高级搜索",
                    type:"x-search-btn",
                    value:"adChangeBtn",
                    searchType:"ordinarySearch",
                },
                {
                    id:1010,
                    name:"清空",
                    type:"x-search-btn",
                    value:"clearBtn",
                    searchType:"ordinarySearch",
                },
                
            ],
        }
    },
    components:{
        VHeader,
        VSidebar,
        VTags,
        ListContainer,
        XListView,
        XSearch,
    },
    methods: {
        handleOnclickSearch(searchValue){
            console.log("点击搜索按钮")
            console.log(searchValue)
        }
    },
    mounted () {
        // setTimeout(()=>{
        //     this.data = [
        //         {
        //             id:1001,
        //             name:"微信昵称",
        //             value:"就不吃肉",
        //             type:"x-search-input",
        //             searchType:"ordinarySearch"
        //         },
        //         {
        //             id:1002,
        //             name:"微信号",
        //             value:"K2still",
        //             type:"x-search-input",
        //             searchType:"ordinarySearch",
        //         },
        //         {
        //             id:1003,
        //             name:"手机号",
        //             value:"13821641625",
        //             type:"x-search-input-phone",
        //             searchType:"ordinarySearch"
        //         },
        //         {
        //             id:1004,
        //             name:"性别",
        //             value:"",
        //             type:"x-search-select",
        //             searchType:"ordinarySearch",
        //             options:[
        //                 {
        //                     id:0,
        //                     label:"男"
        //                 },
        //                 {
        //                     id:1,
        //                     label:"女"
        //                 },
        //             ]
        //         },
        //         {
        //             id:1005,
        //             name:"商品种类",
        //             value:"",
        //             type:"x-search-select",
        //             searchType:"ordinarySearch",
        //             options:[
        //                 {
        //                     id:0,
        //                     label:"生活用品"
        //                 },
        //                 {
        //                     id:1,
        //                     label:"零食小吃"
        //                 },
        //                 {
        //                     id:2,
        //                     label:"运动健身"
        //                 },
        //                 {
        //                     id:3,
        //                     label:"休闲娱乐"
        //                 },
        //             ]
        //         },
        //         {
        //             id:1006,
        //             name:"生成时间",
        //             value:[],
        //             type:"x-search-data",
        //             searchType:"seniorSearch",
        //         },
        //         {
        //             id:1007,
        //             name:"是否关注公众号",
        //             value:"",
        //             type:"x-search-radio",
        //             searchType:"seniorSearch",
        //             options:[
        //                 {
        //                     id:0,
        //                     label:"是"  
        //                 },
        //                 {
        //                     id:1,
        //                     label:"否"  
        //                 }
        //             ]
        //         },
        //         {
        //             id:1008,
        //             name:"搜索",
        //             type:"x-search-btn",
        //             value:"searchBtn",
        //             searchType:"ordinarySearch",            
        //         },
        //         {
        //             id:1009,
        //             name:"高级搜索",
        //             type:"x-search-btn",
        //             value:"adChangeBtn",
        //             searchType:"ordinarySearch",  
        //         },
        //         {
        //             id:1010,
        //             name:"清空",
        //             type:"x-search-btn",
        //             value:"clearBtn",
        //             searchType:"ordinarySearch",  
        //         },
                
        //     ]
        // },3000)
    },
}
</script>

<style scoped>
    .container{
        width: 100%;
        height:100%;
    }

    .content_box{
        height:100%;
        position: absolute;
        top: 70px;
        left: 250px;
        right: 0;
    }

    .content{
        height: 100%;
        background-color: rgb(240, 240, 240)
    }
</style>




