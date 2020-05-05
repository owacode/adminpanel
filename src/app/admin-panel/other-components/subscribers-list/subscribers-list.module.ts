import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribersListComponent } from './subscribers-list.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: SubscribersListComponent
  }
]

@NgModule({
  declarations: [SubscribersListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SubscribersListModule { }
