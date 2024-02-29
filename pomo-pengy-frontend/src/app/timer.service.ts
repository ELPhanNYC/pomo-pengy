import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  minutes: number = 45; 
  seconds: number = 0;
  entered: number = 45;

  // used for pomodoro feature
  sprint: number = 0;
  break: number = 10;

  isRunning: boolean = false;
  interval: any;

  callRestart: number = 0;

  startTimer() {
    if (this.callRestart !== 1) {
      this.resetTimer();
      this.callRestart = 1;
    }
    this.isRunning = true;
    this.sprint++;
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else if (this.entered > 0) {
        this.entered--;
        this.seconds = 59;
      } else {
        this.resetTimer();
        this.callRestart = 0;
        alert("The timer has ended!");
      }
    }, 1000);
  }

  stopTimer() {
    this.isRunning = false;
    this.sprint--;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.isRunning = false;
    clearInterval(this.interval);

    if (this.sprint % 2 === 1) {
      this.entered = this.break;
    } else {
      this.entered = this.minutes;
    }

    this.seconds = 0;
  }
}
