import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects.routing';

@NgModule({
   declarations: [ProjectsComponent],
   imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
