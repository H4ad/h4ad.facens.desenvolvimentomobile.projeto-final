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
      { path: 'categories/:categoryId/projects/create', loadChildren: () => import('./create-project/create-project.module').then(m => m.CreateProjectModule) },
      { path: 'freelancers', loadChildren: () => import('./freelancers/freelancers.module').then(m => m.FreelancersModule) },
      { path: 'freelancers/me', loadChildren: () => import('./update-freelancer/update-freelancer.module').then(m => m.UpdateFreelancerModule) },
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
