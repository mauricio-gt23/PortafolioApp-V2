import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { ThemeService } from '../../../core/services/theme.service';
import {
   fadeIn,
   fadeInUp,
   scaleIn,
   slideInLeft,
   slideInRight,
} from '../../animations/animations';

@Component({
   selector: 'app-layout-standalone',
   standalone: true,
   imports: [
      CommonModule,
      RouterOutlet,
      RouterModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
   ],
   animations: [fadeInUp, slideInLeft, slideInRight, scaleIn, fadeIn],
   template: `
      <div class="layout-container" [class.dark-theme]="isDarkTheme" [class.light-theme]="!isDarkTheme">
         <!-- Sidebar -->
         <div class="sidebar-wrapper" [class.dark-theme]="isDarkTheme">
            <div class="sidebar-container" [class.dark-theme]="isDarkTheme">
               <!-- Profile Section -->
               <div class="profile-section" [@fadeInUp]>
                  <div class="avatar-container">
                     <img
                        [src]="personalInfo.avatar"
                        [alt]="personalInfo.name"
                        class="avatar"
                        onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiNlMGUwZTAiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjM1IiByPSIxNSIgZmlsbD0iIzk5OTk5OSIvPjxwYXRoIGQ9Ik0yMCA3NWMwLTE2LjU2OSAxMy40MzEtMzAgMzAtMzBzMzAgMTMuNDMxIDMwIDMwIiBmaWxsPSIjOTk5OTk5Ii8+PC9zdmc+'"
                     />
                  </div>
                  <h3 class="name">{{ personalInfo.name }}</h3>
                  <p class="title">{{ personalInfo.title }}</p>
               </div>

               <!-- Contact Info -->
               <div class="contact-section" [@slideInLeft]>
                  <h4 class="section-title">Contacto</h4>
                  <div class="contact-item">
                     <mat-icon>email</mat-icon>
                     <span>{{ personalInfo.email }}</span>
                  </div>
                  <div class="contact-item">
                     <mat-icon>phone</mat-icon>
                     <span>{{ personalInfo.phone }}</span>
                  </div>
                  <div class="contact-item">
                     <mat-icon>location_on</mat-icon>
                     <span>{{ personalInfo.location }}</span>
                  </div>
               </div>

               <!-- Social Links -->
               <div class="social-section" [@slideInRight]>
                  <h4 class="section-title">Redes Sociales</h4>
                  <div class="social-links">
                     <a
                        *ngFor="let link of socialLinks"
                        [href]="link.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-link"
                        [title]="link.platform"
                     >
                        <mat-icon>{{ link.icon }}</mat-icon>
                        <span>{{ link.platform }}</span>
                     </a>
                  </div>
               </div>

               <!-- Quick Actions -->
               <div class="actions-section d-none d-md-block" [@scaleIn]>
                  <button
                     mat-raised-button
                     color="accent"
                     class="action-btn"
                     routerLink="/contact"
                  >
                     <mat-icon>send</mat-icon>
                     Contáctame
                  </button>
               </div>
            </div>
         </div>

         <!-- Main Content Area -->
         <div class="main-content" [class.dark-theme]="isDarkTheme">
            <!-- Navbar -->
            <mat-toolbar class="navbar-container" [class.dark-theme]="isDarkTheme" [@fadeInUp]>
               <div class="container-fluid">
                  <div class="row w-100 align-items-center">
                     <!-- Logo/Brand Section -->
                     <div
                        class="col-12 col-md-5 col-lg-5 col-xl-6 p-0 text-center text-md-start"
                     >
                        <div class="brand-section d-flex justify-content-center justify-content-md-start align-items-center">
                           <span class="navbar-brand">PORTAFOLIO WEB</span>
                           <button
                              mat-icon-button
                              (click)="toggleTheme()"
                              class="theme-toggle-btn ms-2"
                              [title]="
                                 isDarkTheme
                                    ? 'Cambiar a tema claro'
                                    : 'Cambiar a tema oscuro'
                              "
                           >
                              <mat-icon>{{
                                 isDarkTheme ? 'light_mode' : 'dark_mode'
                              }}</mat-icon>
                           </button>
                        </div>
                     </div>

                     <!-- Navigation Links -->
                     <div class="col-12 col-md-1 col-lg-2 col-xl-4 p-0">
                        <nav class="navbar-nav">
                           <div
                              class="d-flex justify-content-center justify-content-md-center"
                           >
                              <button
                                 mat-button
                                 *ngFor="let link of navigationLinks"
                                 [routerLink]="link.path"
                                 routerLinkActive="active-link"
                                 class="nav-link-btn"
                                 [class.d-none]="link.path === '/contact' && !isMobile"
                                 [class.d-md-none]="link.path === '/contact'"
                              >
                                 <mat-icon class="me-1">{{
                                    link.icon
                                 }}</mat-icon>
                                 <span class="d-none d-sm-inline">{{
                                    link.label
                                 }}</span>
                              </button>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
            </mat-toolbar>

            <!-- Page Content -->
            <main class="page-content" [class.dark-theme]="isDarkTheme">
               <div class="content-container" [class.dark-theme]="isDarkTheme">
                  <router-outlet></router-outlet>
               </div>
            </main>
         </div>
      </div>
   `,
   styleUrls: ['./layout-standalone.component.scss'],
})
export class LayoutStandaloneComponent implements OnInit, OnDestroy {
   private destroy$ = new Subject<void>();
   isDarkTheme = false;
   isMobile = false;

   personalInfo = {
      name: 'Mauricio',
      title: 'Full-Stack Developer',
      email: 'mauricio_carmen01@hotmail.com',
      phone: '+51 937598438',
      location: 'Lima, Perú',
      avatar: 'assets/Perfil.png',
   };

   socialLinks = [
      {
         platform: 'GitHub',
         url: 'https://github.com/mauricio-gt23',
         icon: 'code',
      },
      {
         platform: 'LinkedIn',
         url: 'https://www.linkedin.com/in/mauriciocl/',
         icon: 'work',
      },
   ];

   navigationLinks = [
      { path: '/home', label: 'Inicio', icon: 'home' },
      { path: '/about', label: 'Acerca', icon: 'person' },
      { path: '/projects', label: 'Proyectos', icon: 'work' },
      { path: '/contact', label: 'Contactar', icon: 'send' },
   ];

   constructor(
      private breakpointObserver: BreakpointObserver,
      private readonly _themeService: ThemeService
   ) {
      this.isDarkTheme = this._themeService.isDarkTheme();
   }

   ngOnInit(): void {
      // Detectar pantallas móviles
      this.breakpointObserver.observe(['(max-width: 767px)']).subscribe(result => {
         this.isMobile = result.matches;
      });
   }

   toggleTheme(): void {
      this._themeService.toggleTheme();
      this.isDarkTheme = this._themeService.isDarkTheme();
   }

   ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
   }
}
