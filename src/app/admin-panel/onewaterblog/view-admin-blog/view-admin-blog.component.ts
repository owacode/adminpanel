import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { LoaderFunctions } from 'src/app/common/loader-functions';

@Component({
  selector: 'app-view-admin-blog',
  templateUrl: './view-admin-blog.component.html',
  styleUrls: ['./view-admin-blog.component.scss']
})
export class ViewAdminBlogComponent implements OnInit {

  blog;
  constructor(public route: ActivatedRoute, public blogService: BlogService, public loader: LoaderFunctions) { }

  ngOnInit(): void {
    this.loader.showLoader();
    this.route.params.subscribe(res=> {
      this.blogService.getSingleHomeBlogs(res.id)
      .subscribe(res=> {
        console.log(res)
        this.blog=res.result[0];
        this.loader.hideLoader();
      })
    })
  }

}
