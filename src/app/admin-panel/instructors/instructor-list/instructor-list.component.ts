import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { LoaderFunctions } from 'src/app/common/loader-functions';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {
  noContent;
  instructors;
  constructor(public common: CommonService,public loader : LoaderFunctions) { }

  ngOnInit(): void {
    this.noContent = false;
    this.loader.showLoader();
    this.common.getRegisteredInstructor()
    .subscribe(result=> {
      console.log(result);
      this.instructors = result.result;

      this.loader.hideLoader();
      if(!this.instructors.length) this.noContent = true;
    })
  }

}
