import { Component } from '@angular/core';
import {
   fadeIn,
   fadeInUp,
   scaleIn,
   slideInLeft,
   slideInRight,
} from '../../shared/animations/animations';

interface Experience {
   position: string;
   company: string;
   period: string;
   description: string;
   technologies: string[];
}

interface Education {
   degree: string;
   institution: string;
   period: string;
   description: string;
}

interface Skill {
   category: string;
   icon: string;
   level: number;
   technologies: string[];
   color: string;
}

@Component({
   selector: 'app-about',
   templateUrl: './about.component.html',
   styleUrls: ['./about.component.scss'],
   animations: [fadeInUp, slideInLeft, slideInRight, scaleIn, fadeIn],
})
export class AboutComponent {
   personalDescription = `
      Soy un desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras y escalables. 
      Con más de 2 años de experiencia en el desarrollo de aplicaciones web y móviles, me especializo en 
      tecnologías modernas como Angular, Spring Boot y Kotlin. Mi enfoque se centra en escribir código limpio, 
      mantener las mejores prácticas y entregar productos de alta calidad que superen las expectativas del cliente.
   `;

   experiences: Experience[] = [
      {
         position: 'Desarrollador Full Stack',
         company: 'Freelance',
         period: '2024 - Presente',
         description:
            'Diseño y desarrollo de aplicaciones móviles a medida, abordando todas las fases del ciclo de vida del software: análisis de requerimientos, arquitectura, programación, pruebas y despliegue. Integración de servicios externos, uso de Firebase para autenticación, base de datos y despliegue, además de la optimización de la experiencia de usuario.',
         technologies: ['Kotlin', 'Firebase'],
      },
      {
         position: 'Desarrollador Junior Full Stack',
         company: 'Sintad S.A.C',
         period: '2022 - Presente',
         description:
            'Participación en el desarrollo de plataformas web y móviles empresariales, colaborando en la construcción de interfaces interactivas, APIs robustas y gestión de bases de datos. Apoyo en la implementación de nuevas funcionalidades, despliegue en la nube con AWS y mejora continua de los sistemas existentes.',
         technologies: [
            'Angular',
            'Spring Boot',
            'PostgreSQL',
            'Kotlin',
            'AWS',
         ],
      },
   ];

   education: Education[] = [
      {
         degree: 'Ingeniería de Software',
         institution: 'Universidad Peruana de Ciencias Aplicadas',
         period: '2018 - 2024',
         description:
            'Formación integral en desarrollo de software, algoritmos, estructuras de datos y arquitectura de sistemas.',
      },
      {
         degree: 'Certificación Cloud Practitioner',
         institution: 'AWS',
         period: '2025',
         description:
            'Certificación en servicios de la nube de AWS, enfocada en la implementación, administración y monitorización de infraestructura en la nube.',
      },
   ];

   skills: Skill[] = [
      {
         category: 'Frontend',
         icon: 'web',
         level: 80,
         technologies: [
            'HTML5',
            'CSS3',
            'Angular',
            'SCSS',
            'Bootstrap',
            'Material Design',
         ],
         color: '#2196F3',
      },
      {
         category: 'Mobile',
         icon: 'phone_android',
         level: 85,
         technologies: [
            'Kotlin',
            'Android Studio',
            'Jetpack Compose',
            'MVVM',
            'Room Database',
         ],
         color: '#4CAF50',
      },
      {
         category: 'Backend',
         icon: 'storage',
         level: 65,
         technologies: [
            'Java',
            'Spring Boot',
            'REST APIs',
            'Microservicios',
            'JPA/Hibernate',
         ],
         color: '#FF9800',
      },
      {
         category: 'Cloud',
         icon: 'cloud',
         level: 50,
         technologies: ['AWS', 'Docker', 'CI/CD', 'Git', 'Firebase'],
         color: '#9C27B0',
      },
      {
         category: 'Database',
         icon: 'database',
         level: 70,
         technologies: ['PostgreSQL', 'MongoDB', 'Redis'],
         color: '#F44336',
      },
   ];

   constructor() {}
}
