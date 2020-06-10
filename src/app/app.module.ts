import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FistRoundComponentComponent } from './fist-round/fist-round-component.component';
import { FinalRoundComponentComponent } from './final-round/final-round-component.component';
import { QuestionComponent } from './question/question.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { CategoryComponent } from './category/category.component';
import { SummaryComponent } from './summary/summary.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { SecondRoundComponent } from './second-round/second-round.component';
import { CountdownComponent } from './countdown/countdown.component';
import { RoundSummaryComponent } from './round-summary/round-summary.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { AppState } from './state/app.state';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FistRoundComponentComponent,
    FinalRoundComponentComponent,
    QuestionComponent,
    QuestionDetailComponent,
    CategoryComponent,
    SummaryComponent,
    CategoryDetailComponent,
    SecondRoundComponent,
    CountdownComponent,
    RoundSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    NgxsModule.forRoot([AppState]),
    NgxsStoragePluginModule.forRoot({
      key: ['app'],
      storage: StorageOption.SessionStorage,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
