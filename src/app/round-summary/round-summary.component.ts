import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-round-summary',
  templateUrl: './round-summary.component.html',
  styleUrls: ['./round-summary.component.scss']
})
export class RoundSummaryComponent implements OnInit {

  @Input() title: string;
  @Input() bonuses: string;
  @Input() points: string;

  @Output() nextRound = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.nextRound.emit();
  }

}
