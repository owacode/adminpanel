import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  noContent;
  donations;

  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get<{status:string, msg:string, result:any}>('https://onewater-auth.herokuapp.com/donation')
    .subscribe(result=>{
      console.log(result);
      this.donations=result.result;
    })
  }

}
