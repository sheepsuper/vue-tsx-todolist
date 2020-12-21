import { defineComponent, PropType } from 'vue'
import Item from './Item'
import { Person } from './types'

export default defineComponent({
	name: 'TodoList',
	props: {
		list: {
			type: Array as PropType<Person[]>,
		},
		onDelete: {
			type: Function as PropType<(index: number) => void>,
			required: true,
		},
	},
	setup(props) {
		return () => {
			const { list, onDelete } = props
			return (
				<>
					{list?.map((item, index) => {
						return <Item item={item} index={index} onDelete={onDelete} key={item.id} />
					})}
				</>
			)
		}
	},
})
