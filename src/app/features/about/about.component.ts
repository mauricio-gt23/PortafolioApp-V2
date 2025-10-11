import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
   standalone: true,
   imports: [
      CommonModule,
      MatIconModule,
      MatCardModule,
      MatProgressBarModule,
      MatChipsModule,
   ],
})
export class AboutComponent {
   personalDescription = `
      I am a Full Stack developer passionate about creating innovative and scalable technological solutions.
      With more than 2 years of experience in web and mobile application development, I specialize in
      modern technologies such as Angular, Spring Boot and Kotlin. My approach focuses on writing clean,
      maintainable and efficient code that solves real problems.
   `;

   experiences: Experience[] = [
      {
         position: 'Full-Stack Developer',
         company: 'Freelance',
         period: '2024 - Current',
         description: 'Design and development of custom mobile applications, addressing all phases of the software lifecycle: requirements analysis, architecture, programming, testing and deployment. Integration of external services, use of Firebase for authentication, database and deployment, as well as optimization of the user experience.',
         technologies: ['Kotlin', 'Firebase'],
      },
      {
         position: 'Junior Full-Stack Developer',
         company: 'Sintad S.A.C',
         period: '2022 - Current',
         description: 'Participation in the development of enterprise web and mobile platforms, collaborating in the construction of interactive interfaces, robust APIs and database management. Support in the implementation of new functionalities, cloud deployment with AWS and continuous improvement of existing systems.',
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
         degree: 'Software Engineering',
         institution: 'Universidad Peruana de Ciencias Aplicadas',
         period: '2018 - 2024',
         description: 'Comprehensive training in software development, algorithms, data structures and systems architecture.',
      },
      {
         degree: 'Cloud Practitioner Certification',
         institution: 'AWS',
         period: '2025',
         description:
            'Certification in cloud services of AWS, focused on implementing, administering and monitoring cloud infrastructure.',
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
