import { defineComponent } from 'vue'
import Home from './views/Home'

export default defineComponent({
	name: 'App',
	setup() {
		return () => {
			return <Home />
		}
	},
})
