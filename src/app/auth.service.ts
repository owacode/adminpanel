import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})

export class AuthService {

  token;
  isLoggedIn: boolean = false;
  constructor(public http: HttpClient, public router: Router) {}

  checkLocalStorage() {
    this.token = localStorage.getItem("onewateradmintoken")
    if(!this.token) {
      return;
    }
    this.isLoggedIn = true;
    // this.router.navigate(['/'])
  }

  login(data) {
    this.http.post<{status:string, msg: string, result: any}>('https://onewater-auth.herokuapp.com/admin-login', data)
    .subscribe(res=> {
      console.log(res)
      if(res.status != 'success') return alert(res.msg);
      this.token = res.result.token;
      this.isLoggedIn = true;
      localStorage.setItem('onewateradmintoken', this.token);
      this.router.navigate(['/'])
    })
  }

  logout() {
    this.token=null;
    this.isLoggedIn=false;
    localStorage.removeItem("onewateradmintoken");
    this.router.navigate(['/login'])
  }
}
