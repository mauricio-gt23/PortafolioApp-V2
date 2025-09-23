import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
   declarations: [HomeComponent],
   imports: [
      CommonModule,
      HomeRoutingModule,
      MatButtonModule,
      MatIconModule,
      LayoutModule,
   ],
})
export class HomeModule {}
