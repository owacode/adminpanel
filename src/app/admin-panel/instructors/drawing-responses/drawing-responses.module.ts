import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawingResponsesComponent } from './drawing-responses.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: DrawingResponsesComponent
  }
]


@NgModule({
  declarations: [DrawingResponsesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DrawingResponsesModule { }
