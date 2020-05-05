import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAuthorComponent } from './view-author.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: ViewAuthorComponent
  }
]

@NgModule({
  declarations: [ViewAuthorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewAuthorModule { }
