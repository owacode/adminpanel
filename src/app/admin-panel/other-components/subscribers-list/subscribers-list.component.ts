import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscribers-list',
  templateUrl: './subscribers-list.component.html',
  styleUrls: ['./subscribers-list.component.scss']
})
export class SubscribersListComponent implements OnInit {
  noContent
  suscribed;

  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get<{status:string, msg:string, result:any}>('https://onewater-auth.herokuapp.com/suscribed')
    .subscribe(result=>{
      console.log(result);
      this.suscribed=result.result;
    })
  }

}
