import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})

export class AuthService {

  token;
  isLoggedIn: Boolean = false;
  constructor(public http: HttpClient, public router: Router) {}

  checkLocalStorage() {
    this.token = localStorage.getItem("onewateradmintoken")
    if(!this.token) {
      return;
    }
    this.isLoggedIn = true;
  }

  login(data) {
    this.http.post<{status:string, msg: string, result: any}>('https://onewater-auth.herokuapp.com/admin-login', data)
    .subscribe(res=> {
      if(res.status != 'success') return;
      console.log(res)
      this.token = res.result.token;
      localStorage.setItem('onewateradmintoken', this.token);
      this.router.navigate(['/'])
    })
  }
}
