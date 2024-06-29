import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent implements OnInit{
  displayInfo: boolean = false;
  cur: string = "";

  constructor( private apiService: ApiService) {}

  ngOnInit(): void {
      this.getStats();
  }

  toggleInfo() {
    this.displayInfo = !this.displayInfo
  }

  /* ------------------ TEMPORARY CODE ------------------ */
  // achievements_temp = [
  //   "Rookie Pengy",
  //   "Apprentice Pengy",
  //   "Junior Pengy Analyst",
  //   "Associate Pengy",
  //   "Pengy Analyst",
  //   "Pengy Fellow",
  //   "Pengy Researcher",
  //   "Erudite Pengy",
  //   "Luminary Pengy",
  //   "Master Pengy",
  //   "Doctor Pengy",
  //   "Enlightened Pengy"
  // ]

  // getRandomInt(max: number) {
  //   return Math.floor(Math.random() * max);
  // }

  getStats() {
    this.apiService.getUserRank()
      .subscribe((response: any) => {  
        if(response){
          this.cur = response.cur;
        }
      }, (error: any) => {
        console.error('Error:', error);
      });
  }
}
