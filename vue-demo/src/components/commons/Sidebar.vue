<template>
    <div class="sidebar">
        <el-menu mode="vertical" 
            class="el-menu-vertical-demo"  
            background-color="#545c64" 
            text-color="#fff" 
            active-text-color="#ffd04b" 
            router
            unique-opened
            :collapse="isCollapse">
            <template v-for="item in menuslist">
                <template v-if="item.subitems">
                    <el-submenu :key="item.index" :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span>{{item.title}}</span>
                        </template>
                        <template v-for="subitem in item.subitems">
                            <el-submenu v-if="subitem.subitems" :key="subitem.index" :index="subitem.index">
                                <template slot="title">
                                    <i :class="subitem.icon"></i><span>{{subitem.title}}</span>
                                </template>
                                <el-menu-item v-for="thriditem in subitem.subitems" :key="thriditem.index" :index="thriditem.path" >
                                    <i :class="thriditem.icon"></i><span slot="title">{{thriditem.title}}</span>
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :key="subitem.index" :index="subitem.path" >
                                <i :class="subitem.icon"></i><span slot="title">{{subitem.title}}</span>
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :key="item.index" :index="item.path" >
                        <i :class="item.icon"></i><span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from './bus.js'

export default {
    data(){
        return {
            isCollapse:false,
            menuslist:[
                {
                    title:'系统首页',
                    index:'1',
                    icon:'el-icon-location',
                    path:'systemhome'
                },
                {
                    title:'基础表格',
                    index:'2',
                    icon:'el-icon-location',
                    path:'basictable',
                },
                {
                    title:'tab选项卡',
                    index:'3',
                    icon:'el-icon-location',
                    path:'tab',
                },
                {
                    title:'表单相关',
                    index:'4',
                    icon:'el-icon-location',
                    subitems:[
                        {
                            title:'基本表单',
                            index:'4-1',
                            icon:'el-icon-location',
                            path:'basicform',
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
                                    path:'textedit'
                                },
                                {
                                    title:'markdown编译器',
                                    index:'4-2-2',
                                    icon:'el-icon-location',
                                    path:'markdownedit'
                                },
                            ]
                        },
                        {
                            title:'文件上传',
                            index:'4-3',
                            icon:'el-icon-location',
                            path:'fileload'
                        },
                    ]
                },
                {
                    title:'自定义图标',
                    index:'5',
                    icon:'el-icon-location',
                    path:'icon',
                },
                {
                    title:'schart图表',
                    index:'6',
                    icon:'el-icon-location',
                    path:'chart',
                },
                {
                    title:'拖拽组件',
                    index:'7',
                    icon:'el-icon-location',
                    subitems:[
                        {
                            title:'拖拽列表',
                            index:'7-1',
                            icon:'el-icon-location',
                            path:'draglist'
                        },
                        {
                            title:'拖拽弹窗',
                            index:'7-2',
                            icon:'el-icon-location',
                             path:'dragalert'
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
                            path:'test',
                        },
                        {
                            title:'404页面',
                            index:'8-2',
                            icon:'el-icon-location',
                            path:'404',
                        },
                    ]
                },
                {
                    title:'支持作者',
                    index:'9',
                    icon:'el-icon-location',
                    path:'author',
                },

            ],
        }
    },
    methods: {
    },

    created () {
        bus.$on('collapse',collapse => this.isCollapse = collapse)
    }
}
</script>

<style scoped>
    .sidebar{
        width: 250px;
        height: 100%;
    }

</style>


