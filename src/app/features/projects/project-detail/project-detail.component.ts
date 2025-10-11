import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

// Animations
import {
   animate,
   query,
   stagger,
   style,
   transition,
   trigger,
} from '@angular/animations';

export interface ProjectDetail {
   id: string;
   title: string;
   subtitle: string;
   description: string;
   longDescription: string;
   category: 'web' | 'mobile';
   projectType: 'propio' | 'cliente'; // Keeping original values as they're used in logic
   technologies: string[];
   images: string[];
   githubUrl?: string;
   client?: string;
}

@Component({
   selector: 'app-project-detail',
   standalone: true,
   imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatChipsModule,
      MatDividerModule,
      MatTabsModule,
   ],
   templateUrl: './project-detail.component.html',
   styleUrls: ['./project-detail.component.scss'],
   animations: [
      trigger('fadeIn', [
         transition(':enter', [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            animate(
               '600ms ease-out',
               style({ opacity: 1, transform: 'translateY(0)' })
            ),
         ]),
      ]),
      trigger('slideInLeft', [
         transition(':enter', [
            style({ opacity: 0, transform: 'translateX(-50px)' }),
            animate(
               '500ms 200ms ease-out',
               style({ opacity: 1, transform: 'translateX(0)' })
            ),
         ]),
      ]),
      trigger('slideInRight', [
         transition(':enter', [
            style({ opacity: 0, transform: 'translateX(50px)' }),
            animate(
               '500ms 400ms ease-out',
               style({ opacity: 1, transform: 'translateX(0)' })
            ),
         ]),
      ]),
      trigger('staggerIn', [
         transition('* => *', [
            query(
               ':enter',
               [
                  style({ opacity: 0, transform: 'translateY(20px)' }),
                  stagger(100, [
                     animate(
                        '400ms ease-out',
                        style({ opacity: 1, transform: 'translateY(0)' })
                     ),
                  ]),
               ],
               { optional: true }
            ),
         ]),
      ]),
   ],
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
   project: ProjectDetail | null = null;
   loading = true;
   private destroy$ = new Subject<void>();

   private projectsData: ProjectDetail[] = [
      // Web Projects
      {
         id: 'legiz-landing',
         title: 'Legiz - Landing Page',
         subtitle: '',
         description: 'Modern platform to connect lawyers and clients.',
         longDescription:
            'Modern platform designed to efficiently connect lawyers and clients. It offers an intuitive interface that facilitates the search and hiring of legal services.',
         category: 'web',
         projectType: 'propio',
         technologies: ['HTML', 'CSS', 'JavaScript', 'Github Pages'],
         images: [
            'assets/legiz/legiz.png',
            'assets/legiz/legiz-image2.png',
            'assets/legiz/legiz-image3.png',
            'assets/legiz/legiz-image4.png',
            'assets/legiz/legiz-image5.png',
         ],
         githubUrl: 'https://github.com/mauricio-gt23/Legiz-LadingPage.git',
      },
      {
         id: 'fruit-app',
         title: 'Fruit App',
         subtitle: 'Fruit/Juice Management Application',
         description: 'Tracking of online fruit and juice sales.',
         longDescription:
            'Web application for tracking and managing online fruit and juice sales. Allows users to manage inventory, process orders, and analyze sales statistics.',
         category: 'web',
         projectType: 'cliente',
         technologies: [
            'Angular',
            'TypeScript',
            'Bootstrap',
            'Angular Material',
            'Spring Boot',
            'Firebase',
         ],
         images: [
            'assets/fruit/fruitApp-image1.png',
            'assets/fruit/fruitApp-image2.png',
            'assets/fruit/fruitApp-image3.png',
            'assets/fruit/fruitApp-image4.png',
         ],
         githubUrl: 'https://github.com/mauricio-gt23/FruitApp-Frontend.git',
         client: 'Tineo',
      },
      {
         id: 'finance-app',
         title: 'Finance App',
         subtitle: 'Personal Finance Management',
         description: 'Modern application to achieve financial goals.',
         longDescription:
            'Modern web application designed to help users manage their personal finances and achieve their financial goals. It offers tools for expense tracking, budgeting, and financial planning.',
         category: 'web',
         projectType: 'cliente',
         technologies: [
            'Angular',
            'TypeScript',
            'Bootstrap',
            'Firebase',
            'Spring Boot',
         ],
         images: [
            'assets/finance/finance.png',
            'assets/finance/financeApp-image2.png',
            'assets/finance/financeApp-image3.png',
         ],
         githubUrl: 'https://github.com/mauricio-gt23/FinanceApp.git',
         client: 'SHAMARAD',
      },
      {
         id: 'portfolio-v1',
         title: 'Portfolio v1',
         subtitle: 'Personal Projects Portfolio',
         description: 'Web platform to showcase projects and skills.',
         longDescription:
            'Personal web platform designed to showcase projects, skills and professional experience. Includes sections for projects, technical skills, work experience and contact.',
         category: 'web',
         projectType: 'propio',
         technologies: [
            'Angular',
            'TypeScript',
            'Material Angular',
            'Firebase',
         ],
         images: [
            'assets/portfoliov1/portfoliov1.png',
            'assets/portfoliov1/portfoliov1-image2.png',
            'assets/portfoliov1/portfoliov1-image3.png',
            'assets/portfoliov1/portfoliov1-image4.png',
         ],
         githubUrl: 'https://github.com/mauricio-gt23/PortfolioApp-V1.git',
      },

      // Mobile Projects
      {
         id: 'paradox',
         title: 'Paradox',
         subtitle: 'Job Search App',
         description: 'Connect job seekers with employers',
         longDescription:
            'Mobile application designed to efficiently connect job seekers with employers. Offers functionalities for job search, creation of professional profiles and application management.',
         category: 'mobile',
         projectType: 'cliente',
         technologies: [
            'Kotlin',
            'Retrofit',
            'SpringBoot',
            'Firebase',
            'Material Design',
         ],
         images: [
            'assets/paradox/paradox-image1.png',
            'assets/paradox/paradox-image2.png',
            'assets/paradox/paradox-image3.png',
            'assets/paradox/paradox-image4.png',
            'assets/paradox/paradox-image5.png',
            'assets/paradox/paradox-image6.png',
         ],
         githubUrl: 'https://github.com/mauricio-gt23/Paradox.git',
         client: 'JH Studio',
      },
      {
         id: 'mi-chambita',
         title: 'Mi Chambita',
         subtitle: 'Startup Business Management App',
         description: 'Tool to record sales, expenses and inventory.',
         longDescription:
            'Mobile application designed for entrepreneurs who need a simple but powerful tool to record sales, expenses and inventory. Ideal for small businesses looking to digitize their operations.',
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
         images: [
            'assets/mi-chambita/chambita-image1.png',
            'assets/mi-chambita/chambita-image2.png',
            'assets/mi-chambita/chambita-image3.png',
            'assets/mi-chambita/chambita-image4.png',
            'assets/mi-chambita/chambita-image5.png',
         ],
         githubUrl: 'https://github.com/mauricio-gt23/Mi-Chambita.git',
         client: 'SHAMARAD',
      },
   ];

   constructor(
      private route: ActivatedRoute,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
         const projectId = params['id'];
         this.loadProject(projectId);
      });
   }

   ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
   }

   private loadProject(id: string): void {
      this.loading = true;

      setTimeout(() => {
         this.project = this.projectsData.find(p => p.id === id) || null;
         this.loading = false;

         if (!this.project) {
            this.router.navigate(['/projects']);
         }
      }, 500);
   }

   goBack(): void {
      this.router.navigate(['/projects']);
   }

   openUrl(url: string): void {
      window.open(url, '_blank');
   }

   getCategoryIcon(category: string): string {
      return category === 'web' ? 'web' : 'phone_android';
   }

   getCategoryLabel(category: string): string {
    return category === 'web' ? 'Web Application' : 'Mobile Application';
  }
}
