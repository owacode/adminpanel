import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBlogsComponent } from './admin-blogs.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: AdminBlogsComponent
  }
]

@NgModule({
  declarations: [AdminBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminBlogsModule { }
