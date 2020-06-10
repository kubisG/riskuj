import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Category } from '../shared/category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
  animations: [
    trigger('fullscreen', [
      state('hide', style({ transform: 'translateX(-100%)' })),
      state('show', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('* => *', animate('500ms ease-in-out')),
    ])
  ]
})
export class CategoryDetailComponent {

  @Input() state: 'show' | 'hide';
  @Input() category: Category;
  @Input() categoryName: string;

  @Output() hideCategory = new EventEmitter<Category>();

  constructor() { }

  onClick(correct: boolean) {
    this.hideCategory.emit({ ...this.category, correct });
  }

}
