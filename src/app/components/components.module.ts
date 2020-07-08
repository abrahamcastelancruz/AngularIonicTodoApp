import {PipesModule} from './../pipes/pipes.module'
import {IonicModule} from '@ionic/angular'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ListsComponent} from './lists/lists.component'

@NgModule({
	declarations: [ListsComponent],
	imports: [CommonModule, IonicModule, PipesModule],
	exports: [ListsComponent],
})
export class ComponentsModule {}
