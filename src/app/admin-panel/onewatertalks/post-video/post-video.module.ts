import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostVideoComponent } from './post-video.component';
import { RouterModule ,Route} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
  {
  path: '',
  component: PostVideoComponent
  }
]

@NgModule({
  declarations: [PostVideoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PostVideoModule { }
