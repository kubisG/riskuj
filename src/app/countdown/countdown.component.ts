import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval, timer, Subscription, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Input() minutes: number;

  @Output() finished = new EventEmitter<void>();

  countdown: { percentage: number, minutes: number };

  subscription: Subscription;
  seconds = 0;
  paused = false;

  constructor() { }

  ngOnInit() {
    this.resume();
  }

  toggle() {
    this.paused = !this.paused;
    (this.paused) ? this.pause() : this.resume();
  }

  private pause() {
    this.subscription.unsubscribe();
  }

  private resume() {
    // emit value every 1s
    const source$ = interval(1000);
    // when timer emits after 5s, complete source
    this.subscription = source$.subscribe(() => {
      this.seconds += 1;
      const percentage = (this.seconds / (this.minutes * 60)) * 100;
      const minutes = Math.round(this.minutes - (this.seconds / 60));
      if (percentage >= 100) {
        this.finished.emit();
        this.subscription.unsubscribe();
      }
      this.countdown = { percentage, minutes };
    });
  }

}
