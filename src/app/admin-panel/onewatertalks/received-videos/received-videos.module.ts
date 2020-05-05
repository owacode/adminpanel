import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivedVideosComponent } from './received-videos.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: ReceivedVideosComponent
  }
]


@NgModule({
  declarations: [ReceivedVideosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReceivedVideosModule { }
