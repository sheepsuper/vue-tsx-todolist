import { defineComponent, PropType } from 'vue'

export default defineComponent({
	props: {
		name: {
			type: String as PropType<string>,
			required: false,
		},
	},
	setup(props) {
		return () => {
			const { name } = props
			return (
				<div>
					<p>{name}</p>
				</div>
			)
		}
	},
})
