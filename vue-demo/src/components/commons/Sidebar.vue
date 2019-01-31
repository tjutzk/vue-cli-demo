<template>
    <div class="sidebar">
       <ul>
           <li v-for="(item,index) in menuslist" :key="index">
               <router-link :to="item.path">
                   {{item.title}}
               </router-link>
            </li>
       </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            menuslist:[
                {
                    title:'系统首页',
                    index:'1',
                    icon:'el-icon-location',
                    path:'/systemhome'
                },
                {
                    title:'基础表格',
                    index:'2',
                    icon:'el-icon-location',
                    path:'/basicform',
                },
                {
                    title:'tab选项卡',
                    index:'3',
                    icon:'el-icon-location',
                    path:'/tab',
                },
                {
                    title:'表单相关',
                    index:'4',
                    icon:'el-icon-location',
                    path:'/form',
                    subitems:[
                        {
                            title:'基本表单',
                            index:'4-1',
                            icon:'el-icon-location'
                        },
                        {
                            title:'三级菜单',
                            index:'4-2',
                            icon:'el-icon-location',
                            subitems:[
                                {
                                    title:'富文本编译器',
                                    index:'4-2-1',
                                    icon:'el-icon-location',
                                },
                                {
                                    title:'markdown编译器',
                                    index:'4-2-2',
                                    icon:'el-icon-location'
                                },
                            ]
                        },
                        {
                            title:'文件上传',
                            index:'4-3',
                            icon:'el-icon-location'
                        },
                    ]
                },
                {
                    title:'自定义图标',
                    index:'5',
                    icon:'el-icon-location',
                    path:'/icon',
                },
                {
                    title:'schart图表',
                    index:'6',
                    icon:'el-icon-location',
                    path:'/chart',
                },
                {
                    title:'拖拽组件',
                    index:'7',
                    icon:'el-icon-location',
                    path:'/dragcomponent',
                    subitems:[
                        {
                            title:'拖拽列表',
                            index:'7-1',
                            icon:'el-icon-location'
                        },
                        {
                            title:'拖拽弹窗',
                            index:'7-2',
                            icon:'el-icon-location'
                        },
                    ]
                },
                {
                    title:'错误处理',
                    index:'8',
                    icon:'el-icon-location',
                    path:'/errorpage',
                    subitems:[
                        {
                            title:'权限测试',
                            index:'8-1',
                            icon:'el-icon-location',
                        },
                        {
                            title:'404页面',
                            index:'8-2',
                            icon:'el-icon-location'
                        },
                    ]
                },
                {
                    title:'支持作者',
                    index:'9',
                    icon:'el-icon-location',
                    path:'/author',
                },

            ]
        }
    }
}
</script>

<style scoped>
    .sidebar{
        width: 250px;
        height: 100%;
    }

   
</style>


