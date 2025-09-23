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
         period: '2022 - Presente',
         description: 'Desarrollo de aplicaciones web y móviles personalizadas para diversos clientes, implementando soluciones completas desde el frontend hasta el backend.',
         technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Kotlin', 'TypeScript']
      },
      {
         position: 'Desarrollador Frontend',
         company: 'Proyectos Académicos',
         period: '2021 - 2022',
         description: 'Creación de interfaces de usuario modernas y responsivas, enfocándome en la experiencia del usuario y las mejores prácticas de desarrollo frontend.',
         technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap']
      }
   ];

   education: Education[] = [
      {
         degree: 'Ingeniería de Sistemas',
         institution: 'Universidad Nacional Mayor de San Marcos',
         period: '2019 - Presente',
         description: 'Formación integral en desarrollo de software, algoritmos, estructuras de datos y arquitectura de sistemas.'
      },
      {
         degree: 'Certificación en Desarrollo Web',
         institution: 'Cursos Online Especializados',
         period: '2021 - 2022',
         description: 'Especialización en tecnologías web modernas, frameworks y metodologías ágiles de desarrollo.'
      }
   ];

   skills: Skill[] = [
      {
         category: 'Frontend',
         icon: 'web',
         level: 85,
         technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Material Design'],
         color: '#2196F3'
      },
      {
         category: 'Mobile',
         icon: 'phone_android',
         level: 80,
         technologies: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'MVVM', 'Room Database'],
         color: '#4CAF50'
      },
      {
         category: 'Backend',
         icon: 'storage',
         level: 75,
         technologies: ['Java', 'Spring Boot', 'REST APIs', 'Microservicios', 'JPA/Hibernate'],
         color: '#FF9800'
      },
      {
         category: 'Cloud',
         icon: 'cloud',
         level: 65,
         technologies: ['AWS', 'Docker', 'CI/CD', 'Git', 'Linux'],
         color: '#9C27B0'
      },
      {
         category: 'Database',
         icon: 'database',
         level: 70,
         technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL'],
         color: '#F44336'
      }
   ];

   constructor() {}
}
