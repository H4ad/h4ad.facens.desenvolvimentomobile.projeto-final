import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateFreelancerRoutingModule } from './update-freelancer-routing.module';
import { UpdateFreelancerPage } from './update-freelancer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateFreelancerRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UpdateFreelancerPage,
  ],
})
export class UpdateFreelancerModule {}
