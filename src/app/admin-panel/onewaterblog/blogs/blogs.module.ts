import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: BlogsComponent
  }
]

@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class BlogsModule { }
