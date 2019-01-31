import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/commons/Home.vue'
import Systemhome from '@/components/pages/systemhome.vue'
import Tab from '@/components/pages/tab.vue'
import Basicform from '@/components/pages/basicform.vue'
import Basictable from '@/components/pages/basictable.vue'
import Icon from '@/components/pages/icon.vue'
import Chart from '@/components/pages/chart.vue'
import Draglist from '@/components/pages/draglist.vue'
import Dragalert from '@/components/pages/dragalert.vue'
import Errorpage from '@/components/pages/404.vue'
import Testpage from '@/components/pages/test.vue'
import Textedit from '@/components/pages/textedit.vue'
import Markdownedit from '@/components/pages/markdownedit.vue'
import Author from '@/components/pages/author.vue'
import Fileload from '@/components/pages/Fileload.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect:'/systemhome'
		},
		{
			path:'/',
			name:'home',
			component:Home,
			children: [
				{
					path: '/systemhome',
					name:'系统首页',
					component:Systemhome
				},
				{
					path: '/basicform',
					name:'基本表单',
					component:Basicform
				},
				{
					path: '/tab',
					name:'tab选项卡',
					component:Tab
				},
				{
					path: '/basictable',
					name:'基础表格',
					component:Basictable
				},
				{
					path: '/textedit',
					name:'文本编译器',
					component:Textedit
				},
				{
					path: '/markdownedit',
					name:'markdown编译器',
					component:Markdownedit
				},
				{
					path: '/fileload',
					name:'文件上传',
					component:Fileload
				},
				
				{
					path: '/icon',
					name:'自定义图标',
					component:Icon
				},
				{
					path: '/chart',
					name:'chart图表',
					component:Chart
				},
				{
					path: '/draglist',
					name:'拖拽列表',
					component:Draglist
				},
				{
					path: '/dragalert',
					name:'脱拽表格',
					component:Dragalert
				},
				{
					path: '/404',
					name:'404页面',
					component:Errorpage
				},
				{
					path: '/test',
					name:'权限测试',
					component:Testpage
				},
				{
					path: '/author',
					name:'author',
					component:Author
				}
			]
		}
	]
})

