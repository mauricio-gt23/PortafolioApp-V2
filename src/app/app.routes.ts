import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
   },
   {
      path: 'home',
      loadComponent: () =>
         import('./features/home/home.component').then(c => c.HomeComponent),
   },
   {
      path: 'about',
      loadComponent: () =>
         import('./features/about/about.component').then(c => c.AboutComponent),
   },
   {
      path: 'projects',
      loadComponent: () =>
         import('./features/projects/projects.component').then(
            c => c.ProjectsComponent
         ),
   },
   {
      path: 'projects/:id',
      loadComponent: () =>
         import('./features/projects/project-detail/project-detail.component').then(
            c => c.ProjectDetailComponent
         ),
   },
   {
      path: 'contact',
      loadComponent: () =>
         import('./features/contact/contact.component').then(c => c.ContactComponent),
   },
   {
      path: '**',
      redirectTo: '/home',
   },
];
