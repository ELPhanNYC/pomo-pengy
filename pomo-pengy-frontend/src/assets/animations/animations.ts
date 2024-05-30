import { trigger, transition, style, animate } from '@angular/animations';

export const loadInAnimation = trigger('loadIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('2s', style({ opacity: 1 }))
    ])
  ]);

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1.5s', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('1.5s', style({ opacity: 0 }))
  ])
]);