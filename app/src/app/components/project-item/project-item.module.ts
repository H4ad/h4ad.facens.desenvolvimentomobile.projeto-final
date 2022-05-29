import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectItemComponent } from './project-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ProjectItemComponent,
  ],
  declarations: [
    ProjectItemComponent,
  ],
})
export class ProjectItemModule {}
