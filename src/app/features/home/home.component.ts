import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
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
         title: 'Desarrollo Web',
         description: 'Aplicaciones y sitios modernos, para una experiencia excepcional en todos los dispositivos.',
         image: 'assets/desarrollo-web.png'
      },
      {
         title: 'Desarrollo Móvil',
         description: 'Apps nativas con experiencia fluida en Android, optimizadas para rendimiento y usabilidad.',
         image: 'assets/desarrollo-mobil.png'
      },
      {
         title: 'Backend & APIs',
         description: 'Integraciones robustas, arquitectura escalable y seguridad de datos para aplicaciones empresariales confiables.',
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
