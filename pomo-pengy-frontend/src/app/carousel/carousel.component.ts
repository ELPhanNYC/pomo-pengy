import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.scss",
})
export class CarouselComponent implements OnInit{
  achievement_badges = [
    // Completion of first study session
    {
      image: "../../assets/achievement-badges/bronze-plain.png",
      desc: "Earned for the completion of your first study session!🎖️",
      status: "inactive"
    },
    // Completion of first task
    {
      image: "../../assets/achievement-badges/bronze-lightning.png",
      desc: "Awarded for completing your first task! ⚡",
      status: "inactive"
    },
    // Completion of 5 tasks
    {
      image: "../../assets/achievement-badges/bronze-star.png",
      desc: "Achieved by completing 5 tasks. ⭐",
      status: "inactive"
    },
    // Completion of 90 minutes of studying
    {
      image: "../../assets/achievement-badges/bronze-clock.png",
      desc: "Granted for completing 90 minutes of study time. ⏰",
      status: "inactive"
    },
    // Completion of 5 study sessions
    {
      image: "../../assets/achievement-badges/bronze-book.png",
      desc: "Earned for completing 5 study sessions. 📚",
      status: "inactive"
    },
    // Completion of 10 study sessions
    {
      image: "../../assets/achievement-badges/bronze-brain.png",
      desc: "Awarded for completing 10 study sessions. 🧠",
      status: "inactive"
    },
    // Completion of at least 10 study sessions and 10 tasks
    {
      image: "../../assets/achievement-badges/bronze-penguin.png",
      desc: "Granted for completing at least 10 study sessions and 10 tasks! 🐧",
      status: "inactive"
    },
    // Completion of 15 study sessions
    {
      image: "../../assets/achievement-badges/silver-plain.png",
      desc: "Achieved by completing 15 study sessions! 🎉",
      status: "inactive"
    },
    // Completion of 15 tasks
    {
      image: "../../assets/achievement-badges/silver-star.png",
      desc: "Awarded for completing 15 tasks! 🌟",
      status: "inactive"
    },
    // Completion of 750 minutes of studying
    {
      image: "../../assets/achievement-badges/silver-clock.png",
      desc: "Granted for completing 750 minutes of study time! ⏱️",
      status: "inactive"
    },
    // Completion of 20 study sessions
    {
      image: "../../assets/achievement-badges/silver-book.png",
      desc: "Earned for completing 20 study sessions! 📖",
      status: "inactive"
    },
    // Completion of 25 study sessions
    {
      image: "../../assets/achievement-badges/silver-brain.png",
      desc: "Awarded for completing 25 study sessions! 🧠",
      status: "inactive"
    },
    // Completion of at least 25 study sessions and 25 tasks
    {
      image: "../../assets/achievement-badges/silver-penguin.png",
      desc: "Granted for completing at least 25 study sessions and 25 tasks! 🐧",
      status: "inactive"
    },
    // Completion of 50 tasks
    {
      image: "../../assets/achievement-badges/gold-plain.png",
      desc: "Achieved by completing 50 tasks! 🎖️",
      status: "inactive"
    },
    // Completion of 50 study sessions
    {
      image: "../../assets/achievement-badges/gold-lightning.png",
      desc: "Awarded for completing 50 study sessions! ⚡",
      status: "inactive"
    },
    // Completion of 75 tasks
    {
      image: "../../assets/achievement-badges/gold-star.png",
      desc: "Granted for completing 75 tasks! 🌟",
      status: "inactive"
    },
    // Completion of 75 study sessions
    {
      image: "../../assets/achievement-badges/gold-clock.png",
      desc: "Earned for completing 75 study sessions! ⏰",
      status: "inactive"
    },
    // Completion of 100 tasks
    {
      image: "../../assets/achievement-badges/gold-book.png",
      desc: "Achieved by completing 100 tasks! 📘",
      status: "inactive"
    },
    // Completion of 100 study sessions
    {
      image: "../../assets/achievement-badges/gold-brain.png",
      desc: "Awarded for completing 100 study sessions! 🧠",
      status: "inactive"
    },
    // Completion of at least 100 study sessions and 200 tasks
    {
      image: "../../assets/achievement-badges/gold-penguin.png",
      desc: "Granted for completing at least 100 study sessions and 200 tasks! 🐧",
      status: "inactive"
    },
  ];

  ngOnInit() {
      
  }

  setStatus(statistics: any) {
    const timeStudy = statistics["study time"];
    const sessions = statistics["number of sessions completed"];
    const numTask = statistics["number of completed tasks"];
    if(sessions >= 1){
      this.achievement_badges[0].status = "active"
    }
    if(numTask >= 1){
      this.achievement_badges[1].status = "active"
    }
    if(numTask >= 5){
      this.achievement_badges[2].status = "active"
    }
    if(timeStudy >= 90){
      this.achievement_badges[3].status = "active"
    }
    if(sessions >= 5){
      this.achievement_badges[4].status = "active"
    }
    if(sessions >= 10){
      this.achievement_badges[5].status = "active"
    }
    if(sessions >= 10 && numTask >= 10){
      this.achievement_badges[6].status = "active"
    }
    if(sessions >= 15){
      this.achievement_badges[7].status = "active"
    }
    if(numTask >= 15){
      this.achievement_badges[8].status = "active"
    }
    if(timeStudy >= 750){
      this.achievement_badges[9].status = "active"
    }
    if(sessions >= 20){
      this.achievement_badges[10].status = "active"
    }
    if(sessions >= 25){
      this.achievement_badges[11].status = "active"
    }
    if(sessions >= 25 && numTask >= 25){
      this.achievement_badges[12].status = "active"
    }
    if(numTask >= 50){
      this.achievement_badges[13].status = "active"
    }
    if(sessions >= 50){
      this.achievement_badges[14].status = "active"
    }
    if(numTask >= 75){
      this.achievement_badges[15].status = "active"
    }
    if(sessions >= 75){
      this.achievement_badges[16].status = "active"
    }
    if(numTask >= 100){
      this.achievement_badges[17].status = "active"
    }
    if(sessions >= 100){
      this.achievement_badges[18].status = "active"
    }
    if(numTask >= 200 && sessions >= 100){
      this.achievement_badges[19].status = "active"
    }
  }

  // current index will be max achievement a user as obtained
  currentIndex = 0;

  showPrevious() {
    this.currentIndex =
      this.currentIndex > 0
        ? this.currentIndex - 1
        : this.achievement_badges.length - 1;
  }

  showNext() {
    this.currentIndex =
      this.currentIndex < this.achievement_badges.length - 1
        ? this.currentIndex + 1
        : 0;
  }

  getPreviousIndex() {
    return this.currentIndex > 0
      ? this.currentIndex - 1
      : this.achievement_badges.length - 1;
  }

  getNextIndex() {
    return this.currentIndex < this.achievement_badges.length - 1
      ? this.currentIndex + 1
      : 0;
  }
}
