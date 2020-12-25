import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home'
import Echarts from '../views/echarts'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/echarts',
		name: 'Echarts',
		component: Echarts,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
