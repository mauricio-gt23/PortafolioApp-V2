import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import {
   fadeIn,
   fadeInUp,
   scaleIn,
   slideInLeft,
   slideInRight,
} from '../../shared/animations/animations';

interface Service {
   title: string;
   description: string;
   image: string;
}

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss'],
   animations: [fadeInUp, slideInLeft, slideInRight, scaleIn, fadeIn],
   standalone: true,
   imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule],
})
export class HomeComponent implements OnInit, OnDestroy {
   private destroy$ = new Subject<void>();
   
   services: Service[] = [
      {
         title: 'Web Development',
         description: 'Modern applications and websites for an exceptional experience on all devices.',
         image: 'assets/desarrollo-web.png'
      },
      {
         title: 'Mobile Development',
         description: 'Native apps with fluid experience on Android, optimized for performance and usability.',
         image: 'assets/desarrollo-mobil.png'
      },
      {
         title: 'Backend & APIs',
         description: 'Scalable architecture and data security for reliable enterprise applications.',
         image: 'assets/desarrollo-backend.png'
      }
   ];

   constructor() {}

   ngOnInit(): void {}

   ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
   }
}
