import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FreelancerItemModule } from '../../../components/freelancer-item/freelancer-item.module';
import { ProjectItemModule } from '../../../components/project-item/project-item.module';

import { FreelancersRoutingModule } from './freelancers-routing.module';
import { FreelancersPage } from './freelancers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreelancersRoutingModule,
    ProjectItemModule,
    FreelancerItemModule,
  ],
  declarations: [
    FreelancersPage,
  ],
})
export class FreelancersModule {}
