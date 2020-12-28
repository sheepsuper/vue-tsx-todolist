import { defineComponent } from 'vue'

export default defineComponent({
	name: 'echarts',
	setup() {
		return () => {
			return (
				<div>
					<el-button type="primary">按钮</el-button>
				</div>
			)
		}
	},
})
