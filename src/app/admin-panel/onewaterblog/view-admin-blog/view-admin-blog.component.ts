import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-view-admin-blog',
  templateUrl: './view-admin-blog.component.html',
  styleUrls: ['./view-admin-blog.component.scss']
})
export class ViewAdminBlogComponent implements OnInit {

  blog;
  constructor(public route: ActivatedRoute, public blogService: BlogService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=> {
      this.blogService.getSingleHomeBlogs(res.id)
      .subscribe(res=> {
        console.log(res)
        this.blog=res.result[0]
      })
    })
  }

}
