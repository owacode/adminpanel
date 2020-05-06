import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderFunctions } from 'src/app/common/loader-functions';

@Component({
  selector: 'app-subscribers-list',
  templateUrl: './subscribers-list.component.html',
  styleUrls: ['./subscribers-list.component.scss']
})
export class SubscribersListComponent implements OnInit {
  noContent
  suscribed;

  constructor(public http:HttpClient,public loader: LoaderFunctions) { }

  ngOnInit() {
    this.noContent = false;
    this.loader.showLoader();
    this.http.get<{status:string, msg:string, result:any}>('https://onewater-auth.herokuapp.com/suscribed')
    .subscribe(result=>{
      console.log(result);
      this.suscribed=result.result;

      this.loader.hideLoader();
      if(!this.suscribed.length) this.noContent = true;
    })
  }

}
