import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/commons/Home.vue'
import Systemhome from '@/components/pages/systemhome.vue'
import Basicform from '@/components/pages/basicform.vue'
import Tab from '@/components/pages/tab.vue'
import Form from '@/components/pages/form.vue'
import Icon from '@/components/pages/icon.vue'
import Chart from '@/components/pages/chart.vue'
import Dragcomponent from '@/components/pages/dragcomponent.vue'
import Errorpage from '@/components/pages/errorpage.vue'
import Author from '@/components/pages/author.vue'

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
					name:'systemhome',
					component:Systemhome
				},
				{
					path: '/basicform',
					name:'basicform',
					component:Basicform
				},
				{
					path: '/tab',
					name:'tab',
					component:Tab
				},
				{
					path: '/form',
					name:'form',
					component:Form
				},
				{
					path: '/icon',
					name:'icon',
					component:Icon
				},
				{
					path: '/chart',
					name:'chart',
					component:Chart
				},
				{
					path: '/dragcomponent',
					name:'dragcomponent',
					component:Dragcomponent
				},
				{
					path: '/errorpage',
					name:'errorpage',
					component:Errorpage
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

