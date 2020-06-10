import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddPoints, SubstractPoints, AddBonus, SubstractBonus, BetPoints } from './app.actions';
import { patch } from '@ngxs/store/operators';

export class AppStateModel {
  public points: number;
  public bonuses: number;
  public bets: number[];
}

const defaults = {
  points: 0,
  bonuses: 0,
  bets: [],
};

@State<AppStateModel>({
  name: 'app',
  defaults
})
@Injectable()
export class AppState {

  @Selector()
    static points(state: AppStateModel): number {
        return state.points;
  }

  @Selector()
    static bets(state: AppStateModel): number[] {
        return state.bets;
  }

  @Selector()
    static bonuses(state: AppStateModel): number {
        return state.bonuses;
  }

  @Action(AddPoints)
  addPoints({ getState, setState }: StateContext<AppStateModel>, { points }: AddPoints) {
    const state = getState();
    setState(patch({ points: state.points + points }));
  }

  @Action(SubstractPoints)
  substractPoints({ getState, setState }: StateContext<AppStateModel>, { points }: SubstractPoints) {
    const state = getState();
    setState(patch({ points: state.points - points }));
  }

  @Action(BetPoints)
  betPoints({ getState, setState }: StateContext<AppStateModel>, { points }: BetPoints) {
    const state = getState();
    setState(patch({ points: state.points - points, bets: (points > 0) ? [...state.bets, points] : state.bets }));
  }

  @Action(AddBonus)
  addBonus({ getState, setState }: StateContext<AppStateModel>) {
    const state = getState();
    setState(patch({ bonuses: state.bonuses + 1 }));
  }

  @Action(SubstractBonus)
  substractBonus({ getState, setState }: StateContext<AppStateModel>) {
    const state = getState();
    setState(patch({ bonuses: state.bonuses - 1 }));
  }

}
