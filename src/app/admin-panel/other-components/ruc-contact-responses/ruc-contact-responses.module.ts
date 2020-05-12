import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RucContactResponsesComponent } from './ruc-contact-responses.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: RucContactResponsesComponent
  }
]

@NgModule({
  declarations: [RucContactResponsesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RucContactResponsesModule { }
