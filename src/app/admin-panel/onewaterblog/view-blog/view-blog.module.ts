import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBlogComponent } from './view-blog.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: ViewBlogComponent
  }
]

@NgModule({
  declarations: [ViewBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewBlogModule { }
