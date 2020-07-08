import {List} from './../../models/list.model'
import {TodosService} from './../../services/todos.service'
import {Component, OnInit, Input, ViewChild} from '@angular/core'
import {Router} from '@angular/router'
import {AlertController, IonList} from '@ionic/angular'

@Component({
	selector: 'app-lists',
	templateUrl: './lists.component.html',
	styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
	@Input() completed = true
	@ViewChild(IonList) list: IonList

	constructor(public todosService: TodosService, private router: Router, private alertController: AlertController) {}

	goList(list: List) {
		const listId = list.id
		if (this.completed === true) {
			this.router.navigateByUrl(`/tabs/tab2/add/${listId}`)
		} else {
			this.router.navigateByUrl(`/tabs/tab1/add/${listId}`)
		}
	}

	deleteList(list: List) {
		this.todosService.deleteList(list)
	}

	async editList(list: List) {
		console.log(list)
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Edit List Name',
			inputs: [
				{
					name: 'title',
					type: 'text',
					value: `${list.title}`,
				},
			],
			buttons: [
				{
					text: 'Save',
					handler: (taskTitle) => {
						if (taskTitle.title.length === 0) {
							return
						} else {
							list.title = taskTitle.title
							this.todosService.save()
							this.list.closeSlidingItems()
						}
					},
				},
				{
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
						this.list.closeSlidingItems()
					},
				},
			],
		})

		await alert.present()
	}

	ngOnInit() {}
}
