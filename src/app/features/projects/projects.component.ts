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

// Interface for project data structure
export interface Project {
   id: string;
   title: string;
   subtitle: string;
   description: string;
   category: 'web' | 'mobile';
   projectType: 'propio' | 'cliente'; // Keeping original values as they're used in logic
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
         description: 'Modern platform to connect lawyers and clients',
         category: 'web',
         projectType: 'propio',
         technologies: ['HTML', 'CSS', 'JavaScript', 'Github Pages'],
         image: 'assets/legiz/legiz.png',
         githubUrl: 'https://github.com/mauricio-gt23/Legiz-LadingPage.git',
      },
      {
         id: 'fruit-app',
         title: 'Fruit App',
         subtitle: 'Fruit/Juice Management Application',
         description: 'Tracking of online fruit and juice sales',
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
         subtitle: 'Personal Finance Management',
         description: 'Modern application to achieve financial goals',
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
         subtitle: 'Personal Projects Portfolio',
         description: 'Web platform to showcase projects and skills',
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
         subtitle: 'Job Search App',
         description: 'Connect job seekers with employers',
         category: 'mobile',
         projectType: 'cliente',
         technologies: ['Kotlin', 'Retrofit', 'Firebase', 'Material Design'],
         image: 'assets/paradox/paradox.png',
         githubUrl: 'https://github.com/mauricio-gt23/Paradox.git',
      },
      {
         id: 'mi-chambita',
         title: 'Mi Chambita',
         subtitle: 'Startup Business Management App',
         description: 'Tool for recording sales, expenses, and inventory',
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
