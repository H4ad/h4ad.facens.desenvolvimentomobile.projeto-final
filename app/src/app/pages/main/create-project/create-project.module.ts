import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProjectRoutingModule } from './create-project-routing.module';
import { CreateProjectPage } from './create-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProjectRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CreateProjectPage,
  ],
})
export class CreateProjectModule {}
