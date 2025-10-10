import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import {
   fadeIn,
   fadeInUp,
   scaleIn,
   slideInLeft,
   slideInRight,
} from '../../shared/animations/animations';

// Interface para la estructura de datos de proyectos
export interface Project {
   id: string;
   title: string;
   subtitle: string;
   description: string;
   category: 'web' | 'mobile';
   projectType: 'propio' | 'cliente';
   technologies: string[];
   image: string;
   githubUrl?: string;
}

@Component({
   selector: 'app-projects',
   templateUrl: './projects.component.html',
   styleUrls: ['./projects.component.scss'],
   animations: [fadeInUp, slideInLeft, slideInRight, scaleIn, fadeIn],
   standalone: true,
   imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatCardModule, MatChipsModule],
})
export class ProjectsComponent {
   webProjects: Project[] = [
      {
         id: 'legiz-landing',
         title: 'Legiz - Landing Page',
         subtitle: '',
         description: 'Plataforma moderna para conectar abogados y clientes.',
         category: 'web',
         projectType: 'propio',
         technologies: ['HTML', 'CSS', 'JavaScript', 'Github Pages'],
         image: 'assets/legiz/legiz.png',
         githubUrl: 'https://github.com/mauricio-gt23/Legiz-LadingPage.git',
      },
      {
         id: 'fruit-app',
         title: 'Fruit App',
         subtitle: 'Aplicación de gestión de frutas/jugos',
         description: 'Seguimiento de ventas de frutas y jugos por internet.',
         category: 'web',
         projectType: 'cliente',
         technologies: [
            'Angular',
            'TypeScript',
            'Bootstrap',
            'Angular Material',
            'Firebase',
            'Spring Boot',
         ],
         image: 'assets/fruit/fruit.png',
         githubUrl: 'https://github.com/mauricio-gt23/FruitApp-Frontend.git',
      },
      {
         id: 'finance-app',
         title: 'Finance App',
         subtitle: 'Gestión de finanzas personales',
         description: 'Aplicación moderna para alcanzar objetivos financieros.',
         category: 'web',
         projectType: 'cliente',
         technologies: [
            'Angular',
            'TypeScript',
            'Bootstrap',
            'Firebase',
            'Spring Boot',
         ],
         image: 'assets/finance/finance.png',
         githubUrl: 'https://github.com/mauricio-gt23/FinanceApp.git',
      },
      {
         id: 'portfolio-v1',
         title: 'Portfolio v1',
         subtitle: 'Portafolio de proyectos personales',
         description: 'Plataforma web para mostrar proyectos y habilidades.',
         category: 'web',
         projectType: 'propio',
         technologies: [
            'Angular',
            'TypeScript',
            'Material Angular',
            'Firebase',
         ],
         image: 'assets/portfoliov1/portfoliov1.png',
         githubUrl: 'https://github.com/mauricio-gt23/PortfolioApp-V1.git',
      },
   ];

   mobileProjects: Project[] = [
      {
         id: 'paradox',
         title: 'Paradox',
         subtitle: 'App de búsqueda de empleo',
         description: 'Conectar solicitantes de empleo con empleadores',
         category: 'mobile',
         projectType: 'cliente',
         technologies: ['Kotlin', 'Retrofit', 'Firebase', 'Material Design'],
         image: 'assets/paradox/paradox.png',
         githubUrl: 'https://github.com/mauricio-gt23/Paradox.git',
      },
      {
         id: 'mi-chambita',
         title: 'Mi Chambita',
         subtitle: 'App para emprendedores',
         description: 'Herramienta para registrar ventas, gastos e inventario.',
         category: 'mobile',
         projectType: 'cliente',
         technologies: [
            'Kotlin',
            'MVVM',
            'Room',
            'DataStore',
            'Firebase',
            'Jetpack Compose',
         ],
         image: 'assets/mi-chambita/mi-chambita.png',
         githubUrl: 'https://github.com/mauricio-gt23/Mi-Chambita.git',
      },
   ];

   constructor(private router: Router) {}

   viewProjectDetails(projectId: string): void {
      this.router.navigate(['/projects', projectId]);
   }
}
