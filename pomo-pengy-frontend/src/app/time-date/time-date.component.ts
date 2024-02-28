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

  private formatTime(curDate: Date): string {
    let hours = curDate.getHours() % 12;
    hours = hours === 0 ? 12 : hours;
  
    return (
      this.padZero(hours) +
      ':' +
      this.padZero(curDate.getMinutes()) +
      ' ' +
      (curDate.getHours() >= 12 ? 'PM' : 'AM')
    );
  }
  
  private padZero(value: number): string {
    return value < 10 ? '0' + value : '' + value;
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
