import { defineComponent, PropType } from 'vue'
import { Person } from './types'
import { createUseStyles } from 'vue-jss'

const useStyle = createUseStyles({
	itemContainer: {
		width: '100%',
		height: '50px',
		backgroundColor: '#409EFF',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderRadius: '5px',
		marginTop: '5px',
		color: '#fff',
		padding: '5px',
		boxSizing: 'border-box',
	},
	itemLeft: {
		width: '20px',
	},
	itemRight: {
		color: '#fff',
		minWidth: '60px',
		border: 'none',
		height: '30px',
		fontSize: '14px',
		marginLeft: '5px',
		borderRadius: '2px',
		backgroundColor: '#F56C6C',
	},
	isComplate: {
		color: '#fff',
		minWidth: '60px',
		border: 'none',
		height: '30px',
		fontSize: '14px',
		marginLeft: '5px',
		borderRadius: '2px',
		backgroundColor: '#67C23A',
	},
	itemCenter: {
		flex: 1,
		padding: '0 5px 0 5px',
	},
})

export default defineComponent({
	name: 'Item',
	props: {
		item: {
			type: Object as PropType<Person>,
			required: true,
		},
		index: {
			type: Number as PropType<number>,
			required: true,
		},
		onDelete: {
			type: Function as PropType<(index: number) => void>,
			required: true,
		},
	},
	setup(props) {
		const classStyleRef = useStyle()

		const handleClick = () => {
			const { item, onDelete, index } = props
			if (item.isComplete) return
			onDelete(index)
		}

		return () => {
			const { item } = props
			const classes = classStyleRef.value
			return (
				<div class={classes.itemContainer}>
					<div class={classes.itemLeft}>{item?.id}</div>
					<div class={classes.itemCenter}>{item?.name}</div>
					<button
						class={item.isComplete ? classes.isComplate : classes.itemRight}
						onClick={handleClick}
					>
						{item.isComplete ? 'Complate' : 'Delete'}
					</button>
				</div>
			)
		}
	},
})
