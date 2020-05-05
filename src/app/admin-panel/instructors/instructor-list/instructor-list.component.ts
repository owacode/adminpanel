import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {
  noContent;
  instructors;
  constructor(public common: CommonService) { }

  ngOnInit(): void {
    this.common.getRegisteredInstructor()
    .subscribe(result=> {
      console.log(result);
      this.instructors = result.result
    })
  }

}
