import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css'
import installElementPlus from './plugins/element'

createApp(App)
	.use(store)
	.use(router)
	.use(installElementPlus)
	.mount('#app')
