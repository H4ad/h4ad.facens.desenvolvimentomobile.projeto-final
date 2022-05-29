import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProjectItemModule } from '../../../components/project-item/project-item.module';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPage } from './projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsRoutingModule,
    ProjectItemModule,
  ],
  declarations: [
    ProjectsPage,
  ],
})
export class ProjectsModule {}
