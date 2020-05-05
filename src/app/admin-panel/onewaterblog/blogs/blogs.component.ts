import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

blogsType;
blogs;
  blogstoDisplay = [];

  constructor(public blogService: BlogService){ }

  ngOnInit(): void {
      this.showAllBlogs();
  }
  showAllBlogs(){
    this.blogService.getAllBlogs()
    .subscribe(result=>{
      console.log(result);
      this.blogstoDisplay=result.result.reverse();
    })
  }

  showApprovedBlogs(){
    this.blogstoDisplay=[];
    this.blogService.getApprovedBlogs()
    .subscribe(result=>{
      console.log(result);
      this.blogstoDisplay=result.result.reverse();
    })
  }

  showPendingBlogs(){
    this.blogstoDisplay=[];
    this.blogService.getNotApprovedBlogs()
    .subscribe(result=>{
      console.log(result);
      this.blogstoDisplay=result.result.reverse();
    })
  }
  moveToAdminBlogs(){}

  deleteApproveBlog(main_id,approved_id,author_id) {
    console.log(main_id,approved_id,author_id)
    this.blogService.deleteApproveBlog(main_id,approved_id,author_id)
    .subscribe(result=> {
      alert("Blog Deleted Successfully");
    })
  }

  deleteUnApproveBlog(main_id,unapproved_id) {
    console.log(main_id,unapproved_id)
    this.blogService.deleteUnApproveBlog(main_id,unapproved_id)
    .subscribe(result=> {
      alert("Blog Deleted Successfully");
    })
  }
}
