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
  authors = [];
  constructor(public authorService: AuthorService, public loader: LoaderFunctions) { }

  ngOnInit(): void {
    this.showAllAuthors();
  }

  showAllAuthors(){
    //reset ui and blog array
    this.noContent = false;
    this.authorsToDisplay=[];
    this.authorsType = 'all';
    if(!this.authors.length){
    this.loader.showLoader();
      this.authorService.getAllAuthor()
      .subscribe(res=> {
        console.log(res)
        this.authorsToDisplay = res.result.reverse();
        this.authors = this.authorsToDisplay;
        this.loader.hideLoader();
      if(!this.authorsToDisplay.length) this.noContent = true;
    })
    }
    else
    this.authorsToDisplay = this.authors;
      //change ui

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


  approve(mainid, blogid){
    if(confirm("Are you sure you want approve this author ?")) {
    this.authorService.approveAuthor(mainid, blogid);
    //alert("Author has been approved");
  }
  else return
}

  reject(mainid, blogid){
    if(confirm("Are you sure you want reject this author ?")) {
    this.authorService.rejectAuthor(mainid, blogid);
    //alert("Author has been rejected");
  }
  else return
}

deleteUnApprovedAuthor(id,mainid) {
  if(confirm("Are you sure you want delete this author ?")) {
  this.authorService.deleteUnApprovedAuthor({
    id:id,
    mainid:mainid
  });
}else return;
}

deleteApprovedAuthor(id,mainid) {
  if(confirm("Are you sure you want delete this author ?")) {
  this.authorService.deleteApprovedAuthor({
    id:id,
    mainid:mainid
  });
}else return;
}
}
