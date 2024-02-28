import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  minutes: number = 35; 
  entered:number = 35;
  seconds: number = 0;
  isRunning: boolean = false;
  interval: any;

  ngOnInit() {
    this.resetTimer();
  }

  startTimer() {
    this.entered = this.minutes
    this.isRunning = true;
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else if (this.minutes > 0) {
        this.minutes--;
        this.seconds = 59;
      } else {
        this.resetTimer();
        // You can add a notification or play a sound when the Pomodoro session is complete.
      }
    }, 1000);
  }

  stopTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
    this.minutes = this.entered;
    this.seconds = 0;
  }
}
