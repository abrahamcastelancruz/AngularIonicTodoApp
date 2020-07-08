import {ListItem} from './list-item.model'

export class List {
	id: number
	title: string
	createdOn: Date
	completedOn: Date
	completed: boolean
	tasks: ListItem[]

	constructor(title: string) {
		this.title = title
		this.createdOn = new Date()
		this.completed = false
		this.tasks = []
		this.id = new Date().getTime()
	}
}
