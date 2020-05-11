import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  blogid;
  blog;
  author;
  category=null;
  subcategory=null;
  showSubcatrgory;
  constructor(public route:ActivatedRoute, public blogservice: BlogService, public authorservice:AuthorService,public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(result=>{
      this.blogid=result.id
      console.log(this.blogid)
      this.blogservice.getParticularAllBlogs(this.blogid)
      .subscribe(result=>{
        console.log(result);
        this.blog=result.result[0];
        this.getauthor(this.blog.author_id)
        console.log(this.blog);
      })
    })
  }

  getauthor(id){
    this.authorservice.getSingleApprovedAuthor(id)
    .subscribe(result=> {
      console.log(result,'fce')
      this.author=result.result[0];
    })
  }

  approve(blogid,mainid){
    if(this.subcategory && this.category) {
      console.log(blogid,mainid);
      this.blogservice.approve(blogid,mainid, this.category, this.subcategory);
      this.category=null;
      this.subcategory=null;
      alert("Blog Approved");
      this.router.navigate(['/blogs']);
    }
  }

  reject(blogid,mainid){
    if(this.subcategory && this.category) {
    console.log(blogid,mainid);
    this.blogservice.reject(blogid,mainid);
    alert("Blog Rejected");
    this.router.navigate(['/blogs']);
    }
  }

  onChange(event){
    // console.log('hitttt');
    this.category=event.target.value;
    const newVal = event.target.value;
    this.showSubcatrgory=newVal;
    console.log(this.category, this.showSubcatrgory)
  }

  onChangesub(event){
    this.subcategory=event.target.value
    console.log(this.category, this.subcategory,'fwfe');
  }

}
