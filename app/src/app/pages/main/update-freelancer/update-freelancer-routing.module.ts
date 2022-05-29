import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdateFreelancerPage } from './update-freelancer.page';

const routes: Routes = [
  { path: '', component: UpdateFreelancerPage },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class UpdateFreelancerRoutingModule {}
