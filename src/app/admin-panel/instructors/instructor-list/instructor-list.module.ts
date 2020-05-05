import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorListComponent } from './instructor-list.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: InstructorListComponent
  }
]

@NgModule({
  declarations: [InstructorListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InstructorListModule { }
