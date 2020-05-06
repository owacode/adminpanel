import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../onewaterblog/services/author.service';
import { BlogService } from '../onewaterblog/services/blog.service';
import { CommonService } from '../onewatertalks/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  authors;
  authorlength;
  blogs;
  videos;
  constructor(public authorService: AuthorService, public blogService: BlogService, public common: CommonService) { }

  ngOnInit(): void {
      this.authorService.getNotApprovedAuthor()
      .subscribe(res=> {
        console.log(res)
        this.authorlength = res.result.length;
        this.authors = res.result.slice(0,4);
      })

      this.blogService.getNotApprovedBlogs()
      .subscribe(result=>{
        console.log(result);
        this.blogs=result.result;
      })

      this.common.getAuthorVideos().subscribe(res => {
        console.log(res)
        this.videos = res.result
      })
  }

}
