import {List} from './../models/list.model'
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
	name: 'completedFilter',
	pure: false,
})
export class CompletedFilterPipe implements PipeTransform {
	transform(lists: List[], completed: boolean = true): List[] {
		return lists.filter((list) => {
			return list.completed == completed
		})
	}
}
