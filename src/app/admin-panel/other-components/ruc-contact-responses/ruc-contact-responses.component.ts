import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderFunctions } from 'src/app/common/loader-functions';

@Component({
  selector: 'app-ruc-contact-responses',
  templateUrl: './ruc-contact-responses.component.html',
  styleUrls: ['./ruc-contact-responses.component.scss']
})
export class RucContactResponsesComponent implements OnInit {
  noContent
  contacts;

  constructor(public http:HttpClient,public loader: LoaderFunctions) { }

  ngOnInit() {
    this.noContent = false;
    this.loader.showLoader();
    this.http.get<{status:string, msg:string, result:any}>('https://onewater-auth.herokuapp.com/ruc-contact')
    .subscribe(result=>{
      console.log(result);
      this.contacts=result.result;

      this.loader.hideLoader();
      if(!this.contacts.length) this.noContent = true;
    })
  }

}
