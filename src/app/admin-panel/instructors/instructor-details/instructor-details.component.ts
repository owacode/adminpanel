import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.scss']
})
export class InstructorDetailsComponent implements OnInit {

  instructor;
  constructor(public route: ActivatedRoute, public common: CommonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(result=> {
      console.log(result,'jkb');
      this.common.getSingleRegisteredInstructor(result.id)
      .subscribe(result=>{
        console.log(result);
        this.instructor=result.result;
      })
    })
  }

}
