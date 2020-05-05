import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'**',
    redirectTo:'login',
    pathMatch:'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
