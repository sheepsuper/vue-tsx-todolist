import { defineComponent, reactive } from 'vue'
import { createUseStyles } from 'vue-jss'
import Footer from './components/Footer'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import { Person } from './components/types'

const useStyle = createUseStyles({
	container: {
		width: '300px',
		minHeight: '200px',
		backgroundColor: '#b5c0cf',
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '5px',
	},
	title: {
		fontSize: '20px',
		color: '#333',
		textAlign: 'center',
	},
})

export default defineComponent({
	setup() {
		const classesRef = useStyle()
		const data: Person[] = reactive([
			{ id: 10, name: 'sheep', isComplete: false },
			{ id: 20, name: 'Tom', isComplete: true },
			{ id: 30, name: 'Jocky', isComplete: false },
		])

		const radomTrueOrFalse = () => {
			const mathRadomNum = Math.random()
			return mathRadomNum > 0.5 ? true : false
		}

		const addItem = (v: string) => {
			const item = {} as Person
			if (v) {
				const nextLastNum: number = data[data.length - 1].id + 10
				item.id = nextLastNum
				item.name = v
				item.isComplete = radomTrueOrFalse()
			}
			data.push(item)
		}

		const remove = (index: number) => {
			data.splice(index, 1)
		}

		return () => {
			const classes = classesRef.value
			return (
				<div class={classes.container}>
					<h3 class={classes.title}>Todo List</h3>
					<TodoHeader onAdd={addItem} />
					<TodoList list={data} onDelete={remove} />
					<Footer list={data} />
				</div>
			)
		}
	},
})
