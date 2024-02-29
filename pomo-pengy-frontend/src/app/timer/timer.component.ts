import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  constructor(private timerService: TimerService) {}

  displaySettings: boolean = false;

  toggleSettings() {
    this.displaySettings = !this.displaySettings;
  }

  ngOnInit() {
    this.resetTimer();
  }

  startTimer() {
    this.timerService.startTimer();
  }

  stopTimer() {
    this.timerService.stopTimer();
  }

  resetTimer() {
    this.timerService.resetTimer();
  }

  get minutes(): number {
    return this.timerService.minutes;
  }

  get entered():number {
    return this.timerService.entered;
  }

  get seconds(): number {
    return this.timerService.seconds;
  }

  get isRunning(): boolean {
    return this.timerService.isRunning;
  }

  get break(): number {
    return this.timerService.break;
  }

  set minutes(min:number){
    this.timerService.minutes = min;
  }

  set break(br:number){
    this.timerService.break = br;
  }

}
