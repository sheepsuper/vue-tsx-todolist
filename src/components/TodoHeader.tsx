import { defineComponent, PropType, ref } from 'vue'
import { createUseStyles } from 'vue-jss'

const useStyle = createUseStyles({
	header: {
		width: '100%',
		display: 'flex',
		height: '70px',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	input: {
		flex: 1,
		height: '30px',
		border: '1px solid #ccc',
		borderRadius: '4px',
	},
	button: {
		width: '60px',
		height: '30px',
		backgroundColor: '#d34d4e',
		color: '#fff',
		fontSize: '14px',
		border: 'none',
		borderRadius: '2px',
		marginLeft: '5px',
	},
})

export default defineComponent({
	name: 'TodoHeader',
	props: {
		onAdd: {
			type: Function as PropType<(v: string) => void>,
			required: true,
		},
	},
	setup(props) {
		const refInputValue = ref('')
		const userCalssesRef = useStyle()

		const addItem = () => {
			const value: string = refInputValue.value
			if (!value.trim()) return
			props.onAdd(refInputValue.value)
			refInputValue.value = ''
		}

		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === 'Enter') addItem()
		}

		return () => {
			const classes = userCalssesRef.value
			return (
				<div class={classes.header}>
					<input
						class={classes.input}
						type="text"
						v-model={refInputValue.value}
						onKeyup={handleKeyUp}
						placeholder="to do ..."
					/>
					<button class={classes.button} onClick={addItem}>
						Add
					</button>
				</div>
			)
		}
	},
})
