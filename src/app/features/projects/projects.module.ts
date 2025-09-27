import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects.routing';

@NgModule({
   declarations: [ProjectsComponent],
   imports: [
      CommonModule, 
      ProjectsRoutingModule, 
      MatIconModule,
      MatCardModule,
      MatButtonModule,
      MatChipsModule,
      MatTabsModule
   ],
})
export class ProjectsModule {}
