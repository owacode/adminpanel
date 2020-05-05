import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewVideoComponent } from './view-video.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: ViewVideoComponent
  }
]


@NgModule({
  declarations: [ViewVideoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewVideoModule { }
