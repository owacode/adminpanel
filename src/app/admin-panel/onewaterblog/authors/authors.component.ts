import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { map, filter,catchError } from 'rxjs/operators';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authorsToDisplay=[];
  authorsType;
  authors;
  constructor(public authorService: AuthorService) { }

  ngOnInit(): void {
    this.showAllAuthors();
  }

  showAllAuthors(){
    // this.authorsToDisplay=[];
    // this.authorsType = 'all';
    // this.authorsToDisplay = this.authors;

    this.authorService.getAllAuthor()
    .subscribe(res=> {
      console.log(res)
      this.authorsToDisplay = res.result.reverse()
    })
  }
  showPendingAuthors(){
    this.authorService.getNotApprovedAuthor()
    .subscribe(result=> {
      this.authorsToDisplay= result.result.reverse();
      console.log(this.authorsToDisplay);
    })
  }
  showApprovedAuthors(){
    this.authorService.getApprovedAuthor()
    .subscribe(result=> {
      this.authorsToDisplay= result.result.reverse();
      // console.log(this.authorsToDisplay);
    })
  }
  deleteAuthor(){

  }
  approve(mainid, blogid){
    this.authorService.approveAuthor(mainid, blogid);
  }

  reject(mainid, blogid){
    this.authorService.rejectAuthor(mainid, blogid);
  }
}
