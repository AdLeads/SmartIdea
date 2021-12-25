import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { MyprojectsComponent } from './pages/myprojects/myprojects.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MyprojectsComponent],
  imports: [CommonModule, SharedModule, MaterialModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
