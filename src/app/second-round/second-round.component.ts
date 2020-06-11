import { Component, OnInit } from '@angular/core';
import { questions } from '../shared/second-round-data';
import { Question } from '../shared/question';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { Select, Store } from '@ngxs/store';
import { AddPoints, SubstractPoints, SubstractBonus } from '../state/app.actions';

import * as _ from 'lodash';

@Component({
  selector: 'app-second-round',
  templateUrl: './second-round.component.html',
  styleUrls: ['./second-round.component.scss']
})
export class SecondRoundComponent implements OnInit {

  @Select(AppState.points) points$: Observable<number>;
  @Select(AppState.bonuses) bonuses$: Observable<number>;

  selectedQuestion: Question = null;

  questions = questions;
  state = 'hide';

  showRoundSummary = false;

  constructor(
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit() { }

  onShowQuestion(id: number) {
    this.selectedQuestion = _.reduce(this.questions, (result, tmpQuestions) => result.concat(tmpQuestions), [])
      .find((question: Question) => question.id === id);
    this.state = 'show';
  }

  onHideQuestion(question: Question) {
    (question.correct) ? this.store.dispatch(new AddPoints(question.value)) : this.store.dispatch(new SubstractPoints(question.value));
    this.questions = this.questions.map((row) => row.map((q) => (q.id === question.id) ? {...question, answered: true } : q));
    this.showRoundSummary = _.every(_.flattenDeep(this.questions), ['answered', true]);
    this.selectedQuestion = null;
    this.state = 'hide';
  }

  onCountdownFinished() {
    this.showRoundSummary = true;
  }

  onNextRound() {
    this.showRoundSummary = !this.showRoundSummary;
    this.router.navigate(['final-round']);
  }

  useBonus() {
      this.store.dispatch(new SubstractBonus());
  }
}
