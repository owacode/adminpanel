import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.scss']
})
export class ViewAuthorComponent implements OnInit {
  public author;
  constructor(public route: ActivatedRoute, public authorservice: AuthorService) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      console.log(result,'jkb');
      this.authorservice.getSingleAllAuthor(result.id)
      .subscribe(result=>{
        console.log(result);
        this.author=result.result[0];
      })
    })
  }

  approve(mainid, blogid){
    this.authorservice.approveAuthor(mainid, blogid);
  }

  reject(mainid, blogid){
    this.authorservice.rejectAuthor(mainid, blogid);
  }

}