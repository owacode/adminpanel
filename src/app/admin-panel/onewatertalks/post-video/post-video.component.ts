import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { CommonService } from '../common.service';

@Component({
  selector: 'app-post-video',
  templateUrl: './post-video.component.html',
  styleUrls: ['./post-video.component.scss']
})
export class PostVideoComponent implements OnInit {

  form:FormGroup;
  category;
  showSubcatrgory;
  subcategory;
  image;
  submited: Boolean = false;
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.form= new FormGroup({
      title:new FormControl(null, {validators:[Validators.required]}),
      video_link:new FormControl(null, {validators:[Validators.required]}),
      desc:new FormControl(null, {validators:[Validators.required, Validators.maxLength(500)]}),
      category:new FormControl(null, {validators:[Validators.required]}),
      image:new FormControl(null, {validators:[Validators.required]}),
      likes:new FormControl(null, {validators:[Validators.required]}),
      views:new FormControl(null, {validators:[Validators.required]}),
    })
  }
  addVideo(){
    console.log(this.form);
    this.submited = true;
    if(this.form.invalid){
      return;
    }

      this.image= this.getId(this.form.value.video_link);
      this.form.value.image=`https://img.youtube.com/vi/${this.image}/0.jpg`

    console.log(this.form.value);
    this.common.getLikes(this.image)
    .subscribe(result=>{
      console.log(result.items[0].statistics,'result displayed');

      this.form.value.likes=result.items[0].statistics.likeCount,
      this.form.value.views=result.items[0].statistics.viewCount,
      this.common.addvideo(this.form.value);
      this.form.reset();
      alert("The video has been posted successfully.")
    })
  }

  onChange(event){
    console.log('hitttt');
    this.category=event.target.value;
    const newVal = event.target.value;
    this.showSubcatrgory=newVal;
    this.form.value.category=this.category;
    console.log(this.category, this.showSubcatrgory)
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
