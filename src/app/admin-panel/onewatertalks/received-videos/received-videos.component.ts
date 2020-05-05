import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { LoaderFunctions } from 'src/app/common/loader-functions';

@Component({
  selector: 'app-received-videos',
  templateUrl: './received-videos.component.html',
  styleUrls: ['./received-videos.component.scss']
})
export class ReceivedVideosComponent implements OnInit {
  noContent;
  videos;
  constructor(public common: CommonService, public loader: LoaderFunctions) { }

  ngOnInit(): void {
    this.noContent = false;
    this.loader.showLoader();
    this.common.getAuthorVideos().subscribe(res => {
      console.log(res)
      this.videos = res.result
      if(!this.videos.length) this.noContent = true;

      this.loader.hideLoader();
    })
  }

}
