import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
   demoUrl?: string;
   githubUrl?: string;
}

@Component({
   selector: 'app-projects',
   templateUrl: './projects.component.html',
   styleUrls: ['./projects.component.scss'],
   animations: [fadeInUp, slideInLeft, slideInRight, scaleIn, fadeIn],
})
export class ProjectsComponent {
   // Sample projects data
   webProjects: Project[] = [
      {
         id: 'ecommerce-platform',
         title: 'Plataforma E-commerce Avanzada',
         subtitle: 'Sistema completo de comercio electrónico',
         description:
            'Plataforma de e-commerce moderna con gestión de inventario, pagos y analytics.',
         category: 'web',
         projectType: 'cliente',
         technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
         image: 'assets/projects/ecommerce.jpg',
         demoUrl: 'https://ecommerce-demo.example.com',
         githubUrl: 'https://github.com/usuario/ecommerce-platform',
      },
      {
         id: 'task-manager',
         title: 'Gestor de Tareas Colaborativo',
         subtitle: 'Aplicación de productividad en equipo',
         description:
            'Herramienta de gestión de proyectos con colaboración en tiempo real.',
         category: 'web',
         projectType: 'propio',
         technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
         image: 'assets/projects/task-manager.jpg',
         demoUrl: 'https://taskmanager-demo.example.com',
         githubUrl: 'https://github.com/usuario/task-manager',
      },
      {
         id: 'dashboard-analytics',
         title: 'Dashboard Analytics',
         subtitle: 'Panel de control empresarial',
         description:
            'Dashboard interactivo para visualización de datos empresariales.',
         category: 'web',
         projectType: 'cliente',
         technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
         image: 'assets/projects/dashboard.jpg',
         githubUrl: 'https://github.com/usuario/analytics-dashboard',
      },
   ];

   mobileProjects: Project[] = [
      {
         id: 'fitness-tracker',
         title: 'FitTracker Pro',
         subtitle: 'App de seguimiento fitness',
         description:
            'Aplicación móvil para seguimiento de ejercicios y nutrición.',
         category: 'mobile',
         projectType: 'propio',
         technologies: ['React Native', 'Redux', 'Firebase', 'HealthKit'],
         image: 'assets/projects/fitness-app.jpg',
         githubUrl: 'https://github.com/usuario/fitness-tracker',
      },
      {
         id: 'medi-reminder',
         title: 'MediReminder',
         subtitle: 'Recordatorio de medicamentos',
         description:
            'App para gestión y recordatorio de medicamentos personales.',
         category: 'mobile',
         projectType: 'cliente',
         technologies: ['Flutter', 'Dart', 'SQLite', 'Push Notifications'],
         image: 'assets/projects/medi-app.jpg',
      },
      {
         id: 'travel-buddy',
         title: 'TravelBuddy',
         subtitle: 'Compañero de viajes',
         description: 'Aplicación para planificación y seguimiento de viajes.',
         category: 'mobile',
         projectType: 'propio',
         technologies: [
            'React Native',
            'TypeScript',
            'Maps API',
            'Weather API',
         ],
         image: 'assets/projects/travel-app.jpg',
      },
   ];

   constructor(private router: Router) {}

   // Método para navegar a los detalles del proyecto
   viewProjectDetails(projectId: string): void {
      this.router.navigate(['/projects', projectId]);
   }
}
