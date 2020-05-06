import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-received-video',
  templateUrl: './view-received-video.component.html',
  styleUrls: ['./view-received-video.component.scss']
})
export class ViewReceivedVideoComponent implements OnInit {

  public video;
  safeSrc: SafeResourceUrl;
  constructor(public route: ActivatedRoute, public common: CommonService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.common.getSingleAuthorVideos(res.id)
      .subscribe(res=> {
        this.video=res.result
        const link=this.getId(this.video.video_link);
        this.video.video_link=`https://www.youtube.com/watch/${link}`;
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.video.video_link);
        console.log(this.video)
      })
    })
  }

  getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

}
