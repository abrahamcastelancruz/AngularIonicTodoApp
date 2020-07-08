import {List} from './../models/list.model'
import {Injectable} from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class TodosService {
	public list: List[] = []

	constructor() {
		this.load()
	}

	createList(title: string) {
		const newList = new List(title)
		this.list.push(newList)
		this.save()
		return newList.id
	}

	save() {
		localStorage.setItem('data', JSON.stringify(this.list))
	}

	load() {
		if (localStorage.getItem('data')) {
			this.list = JSON.parse(localStorage.getItem('data'))
		}
	}

	getList(id: number | string) {
		id = Number(id)

		return this.list.find((listData) => {
			return listData.id == id
		})
	}

	deleteList(lista: List) {
		this.list = this.list.filter((listData) => listData.id !== lista.id)
		this.save()
	}
}
