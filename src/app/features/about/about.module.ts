import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';

@NgModule({
   declarations: [AboutComponent],
   imports: [
      CommonModule, 
      AboutRoutingModule,
      MatCardModule,
      MatIconModule,
      MatProgressBarModule,
      MatChipsModule,
      LayoutModule
   ],
})
export class AboutModule {}
