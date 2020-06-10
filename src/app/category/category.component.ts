import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { trigger, style, state, transition, keyframes, animate } from '@angular/animations';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [
    trigger('hover', [
        state('initial', style({
            transform: 'scale(1)',
        })),
        state('final', style({
            transform: 'scale(1)',
        })),
        transition('initial => final', animate('1000ms ease-in', keyframes([
          style({transform: 'translate3d(-1px, 0, 0)', offset: 0.1}),
          style({transform: 'translate3d(2px, 0, 0)', offset: 0.2}),
          style({transform: 'translate3d(-4px, 0, 0)', offset: 0.3}),
          style({transform: 'translate3d(6px, 0, 0)', offset: 0.4}),
          style({transform: 'translate3d(-6px, 0, 0)', offset: 0.5}),
          style({transform: 'translate3d(4px, 0, 0)', offset: 0.6}),
          style({transform: 'translate3d(-4px, 0, 0)', offset: 0.7}),
          style({transform: 'translate3d(2px, 0, 0)', offset: 0.8}),
          style({transform: 'translate3d(-1px, 0, 0)', offset: 0.9}),
        ]))),
  ])]
})
export class CategoryComponent {

  @Input() id: number;
  @Input() name: string;
  @Input() locked: boolean;
  @Input() answered: boolean;

  state = 'initial';

  @Output() showCategory = new EventEmitter<number>();

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onHover(event: MouseEvent) {
    this.state = (event.type === 'mouseenter' && !this.answered && !this.locked) ? 'final' : 'initial';
  }

  constructor() { }

  onClick(id: number) {
    if (!this.answered && !this.locked) {
      this.showCategory.emit(id);
    }
  }
}
