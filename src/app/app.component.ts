import { Component, OnInit } from '@angular/core';
import { LayoutStandaloneComponent } from './shared/components/layout/layout-standalone.component';
import { ThemeService } from './core/services/theme.service';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [LayoutStandaloneComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
   title = 'PortafolioApp-V2';

   constructor(private themeService: ThemeService) {}

   ngOnInit() {
      // El ThemeService se inicializa automáticamente
      // No necesitamos lógica adicional aquí
   }
}
