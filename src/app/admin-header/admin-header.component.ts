import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
declare var $:any;
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    if(window.innerWidth < 1199){
      $('#toggleBtn').on("click",this.toggleSidebar);
      $('.nav-link').on("click",this.toggleSidebar);
      $('.option-overlay').on("click",this.toggleSidebar);
    }

  }

  toggleSidebar(){
    if($('#sidenav-main').hasClass('show-menu')){
      $('#sidenav-main').removeClass('show-menu');
      $('.hamburger').removeClass('clicked');
      $('.option-overlay').css("display","none");
    }
    else{
      $('#sidenav-main').addClass('show-menu');
      $('.hamburger').addClass('clicked');
      $('.option-overlay').css("display","block");
    }

  }

}
