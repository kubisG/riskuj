import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger('hover', [
      state('initial', style({ transform: 'scale(1)' })),
      state('final', style({ transform: 'scale(1.06)' })),
      transition('* => *', animate('300ms ease-in-out')),
    ])
  ]
})
export class QuestionComponent {

  @Input() id: string;
  @Input() value: string;
  @Input() answered: boolean;
  @Input() clazz: string;

  @Output() showQuestion = new EventEmitter<string>();

  state: string;

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onHover(event: MouseEvent) {
    this.state = (event.type === 'mouseenter' && !this.answered) ? 'final' : 'initial';
  }

  constructor() { }

  onClick(id: string) {
    if (!this.answered) {
      this.showQuestion.emit(id);
    }
  }

}
