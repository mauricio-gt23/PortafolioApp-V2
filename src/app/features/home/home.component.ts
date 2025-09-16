import { Component } from '@angular/core';
import { fadeIn, fadeInUp, scaleIn, slideInLeft, slideInRight } from '../../shared/animations/animations';


@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss'],
   animations: [fadeInUp, slideInLeft, slideInRight, scaleIn, fadeIn],
})
export class HomeComponent {
   constructor() {}
}
