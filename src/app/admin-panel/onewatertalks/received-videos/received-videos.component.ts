import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-received-videos',
  templateUrl: './received-videos.component.html',
  styleUrls: ['./received-videos.component.scss']
})
export class ReceivedVideosComponent implements OnInit {

  videos;
  constructor(public common: CommonService) { }

  ngOnInit(): void {
    this.common.getAuthorVideos().subscribe(res => {
      console.log(res)
      this.videos = res.result
    })
  }

}
