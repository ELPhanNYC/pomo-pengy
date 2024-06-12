import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
  displayInfo: boolean = false;

  toggleInfo() {
    this.displayInfo = !this.displayInfo
  }

  /* ------------------ TEMPORARY CODE ------------------ */
  achievements_temp = [
    "Rookie Pengy",
    "Apprentice Pengy",
    "Junior Pengy Analyst",
    "Associate Pengy",
    "Pengy Analyst",
    "Pengy Fellow",
    "Pengy Researcher",
    "Erudite Pengy",
    "Luminary Pengy",
    "Master Pengy",
    "Doctor Pengy",
    "Enlightened Pengy"
  ]

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  cur = this.achievements_temp[this.getRandomInt(13)]
}
