// animations.ts

import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  state('in', style({ opacity: 1 })),
  transition(':enter', [
    style({ opacity: 0 }),
    animate('3ms ease-out')
  ]),
  transition(':leave', [
    animate('3ms ease-in', style({ opacity: 0 }))
  ])
]);
