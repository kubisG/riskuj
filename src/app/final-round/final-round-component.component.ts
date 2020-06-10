import { Component, OnInit } from '@angular/core';
import { AppState } from '../state/app.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { questions } from '../shared/final-round-data';
import { Question } from '../shared/question';
import { BetPoints } from '../state/app.actions';

import * as _ from 'lodash';

@Component({
  selector: 'app-final-round-component',
  templateUrl: './final-round-component.component.html',
  styleUrls: ['./final-round-component.component.scss']
})
export class FinalRoundComponentComponent implements OnInit {

  @Select(AppState.points) points$: Observable<number>;
  @Select(AppState.bets) bets$: Observable<number[]>;

  selectedQuestion: Question = null;

  questions = questions;
  state = 'hide';

  points = null;

  showRoundSummary = false;

  constructor(private store: Store) { }

  ngOnInit() { }

  onShowQuestion(id: number) {
    this.selectedQuestion = _.reduce(this.questions, (result, tmpQuestions) => result.concat(tmpQuestions), [])
      .find((question: Question) => question.id === id);
    this.state = 'show';
  }

  onHideQuestion(question: Question) {
    this.questions = this.questions.map((row) => row.map((q) => (q.id === question.id) ? { ...question, answered: true } : q));
    this.selectedQuestion = null;
    this.state = 'hide';
  }

  betPoints(points: number) {
    this.store.dispatch(new BetPoints(points));
    this.points = null;
  }

  getClass(question: Question): string {
    if (!question.answered) {
      return '';
    } else {
      return (question.correct) ? 'correct' : '';
    }
  }
}
