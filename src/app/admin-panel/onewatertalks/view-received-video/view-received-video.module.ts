import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewReceivedVideoComponent } from './view-received-video.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: ViewReceivedVideoComponent
  }
]

@NgModule({
  declarations: [ViewReceivedVideoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewReceivedVideoModule { }
