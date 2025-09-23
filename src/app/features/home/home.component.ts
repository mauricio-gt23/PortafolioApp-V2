import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
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
   isSidebarHidden = false;

   constructor(private breakpointObserver: BreakpointObserver) {}

   ngOnInit(): void {
      this.breakpointObserver
         .observe(['(max-width: 767.98px)'])
         .pipe(
            map(result => result.matches),
            takeUntil(this.destroy$)
         )
         .subscribe(isSmallScreen => {
            this.isSidebarHidden = isSmallScreen;
         });
   }

   ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
   }
}
