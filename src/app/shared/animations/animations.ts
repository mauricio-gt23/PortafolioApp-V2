import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// Animación de entrada para headers/encabezados
export const fadeInUp = trigger('fadeInUp', [
   state('void', style({ opacity: 0, transform: 'translateY(30px)' })),
   state('*', style({ opacity: 1, transform: 'translateY(0)' })),
   transition('void => *', [animate('600ms ease-out')]),
   transition(':enter', [
      style({
         opacity: 0,
         transform: 'translateY(30px)',
      }),
      animate(
         '600ms ease-out',
         style({
            opacity: 1,
            transform: 'translateY(0)',
         })
      ),
   ]),
]);

// Animación de entrada con delay para elementos secuenciales
export const fadeInUpStagger = trigger('fadeInUpStagger', [
   transition('* => *', [
      query(
         ':enter',
         [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            stagger('100ms', [
               animate(
                  '600ms ease-out',
                  style({ opacity: 1, transform: 'translateY(0)' })
               ),
            ]),
         ],
         { optional: true }
      ),
   ]),
]);

// Animación de entrada desde la izquierda
export const slideInLeft = trigger('slideInLeft', [
   state('void', style({ opacity: 0, transform: 'translateX(-50px)' })),
   state('*', style({ opacity: 1, transform: 'translateX(0)' })),
   transition('void => *', [animate('500ms ease-out')]),
   transition(':enter', [
      style({
         opacity: 0,
         transform: 'translateX(-50px)',
      }),
      animate(
         '500ms ease-out',
         style({
            opacity: 1,
            transform: 'translateX(0)',
         })
      ),
   ]),
]);

// Animación de entrada desde la derecha
export const slideInRight = trigger('slideInRight', [
   state('void', style({ opacity: 0, transform: 'translateX(50px)' })),
   state('*', style({ opacity: 1, transform: 'translateX(0)' })),
   transition('void => *', [animate('500ms ease-out')]),
   transition(':enter', [
      style({
         opacity: 0,
         transform: 'translateX(50px)',
      }),
      animate(
         '500ms ease-out',
         style({
            opacity: 1,
            transform: 'translateX(0)',
         })
      ),
   ]),
]);

// Animación de escala para elementos interactivos
export const scaleIn = trigger('scaleIn', [
   state('void', style({ opacity: 0, transform: 'scale(0.8)' })),
   state('*', style({ opacity: 1, transform: 'scale(1)' })),
   transition('void => *', [animate('400ms ease-out')]),
   transition(':enter', [
      style({
         opacity: 0,
         transform: 'scale(0.8)',
      }),
      animate(
         '400ms ease-out',
         style({
            opacity: 1,
            transform: 'scale(1)',
         })
      ),
   ]),
]);

// Animación de transición entre páginas
export const routeTransition = trigger('routeTransition', [
   transition('* <=> *', [
      query(
         ':enter, :leave',
         [
            style({
               position: 'absolute',
               top: 0,
               left: 0,
               width: '100%',
            }),
         ],
         { optional: true }
      ),
      query(
         ':enter',
         [
            style({
               opacity: 0,
               transform: 'translateY(20px)',
            }),
         ],
         { optional: true }
      ),
      query(
         ':leave',
         [
            animate(
               '300ms ease-in',
               style({
                  opacity: 0,
                  transform: 'translateY(-20px)',
               })
            ),
         ],
         { optional: true }
      ),
      query(
         ':enter',
         [
            animate(
               '400ms ease-out',
               style({
                  opacity: 1,
                  transform: 'translateY(0)',
               })
            ),
         ],
         { optional: true }
      ),
   ]),
]);

// Animación suave para elementos que aparecen
export const fadeIn = trigger('fadeIn', [
   state('void', style({ opacity: 0 })),
   state('*', style({ opacity: 1 })),
   transition('void => *', [animate('400ms ease-in')]),
   transition(':enter', [
      style({ opacity: 0 }),
      animate('400ms ease-in', style({ opacity: 1 })),
   ]),
]);

// Animación de bounce sutil para botones
export const bounceIn = trigger('bounceIn', [
   transition(':enter', [
      animate(
         '600ms ease-out',
         keyframes([
            style({ opacity: 0, transform: 'scale(0.3)', offset: 0 }),
            style({ opacity: 1, transform: 'scale(1.05)', offset: 0.5 }),
            style({ opacity: 1, transform: 'scale(0.95)', offset: 0.7 }),
            style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
         ])
      ),
   ]),
]);
