import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import {LoaderFunctions} from '../../../common/loader-functions';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { $ } from 'protractor';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

blogsType;
blogs;
noContent;
blogstoDisplay = [];

  constructor(public blogService: BlogService, public loader: LoaderFunctions){ }

  ngOnInit(): void {
      this.showAllBlogs();
  }
  showAllBlogs(){
    this.noContent = false;
    this.blogstoDisplay=[];
    this.blogsType = 'all';
    this.loader.showLoader();
    this.blogService.getAllBlogs()
    .subscribe(result=>{
      console.log(result);
      this.blogstoDisplay=result.result.reverse();
      this.loader.hideLoader();
      this.blogs = this.blogstoDisplay;
      if(!this.blogstoDisplay.length) this.noContent = true;
    })
  }

  showApprovedBlogs(){
    this.noContent = false;
    this.blogstoDisplay=[];
    this.blogsType = 'approved';
    this.loader.showLoader();

    this.blogs.forEach(element => {
      if(element.status == 'approved'){
        this.blogstoDisplay.push(element);
      }
    });
    this.loader.hideLoader();

    if(!this.blogstoDisplay.length) this.noContent = true;
  }

  showPendingBlogs(){
    this.noContent = false;
    this.blogstoDisplay=[];
    this.blogsType = 'pending';
    this.loader.showLoader();

     this.blogs.forEach(element => {
      if(element.status == 'pending'){
        this.blogstoDisplay.push(element);
      }
    });
    this.loader.hideLoader();

    if(!this.blogstoDisplay.length) this.noContent = true;
  }

  showDeletedBlogs(){
    this.noContent = false;
    this.blogstoDisplay=[];
    this.blogsType = 'deleted';
    this.loader.showLoader();

     this.blogs.forEach(element => {
      if(element.status == 'deleted'){
        this.blogstoDisplay.push(element);
      }
    });
    this.loader.hideLoader();

    if(!this.blogstoDisplay.length) this.noContent = true;
  }

  moveToAdminBlogs(){}

  deleteApproveBlog(main_id,approved_id,author_id) {
    if(confirm("Delete This Blog")) {
      console.log(main_id,approved_id,author_id)
      this.blogService.deleteApproveBlog(main_id,approved_id,author_id)
      .subscribe(result=> {
        alert("Blog Deleted Successfully");
      })
    }
    else return;
  }

  deleteUnApproveBlog(main_id,unapproved_id) {
    if(confirm("Delete This Blog")) {
    console.log(main_id,unapproved_id)
    this.blogService.deleteUnApproveBlog(main_id,unapproved_id)
    .subscribe(result=> {
      alert("Blog Deleted Successfully");
    })
  }
  else return;
  }

}
