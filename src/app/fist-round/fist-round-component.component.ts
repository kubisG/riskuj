import { Component, OnInit } from '@angular/core';
import { Question } from '../shared/question';
import { Category } from '../shared/category';
import { categories } from '../shared/first-round-data';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../state/app.state';
import { Observable } from 'rxjs';
import { AddBonus, AddPoints } from '../state/app.actions';

import * as _ from 'lodash';

@Component({
  selector: 'app-fist-round-component',
  templateUrl: './fist-round-component.component.html',
  styleUrls: ['./fist-round-component.component.scss']
})
export class FistRoundComponentComponent implements OnInit {

  @Select(AppState.points) points$: Observable<number>;
  @Select(AppState.bonuses) bonuses$: Observable<number>;

  selectedQuestion: Question = null;
  selectedCategory: Category = null;

  categories = categories;

  questionState = 'hide';
  categoryState = 'hide';

  showRoundSummary = false;

  constructor(
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit() { }

  onShowQuestion(id: number) {
    this.selectedQuestion = _.reduce(this.categories, (result, cat) => result.concat(cat.questions), [])
      .find((question: Question) => question.id === id);
    this.selectedCategory = _.find(this.categories, (category) => category.id === this.selectedQuestion.categoryId);
    this.questionState = 'show';
  }

  onHideQuestion(question: Question) {
    if (question.correct) {
      this.store.dispatch(new AddPoints(question.value));
    }
    const category = _.find(this.categories, (cat) => cat.id === question.categoryId);
    const questions = this.updateQuestion(question.id, question.correct, category.questions);
    this.categories = _.map(this.categories, (cat) => (cat.id === category.id) ?
      ({ ...category, questions, locked: this.isLocked(questions) }) : cat);
    this.selectedQuestion = this.selectedCategory = null;
    this.questionState = 'hide';
  }

  onShowCategory(id: number) {
    this.selectedCategory = _.find(this.categories, (category) => category.id === id);
    this.categoryState = 'show';
  }

  onHideCategory(category: Category) {
    if (category.correct) {
      this.store.dispatch(new AddBonus());
    }
    this.categories = _.map(this.categories, (cat) => (cat.id === category.id) ? ({ ...category, answered: true }) : cat);
    this.showRoundSummary = _.every(this.categories, ['answered', true]);
    this.selectedCategory = null;
    this.categoryState = 'hide';
  }

  onNextRound() {
    this.showRoundSummary = !this.showRoundSummary;
    this.router.navigate(['second-round']);
  }

  private updateQuestion(id: number, correct: boolean, questions: Question[]) {
    return questions.map((question: Question) => {
      return (question.id === id) ? { ...question, answered: true, correct } : question;
    });
  }

  private isLocked(questions: Question[]): boolean {
    return _.some(questions, ['answered', false]);
  }
}
