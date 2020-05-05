import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorDetailsComponent } from './instructor-details.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: InstructorDetailsComponent
  }
]


@NgModule({
  declarations: [InstructorDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InstructorDetailsModule { }
