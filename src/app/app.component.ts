import { Component, OnInit } from '@angular/core';
import { LayoutStandaloneComponent } from './shared/components/layout/layout-standalone.component';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [LayoutStandaloneComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
   title = 'PortafolioApp-V2';

   ngOnInit() {
      this.initializeTheme();
   }

   private initializeTheme() {
      // Verificar si ya hay un tema establecido en localStorage
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
         document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
         // Detectar preferencia del sistema
         const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
         ).matches;
         const theme = prefersDark ? 'dark' : 'light';
         document.documentElement.setAttribute('data-theme', theme);
      }

      // Escuchar cambios en la preferencia del sistema
      window
         .matchMedia('(prefers-color-scheme: dark)')
         .addEventListener('change', e => {
            // Solo cambiar si no hay tema guardado manualmente
            if (!localStorage.getItem('theme')) {
               const theme = e.matches ? 'dark' : 'light';
               document.documentElement.setAttribute('data-theme', theme);
            }
         });
   }
}
