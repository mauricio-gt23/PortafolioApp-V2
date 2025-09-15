import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';

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
   template: `
      <div class="layout-container">
         <!-- Sidebar -->
         <div class="sidebar-wrapper">
            <div class="sidebar-container">
               <!-- Profile Section -->
               <div class="profile-section">
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
               <div class="contact-section">
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
               <div class="social-section">
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
               <div class="actions-section">
                  <button
                     mat-raised-button
                     color="primary"
                     class="action-btn"
                     routerLink="/contact"
                  >
                     <mat-icon>send</mat-icon>
                     Contáctame
                  </button>
                  <button
                     mat-stroked-button
                     class="action-btn"
                     (click)="downloadCV()"
                  >
                     <mat-icon>download</mat-icon>
                     Descargar CV
                  </button>
               </div>
            </div>
         </div>

         <!-- Main Content Area -->
         <div class="main-content">
            <!-- Navbar -->
            <mat-toolbar class="navbar-container">
               <div class="container-fluid">
                  <div class="row w-100 align-items-center">
                     <!-- Logo/Brand Section -->
                     <div
                        class="col-12 col-md-3 col-lg-3 p-0 text-center text-md-start"
                     >
                        <span class="navbar-brand">Portfolio Web</span>
                     </div>

                     <!-- Navigation Links -->
                     <div class="col-12 col-md-9 col-lg-9 p-0">
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
            <main class="page-content">
               <div class="content-container">
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

   personalInfo = {
      name: 'Mauricio',
      title: 'Full Stack Developer',
      email: 'mauricio@example.com',
      phone: '+1 (555) 123-4567',
      location: 'Ciudad, País',
      avatar: 'assets/images/avatar.jpg',
   };

   socialLinks = [
      { platform: 'GitHub', url: 'https://github.com/mauricio', icon: 'code' },
      {
         platform: 'LinkedIn',
         url: 'https://linkedin.com/in/mauricio',
         icon: 'work',
      },
   ];

   navigationLinks = [
      { path: '/home', label: 'Inicio', icon: 'home' },
      { path: '/about', label: 'Acerca', icon: 'person' },
      { path: '/projects', label: 'Proyectos', icon: 'work' },
   ];

   constructor(private breakpointObserver: BreakpointObserver) {}

   ngOnInit(): void {
      // Component initialization
   }

   ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
   }

   downloadCV(): void {
      const link = document.createElement('a');
      link.href = 'assets/documents/cv.pdf';
      link.download = 'Mauricio_CV.pdf';
      link.click();
   }
}
