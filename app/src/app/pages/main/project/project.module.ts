import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProjectItemModule } from '../../../components/project-item/project-item.module';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectPage } from './project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectRoutingModule,
    ProjectItemModule,
  ],
  declarations: [
    ProjectPage,
  ],
})
export class ProjectModule {}
