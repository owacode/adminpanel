import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './authguard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
    canActivate: [AuthGuard]
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
  exports: [RouterModule],
  providers: [
    AuthGuard
  ],
})

export class AppRoutingModule { }
