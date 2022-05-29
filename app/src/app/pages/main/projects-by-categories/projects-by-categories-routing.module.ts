import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsByCategoriesPage } from './projects-by-categories.page';

const routes: Routes = [
  { path: '', component: ProjectsByCategoriesPage },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProjectsByCategoriesRoutingModule {}
