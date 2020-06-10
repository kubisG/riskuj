import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Question } from '../shared/question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss'],
  animations: [
    trigger('fullscreen', [
      state('hide', style({ transform: 'translateX(-100%)' })),
      state('show', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('* => *', animate('500ms ease-in-out')),
    ])
  ]
})
export class QuestionDetailComponent {

  @Input() state: 'show' | 'hide';
  @Input() question: Question;
  @Input() categoryName: string;

  @Output() hideQuestion = new EventEmitter<Question>();

  constructor() { }

  onClick(correct: boolean) {
    this.hideQuestion.emit({ ...this.question, correct });
  }

  getClass(question: Question) {
    if (!question || !question.brick) {
      return '';
    } else if (question.brick === 'bronze') {
      return 'bronze';
    } else if (question.brick === 'silver') {
      return 'silver';
    } else {
      return 'gold';
    }
  }
}
