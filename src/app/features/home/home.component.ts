import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
   fadeIn,
   fadeInUp,
   scaleIn,
   slideInLeft,
   slideInRight,
} from '../../shared/animations/animations';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss'],
   animations: [fadeInUp, slideInLeft, slideInRight, scaleIn, fadeIn],
})
export class HomeComponent implements OnInit, OnDestroy {
   private destroy$ = new Subject<void>();

   constructor() {}

   ngOnInit(): void {}

   ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
   }
}
