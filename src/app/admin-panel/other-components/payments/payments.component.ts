import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderFunctions } from 'src/app/common/loader-functions';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  noContent;
  donations;

  constructor(public http:HttpClient,public loader:LoaderFunctions) { }

  ngOnInit() {
    this.noContent = false;
    this.loader.showLoader();
    this.http.get<{status:string, msg:string, result:any}>('https://onewater-auth.herokuapp.com/donation')
    .subscribe(result=>{
      console.log(result);
      this.donations=result.result;

      this.loader.hideLoader();
      if(!this.donations.length) this.noContent = true;
    })
   

  }

}
