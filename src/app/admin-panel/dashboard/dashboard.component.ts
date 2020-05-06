import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../onewaterblog/services/author.service';
import { BlogService } from '../onewaterblog/services/blog.service';
import { CommonService } from '../onewatertalks/common.service';
import { LoaderFunctions } from 'src/app/common/loader-functions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  authors;
  pendingauthors = [];
  authorlength;
  blogs;
  videos;
  noContent;
  constructor(
    public authorService: AuthorService,
    public blogService: BlogService,
    public common: CommonService,
    public loader: LoaderFunctions
  ) {}

  ngOnInit(): void {
    this.noContent = false;
    this.loader.showLoader();
    this.authorService.getAllAuthor().subscribe((res) => {
      console.log(res);
      this.authorlength = res.result.length;
      this.authors = res.result;

    
      this.authors.forEach((element) => {
        if (element.status === 'pending') {
          this.pendingauthors.push(element);
        }
      });
      this.pendingauthors = this.pendingauthors.slice(0, 4);
      this.pendingauthors = this.pendingauthors.reverse();
      
      this.loader.hideLoader();
      if(!this.pendingauthors.length) this.noContent = true;
    });

    this.blogService.getNotApprovedBlogs().subscribe((result) => {
      console.log(result);
      this.blogs = result.result;
    });

    this.common.getAuthorVideos().subscribe((res) => {
      console.log(res);
      this.videos = res.result;
    });
  }
}
