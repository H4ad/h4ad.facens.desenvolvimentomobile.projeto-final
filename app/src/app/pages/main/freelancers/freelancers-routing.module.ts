import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FreelancersPage } from './freelancers.page';

const routes: Routes = [
  { path: '', component: FreelancersPage },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FreelancersRoutingModule {}
