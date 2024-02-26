import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-time-date',
  templateUrl: './time-date.component.html',
  styleUrls: ['./time-date.component.scss']
})
export class TimeDateComponent {
  currentDateTime: Date;
  public time: string;
  public date: string;

  constructor() {
    this.currentDateTime = new Date();
    this.time = this.formatTime(this.currentDateTime);
    this.date = this.formatDate(this.currentDateTime);
  }

  ngOnInit(): void {
    this.updateDateTime();
    // Update the time every second
    setInterval(() => this.updateDateTime(), 1000);
  }

  private padZero(num: number): string {
    // Add leading zero if the number is less than 10
    return num < 10 ? '0' + num : '' + num;
  }

  private formatTime(curDate: Date): string {
    // Format the time as HH:MM:SS
    return (
      this.padZero(curDate.getHours() % 12) +
      ':' +
      this.padZero(curDate.getMinutes()) +
      // ':' +
      // this.padZero(date.getSeconds()) +
      (this.currentDateTime.getHours() >= 12 ? 'pm' : 'am')
    );
  }

  private formatDate(curDate: Date): string {
    const dOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const mOY = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return dOW[curDate.getDay()] + ", " + mOY[curDate.getMonth()] + " " +  curDate.getDate() + ", " + curDate.getFullYear();
  }

  private updateDateTime(): void {
    this.currentDateTime = new Date();
    this.time = this.formatTime(this.currentDateTime);
    this.date = this.formatDate(this.currentDateTime);
  }
}
