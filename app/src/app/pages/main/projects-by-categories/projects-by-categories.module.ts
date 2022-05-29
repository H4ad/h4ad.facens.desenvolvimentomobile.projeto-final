import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProjectItemModule } from '../../../components/project-item/project-item.module';

import { ProjectsByCategoriesRoutingModule } from './projects-by-categories-routing.module';
import { ProjectsByCategoriesPage } from './projects-by-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsByCategoriesRoutingModule,
    ProjectItemModule,
  ],
  declarations: [
    ProjectsByCategoriesPage,
  ],
})
export class ProjectsByCategoriesModule {}
