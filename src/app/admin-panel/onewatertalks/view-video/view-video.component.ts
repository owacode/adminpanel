import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LoaderFunctions } from 'src/app/common/loader-functions';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss']
})
export class ViewVideoComponent implements OnInit {
  public video;
  public videoid;
  safeSrc: SafeResourceUrl;
  constructor(public route: ActivatedRoute, public common:CommonService, private sanitizer: DomSanitizer,public loader: LoaderFunctions) {}

  ngOnInit() {
    this.loader.showLoader();
    this.route.params.subscribe(result=> {
      console.log(result);
      this.videoid=result.id;
      this.common.getsinglevideos(result.id)

      .subscribe(result=> {
       
        console.log(result);
        this.video=result.result;
        const link=this.getId(this.video.video_link);
        this.video.video_link=`https://www.youtube.com/watch/${link}`;
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.video.video_link);
        console.log(this.video)
        this.getlikes(link);
        this.loader.hideLoader();
      })
    })
  }

  getlikes(id){
    this.common.getLikes(id)
    .subscribe(result=>{
      console.log(result.items[0].statistics,'result displayed');
      const data={
        id:this.videoid,
        likeCount:result.items[0].statistics.likeCount,
        viewCount:result.items[0].statistics.viewCount,
      }
      this.common.updatelikes(data);
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
