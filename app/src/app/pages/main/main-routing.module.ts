import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
      { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesPageModule) },
      { path: 'categories/create', loadChildren: () => import('./create-category/create-category.module').then(m => m.CreateCategoryPageModule) },
      { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'projects/:projectId', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
      { path: 'categories/:categoryId/projects', loadChildren: () => import('./projects-by-categories/projects-by-categories.module').then(m => m.ProjectsByCategoriesModule) },
      // { path: 'categories/:categoryId/comment', loadChildren: () => import('./create-comment/create-comment.module').then(m => m.CreateCommentPageModule) },
      // { path: 'my-comments', loadChildren: () => import('./my-comments/my-comments.module').then(m => m.MyCommentsPageModule) },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MainPageRoutingModule {}
