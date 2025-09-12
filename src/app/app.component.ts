import { Component } from '@angular/core';
import { LayoutStandaloneComponent } from './shared/components/layout/layout-standalone.component';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [LayoutStandaloneComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
})
export class AppComponent {
   title = 'PortafolioApp-V2';
}
