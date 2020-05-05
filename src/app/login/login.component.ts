import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  submited: Boolean = false;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      email:new FormControl(null, {validators:[Validators.required]}),
      password:new FormControl(null, {validators:[Validators.required]})
    })
  }

  login() {
    this.submited = true;
    if(this.form.invalid) {
      return;
    }
    this.auth.login(this.form.value);
  }

}
