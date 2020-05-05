import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: PaymentsComponent
  }
]

@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentsModule { }
