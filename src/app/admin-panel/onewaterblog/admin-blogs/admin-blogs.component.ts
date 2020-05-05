import { Component, OnInit } from '@angular/core';
import { LoaderFunctions } from 'src/app/common/loader-functions';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.scss']
})
export class AdminBlogsComponent implements OnInit {
  noContent;
  adminBlogs 
  blogs = [
    {
      title:'Lorem ipsum dolor, sit amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum dolor, sit amet consipsum dolor, sit amet ectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum dolor, ipsum dolor, sit amet sit amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum dolor, sit amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum dolor,ipsum dolor, sit amet  sit amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum dolor, sit amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum dolor, sit ipsum dolor, sit amet amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum dolor, sit amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsumipsum dolor, sit amet  dolor, sit amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum dipsum dolor, sit amet olor, sit amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum dolor, sit amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum dolor, sit ameipsum dolor, sit amet t consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum dolor, sit amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    },
    {
      title:'Lorem ipsum ipsum dolor, sit amet ipsum dolor, sit amet dolor, sit amet consectetur',
      author:'Admin',
      date:'12 March 2020',
      
    }
  ]
  constructor(public loader: LoaderFunctions) { }

  ngOnInit(): void {
    this.noContent = false;
    this.loader.showLoader();
    this.adminBlogs = this.blogs;
    this.loader.hideLoader();
    if (!this.adminBlogs.length) this.noContent = true;
  }

  removeBlog(){}

}
