import { Routes } from '@angular/router';
import { FistRoundComponentComponent } from './fist-round/fist-round-component.component';
import { SecondRoundComponent } from './second-round/second-round.component';
import { FinalRoundComponentComponent } from './final-round/final-round-component.component';

export const appRoutes: Routes = [
  { path: 'final-round', component: FinalRoundComponentComponent },
  { path: 'second-round', component: SecondRoundComponent },
  { path: 'first-round', component: FistRoundComponentComponent},
  { path: '', redirectTo: 'first-round', pathMatch: 'full' },
  { path: '**', redirectTo: 'first-round', pathMatch: 'full' },
];
