import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private apiService: ApiService) {}

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
      this.postToDB(this.minutes);
      // start a break session next
      this.entered = this.break;
    } else {
      // start a study session next
      this.entered = this.minutes;
    }

    this.seconds = 0;
  }

  postToDB(sessionTime: number){
    const payload = {
      sessionTime: sessionTime
    };
    
    this.apiService.sendSession(payload)
      .subscribe((response: any) => {  
          null;
      }, (error: any) => {
        console.error('Error:', error);
      });
  }
}
