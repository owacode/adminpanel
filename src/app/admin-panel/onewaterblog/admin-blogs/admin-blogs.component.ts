import { Component, OnInit } from '@angular/core';
import { LoaderFunctions } from 'src/app/common/loader-functions';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss']
})
export class AdminBlogsComponent implements OnInit {
  noContent;
  adminBlogs
  blogs;
  constructor(public loader: LoaderFunctions, public blogService: BlogService) { }

  ngOnInit(): void {
    this.noContent = false;
    this.loader.showLoader();
    this.blogService.getHomeBlogs()
    .subscribe(res => {
      console.log(res)
      this.adminBlogs = res.result;
      this.loader.hideLoader();
      if (!this.adminBlogs.length) this.noContent = true;
    })
  }

  removeBlog(id){
    if(confirm("Delete Blog")) {
      this.blogService.deleteHomeBlogs(id)
      .subscribe(res=> {
        alert("Blog Deleted")
      })
    } else return;
  }

}
