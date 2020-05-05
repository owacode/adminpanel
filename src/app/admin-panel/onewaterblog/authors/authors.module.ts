import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: AuthorsComponent
  }
]

@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthorsModule { }
