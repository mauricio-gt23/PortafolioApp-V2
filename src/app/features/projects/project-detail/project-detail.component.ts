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
   projectType: 'propio' | 'cliente';
   technologies: string[];
   features: string[];
   challenges: string[];
   solutions: string[];
   images: string[];
   demoUrl?: string;
   githubUrl?: string;
   role: string;
   client?: string;
   testimonial?: {
      text: string;
      author: string;
      position: string;
   };
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

   // Sample detailed projects data
   private projectsData: ProjectDetail[] = [
      {
         id: 'ecommerce-platform',
         title: 'Plataforma E-commerce Avanzada',
         subtitle: 'Sistema completo de comercio electrónico',
         description:
            'Plataforma de e-commerce moderna con gestión de inventario, pagos y analytics.',
         longDescription:
            'Una plataforma de comercio electrónico completa desarrollada con Angular y Node.js, que incluye un sistema de gestión de productos, carrito de compras, procesamiento de pagos, gestión de usuarios, panel de administración y analytics en tiempo real. La aplicación está optimizada para SEO y cuenta con un diseño responsive que se adapta a todos los dispositivos.',
         category: 'web',
         projectType: 'cliente',
         technologies: [
            'Angular',
            'Node.js',
            'MongoDB',
            'Express',
            'Stripe',
            'JWT',
            'Socket.io',
         ],
         features: [
            'Catálogo de productos con filtros avanzados',
            'Carrito de compras persistente',
            'Sistema de pagos con Stripe',
            'Panel de administración completo',
            'Analytics y reportes en tiempo real',
            'Sistema de notificaciones',
            'Gestión de inventario automática',
            'SEO optimizado',
         ],
         challenges: [
            'Optimización de rendimiento con grandes catálogos',
            'Implementación de pagos seguros',
            'Sincronización en tiempo real del inventario',
            'Escalabilidad del sistema',
         ],
         solutions: [
            'Implementación de lazy loading y paginación',
            'Integración segura con Stripe y validaciones',
            'Uso de WebSockets para actualizaciones en tiempo real',
            'Arquitectura de microservicios con Docker',
         ],
         images: [
            'assets/projects/ecommerce/main.jpg',
            'assets/projects/ecommerce/admin.jpg',
            'assets/projects/ecommerce/mobile.jpg',
         ],
         demoUrl: 'https://ecommerce-demo.example.com',
         githubUrl: 'https://github.com/usuario/ecommerce-platform',
         role: 'Full Stack Developer & Team Lead',
         client: 'TechCorp Solutions',
         testimonial: {
            text: 'Excelente trabajo en el desarrollo de nuestra plataforma. El equipo entregó una solución robusta y escalable que superó nuestras expectativas.',
            author: 'María González',
            position: 'CTO, TechCorp Solutions',
         },
      },
      {
         id: 'task-manager',
         title: 'Gestor de Tareas Colaborativo',
         subtitle: 'Aplicación de productividad en equipo',
         description:
            'Herramienta de gestión de proyectos con colaboración en tiempo real.',
         longDescription:
            'Una aplicación web de gestión de tareas y proyectos que permite a los equipos colaborar de manera eficiente. Incluye funcionalidades como tableros Kanban, asignación de tareas, seguimiento de tiempo, comentarios en tiempo real y generación de reportes. La aplicación está diseñada con un enfoque en la usabilidad y la productividad.',
         category: 'web',
         projectType: 'propio',
         technologies: [
            'React',
            'TypeScript',
            'Firebase',
            'Material-UI',
            'Chart.js',
         ],
         features: [
            'Tableros Kanban interactivos',
            'Asignación y seguimiento de tareas',
            'Comentarios y colaboración en tiempo real',
            'Seguimiento de tiempo integrado',
            'Reportes y analytics',
            'Notificaciones push',
            'Integración con calendario',
         ],
         challenges: [
            'Sincronización en tiempo real entre usuarios',
            'Gestión eficiente del estado de la aplicación',
            'Optimización para equipos grandes',
         ],
         solutions: [
            'Implementación con Firebase Realtime Database',
            'Uso de Redux para gestión de estado',
            'Optimización con React.memo y useMemo',
         ],
         images: [
            'assets/projects/task-manager/dashboard.jpg',
            'assets/projects/task-manager/kanban.jpg',
         ],
         demoUrl: 'https://taskmanager-demo.example.com',
         githubUrl: 'https://github.com/usuario/task-manager',
         role: 'Frontend Developer',
         client: 'StartupXYZ',
      },
      {
         id: 'fitness-tracker',
         title: 'FitTracker Pro',
         subtitle: 'App de seguimiento fitness',
         description:
            'Aplicación móvil para seguimiento de ejercicios y nutrición.',
         longDescription:
            'Una aplicación móvil completa para el seguimiento de actividades físicas, nutrición y objetivos de salud. Incluye planes de entrenamiento personalizados, seguimiento de calorías, integración con dispositivos wearables y una comunidad social para motivación mutua.',
         category: 'mobile',
         projectType: 'propio',
         technologies: [
            'React Native',
            'Redux',
            'Firebase',
            'HealthKit',
            'Google Fit',
         ],
         features: [
            'Seguimiento de ejercicios y rutinas',
            'Contador de calorías y macros',
            'Planes de entrenamiento personalizados',
            'Integración con dispositivos wearables',
            'Red social fitness',
            'Recordatorios y notificaciones',
            'Progreso visual con gráficos',
         ],
         challenges: [
            'Integración con múltiples APIs de salud',
            'Optimización de batería',
            'Sincronización offline/online',
         ],
         solutions: [
            'Uso de HealthKit y Google Fit APIs',
            'Implementación de background tasks eficientes',
            'Sistema de caché local con sincronización',
         ],
         images: [
            'assets/projects/fitness/home.jpg',
            'assets/projects/fitness/workout.jpg',
            'assets/projects/fitness/stats.jpg',
         ],
         githubUrl: 'https://github.com/usuario/fitness-tracker',
         role: 'Mobile Developer',
         client: 'HealthTech Inc.',
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

      // Simulate API call delay
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

   getCategoryText(category: string): string {
      return category === 'web' ? 'Aplicación Web' : 'Aplicación Móvil';
   }
}
