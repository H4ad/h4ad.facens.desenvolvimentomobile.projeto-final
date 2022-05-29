import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProjectPage } from './create-project.page';

const routes: Routes = [
  { path: '', component: CreateProjectPage },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CreateProjectRoutingModule {}
