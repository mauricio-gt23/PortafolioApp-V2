import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { LayoutStandaloneComponent } from './shared/components/layout/layout-standalone.component';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [LayoutStandaloneComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
   title = 'Portfolio';

   constructor(
      private themeService: ThemeService,
      private router: Router
   ) {}

   ngOnInit() {
      this.router.events.subscribe(event => {
         if (event instanceof NavigationStart) {
            window.scrollTo(0, 0);
         }

         if (event instanceof NavigationEnd) {
            setTimeout(() => {
               window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'auto',
               });

               const mainContent = document.querySelector('.page-content');
               if (mainContent) {
                  mainContent.scrollTop = 0;
               }
            }, 0);
         }
      });
   }
}
