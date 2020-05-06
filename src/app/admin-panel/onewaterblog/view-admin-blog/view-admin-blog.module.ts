import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAdminBlogComponent } from './view-admin-blog.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: ViewAdminBlogComponent
  }
]

@NgModule({
  declarations: [ViewAdminBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewAdminBlogModule { }
