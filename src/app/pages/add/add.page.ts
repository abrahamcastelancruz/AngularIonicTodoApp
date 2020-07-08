import {ListItem} from './../../models/list-item.model'
import {List} from './../../models/list.model'
import {TodosService} from './../../services/todos.service'
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component({
	selector: 'app-add',
	templateUrl: './add.page.html',
	styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
	list: List

	taskName: string = ''

	constructor(private todosService: TodosService, private activatedRoute: ActivatedRoute) {
		const listId = this.activatedRoute.snapshot.paramMap.get('listId')
		this.list = this.todosService.getList(listId)
	}

	ngOnInit() {}

	addTask() {
		if (this.taskName.length == 0) {
			return
		}

		const newTask = new ListItem(this.taskName)
		this.list.tasks.push(newTask)
		this.taskName = ''
		this.todosService.save()
	}

	check(item: ListItem) {
		const tasks = this.list.tasks.filter((dataTask) => {
			return !dataTask.complete
		}).length

		if (tasks == 0) {
			this.list.completedOn = new Date()
			this.list.completed = true
		} else {
			this.list.completedOn = null
			this.list.completed = false
		}

		this.todosService.save()
	}

	delete(i: number) {
		this.list.tasks.splice(i, 1)
		this.todosService.save()
	}
}
