<template>
    <div class="sidebar">
        <el-menu mode="vertical" background-color="rgb(50,65,87)" text-color="#fff" active-text-color="#20a0ff">
            <template v-for="(item.index in menuslist)">
            </template>
            <template v-else>
                <el-menu-item>
                    <i :class="item.icon"></i>
                    <span>{{ item.title }}</span>
                </el-menu-item>
            </template>
        </el-menu>
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
                    icon:'el-icon-location'
                },
                {
                    title:'基础表格',
                    index:'2',
                    icon:'el-icon-location'
                },
                {
                    title:'tab选项卡',
                    index:'3',
                    icon:'el-icon-location'
                },
                {
                    title:'表单相关',
                    index:'4',
                    icon:'el-icon-location',
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
                    icon:'el-icon-location'
                },
                {
                    title:'schart图表',
                    index:'6',
                    icon:'el-icon-location'
                },
                {
                    title:'拖拽组件',
                    index:'7',
                    icon:'el-icon-location',
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
                    icon:'el-icon-location'
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


