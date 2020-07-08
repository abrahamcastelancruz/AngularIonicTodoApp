import {TodosService} from './../../services/todos.service'
import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {AlertController} from '@ionic/angular'

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
	lists: any[] = []

	constructor(private todosService: TodosService, private router: Router, private alertController: AlertController) {
		this.getLists()
	}

	getLists() {
		this.lists = this.todosService['list']
	}

	async addList() {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Add New Task',
			inputs: [
				{
					name: 'title',
					type: 'text',
					placeholder: 'Task Description',
				},
			],
			buttons: [
				{
					text: 'Add',
					handler: (taskTitle) => {
						if (taskTitle.title.length == 0) {
							return
						}

						const listId = this.todosService.createList(taskTitle.title)
						this.router.navigateByUrl(`/tabs/tab1/add/${listId}`)
					},
				},
				{
					text: 'Cancel',
					role: 'cancel',
				},
			],
		})

		await alert.present()
	}
}
