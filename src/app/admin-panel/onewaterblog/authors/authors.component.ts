import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { map, filter,catchError } from 'rxjs/operators';
import { LoaderFunctions } from 'src/app/common/loader-functions';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authorsToDisplay=[];
  authorsType;
  noContent;
  authors;
  constructor(public authorService: AuthorService, public loader: LoaderFunctions) { }

  ngOnInit(): void {
    this.showAllAuthors();
  }

  showAllAuthors(){
    //reset ui and blog array
    this.noContent = false;
    this.authorsToDisplay=[];
    this.loader.showLoader();
    this.authorsType = 'all';

    this.authorService.getAllAuthor()
    .subscribe(res=> {
      console.log(res)
      this.authorsToDisplay = res.result.reverse();
      this.authors = this.authorsToDisplay;

      //change ui
      this.loader.hideLoader();
      if(!this.authorsToDisplay.length) this.noContent = true;
    })
  }
  showPendingAuthors(){
    //reset ui and blog array
    this.noContent = false;
    this.authorsToDisplay=[];
    this.loader.showLoader();
    this.authorsType = 'pending';

    this.authors.forEach(element => {
      if(element.status == "pending"){
        this.authorsToDisplay.push(element);
      }
    });

    console.log(this.authorsToDisplay);
    //change ui
    this.loader.hideLoader();
    if(!this.authorsToDisplay.length) this.noContent = true;
  }
  showApprovedAuthors(){
    //reset ui and blog array
    this.noContent = false;
    this.authorsToDisplay=[];
    this.loader.showLoader();
    this.authorsType = 'approved';

    this.authors.forEach(element => {
      if(element.status == "approved"){
        this.authorsToDisplay.push(element);
      }
    });

    console.log(this.authorsToDisplay);
    //change ui
    this.loader.hideLoader();
    if(!this.authorsToDisplay.length) this.noContent = true;
    
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
