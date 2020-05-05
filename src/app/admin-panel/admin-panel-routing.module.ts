import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPanelComponent } from './admin-panel.component';


const routes: Routes = [
  {
    path:'',
    component:AdminPanelComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'blogs',
        loadChildren: () => import('./onewaterblog/blogs/blogs.module').then(m => m.BlogsModule)
      },
      {
        path:'authors',
        loadChildren: () => import('./onewaterblog/authors/authors.module').then(m => m.AuthorsModule)
      },
      {
        path:'admin-blogs',
        loadChildren: () => import('./onewaterblog/admin-blogs/admin-blogs.module').then(m => m.AdminBlogsModule)
      },
      {
        path:'view-blog/:id',
        loadChildren: () => import('./onewaterblog/view-blog/view-blog.module').then(m => m.ViewBlogModule)
      },
      {
        path:'view-author/:id',
        loadChildren: () => import('./onewaterblog/view-author/view-author.module').then(m => m.ViewAuthorModule)
      },
      {
        path:'upload-video',
        loadChildren: () => import('./onewatertalks/post-video/post-video.module').then(m => m.PostVideoModule)
      },
      {
        path:'uploaded-videos',
        loadChildren: () => import('./onewatertalks/videos/videos.module').then(m => m.VideosModule)
      },
      {
        path:'view-video/:id',
        loadChildren: () => import('./onewatertalks/view-video/view-video.module').then(m => m.ViewVideoModule)
      },
      {
        path:'received-videos',
        loadChildren: () => import('./onewatertalks/received-videos/received-videos.module').then(m => m.ReceivedVideosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminPanelRoutingModule { }
