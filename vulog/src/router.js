import { createWebHistory, createRouter } from 'vue-router'
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Error404 from './components/Error404.vue'

const routes = [
	{
		// path: "/경로",
		// component: import해온 컴포넌트,
		path: '/list',
		component: List,
	},
	{
		path: '/',
		component: Home,
	},
	{
		path: '/detail/:id', // ... /detail/아무문자  (아무 문자가 들어오면 아래걸로 보여줌 )
		component: Detail,
	},
	{
		path: '/:anything(.*)', //저 위에서 해당되지 않고, 아무문자가 들어오면 404(없는페이지를 보여줌)
		component: Error404,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
