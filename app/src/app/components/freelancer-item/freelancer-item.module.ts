import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { FreelancerItemComponent } from './freelancer-item.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    FreelancerItemComponent,
  ],
  declarations: [
    FreelancerItemComponent,
  ],
})
export class FreelancerItemModule {}
