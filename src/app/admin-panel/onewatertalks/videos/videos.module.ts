import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: VideosComponent
  }
]

@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VideosModule { }
