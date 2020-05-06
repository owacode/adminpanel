import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { LoaderFunctions } from 'src/app/common/loader-functions';

@Component({
  selector: 'app-drawing-responses',
  templateUrl: './drawing-responses.component.html',
  styleUrls: ['./drawing-responses.component.scss']
})
export class DrawingResponsesComponent implements OnInit {
  noContent;
  drawing;
  constructor(public common: CommonService,public loader: LoaderFunctions) { }

  ngOnInit(): void {
    this.noContent = false;
    this.loader.showLoader();
    this.common.getDrawing()
    .subscribe(res=> {
      console.log(res)
      this.drawing = res;

      this.loader.hideLoader();
      if(!this.drawing.length) this.noContent = true;
    })
  }

}
