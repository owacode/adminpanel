import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { LoaderFunctions } from 'src/app/common/loader-functions';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  noContent;
  public videos;
  constructor(public common: CommonService,public loader: LoaderFunctions) { }

  ngOnInit() {
    this.noContent = false;
    this.loader.showLoader();
    this.common.getvideos()
    .subscribe(result=> {
      console.log(result);
      this.videos=result.result;
      if(!this.videos.length) this.noContent = true;
      for(let i=0; i<this.videos.length; i++)
      {
        let image=this.getId(this.videos[i].video_link);
        this.videos[i].image=`https://img.youtube.com/vi/${image}/0.jpg`;
      }
      this.loader.hideLoader();

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

  delete(id) {
    if(confirm("Are you sure you want to delete this video ?")) {
      this.common.deletevideo(id)
      .subscribe(result=> {
        console.log(result);
        alert("Video Deleted Successfully");
      })
    } else return;
  }
}
