import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-drawing-responses',
  templateUrl: './drawing-responses.component.html',
  styleUrls: ['./drawing-responses.component.scss']
})
export class DrawingResponsesComponent implements OnInit {
  noContent;
  drawing;
  constructor(public common: CommonService) { }

  ngOnInit(): void {
    this.common.getDrawing()
    .subscribe(res=> {
      console.log(res)
      this.drawing = res;
    })
  }

}
