import { defineComponent, PropType, ref, watchEffect } from 'vue'
import { createUseStyles } from 'vue-jss'
import { Person } from './types'

const useStyle = createUseStyles({
	footer: {
		width: '100%',
		height: '40px',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		fontSize: '16px',
		color: '#fff',
		marginTop: '10px',
	},
})

export default defineComponent({
	name: 'Footer',
	props: {
		list: {
			type: Array as PropType<Person[]>,
			required: true,
		},
	},
	setup(props) {
		const classStyleRef = useStyle()
		const completedNum = ref(0)

		watchEffect(() => {
			let num = 0
			props.list.forEach((item) => {
				if (item.isComplete) num++
			})
			completedNum.value = num
		})

		return () => {
			const { list } = props
			const classes = classStyleRef.value
			return (
				<div class={classes.footer}>
					<span>完成{completedNum.value}</span>/<span>总共{list.length}</span>
				</div>
			)
		}
	},
})
