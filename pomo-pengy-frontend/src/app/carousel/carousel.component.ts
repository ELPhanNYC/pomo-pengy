import { Component } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.scss",
})
export class CarouselComponent {
  achievement_badges = [
    // Completion of first study session
    {
      image: "../../assets/achievement-badges/bronze-plain.png",
      desc: "Earned for the completion of your first study session!🎖️",
    },
    // Completion of first task
    {
      image: "../../assets/achievement-badges/bronze-lightning.png",
      desc: "Awarded for completing your first task! ⚡",
    },
    // Completion of 5 tasks
    {
      image: "../../assets/achievement-badges/bronze-star.png",
      desc: "Achieved by completing 5 tasks. ⭐",
    },
    // Completion of 90 minutes of studying
    {
      image: "../../assets/achievement-badges/bronze-clock.png",
      desc: "Granted for completing 90 minutes of study time. ⏰",
    },
    // Completion of 5 study sessions
    {
      image: "../../assets/achievement-badges/bronze-book.png",
      desc: "Earned for completing 5 study sessions. 📚",
    },
    // Completion of 10 study sessions
    {
      image: "../../assets/achievement-badges/bronze-brain.png",
      desc: "Awarded for completing 10 study sessions. 🧠",
    },
    // Completion of at least 10 study sessions and 10 tasks
    {
      image: "../../assets/achievement-badges/bronze-penguin.png",
      desc: "Granted for completing at least 10 study sessions and 10 tasks! 🐧",
    },
    // Completion of 15 study sessions
    {
      image: "../../assets/achievement-badges/silver-plain.png",
      desc: "Achieved by completing 15 study sessions! 🎉",
    },
    // Completion of 15 tasks
    {
      image: "../../assets/achievement-badges/silver-star.png",
      desc: "Awarded for completing 15 tasks! 🌟",
    },
    // Completion of 750 minutes of studying
    {
      image: "../../assets/achievement-badges/silver-clock.png",
      desc: "Granted for completing 750 minutes of study time! ⏱️",
    },
    // Completion of 20 study sessions
    {
      image: "../../assets/achievement-badges/silver-book.png",
      desc: "Earned for completing 20 study sessions! 📖",
    },
    // Completion of 25 study sessions
    {
      image: "../../assets/achievement-badges/silver-brain.png",
      desc: "Awarded for completing 25 study sessions! 🧠",
    },
    // Completion of at least 25 study sessions and 25 tasks
    {
      image: "../../assets/achievement-badges/silver-penguin.png",
      desc: "Granted for completing at least 25 study sessions and 25 tasks! 🐧",
    },
    // Completion of 50 tasks
    {
      image: "../../assets/achievement-badges/gold-plain.png",
      desc: "Achieved by completing 50 tasks! 🎖️",
    },
    // Completion of 50 study sessions
    {
      image: "../../assets/achievement-badges/gold-lightning.png",
      desc: "Awarded for completing 50 study sessions! ⚡",
    },
    // Completion of 75 tasks
    {
      image: "../../assets/achievement-badges/gold-star.png",
      desc: "Granted for completing 75 tasks! 🌟",
    },
    // Completion of 75 study sessions
    {
      image: "../../assets/achievement-badges/gold-clock.png",
      desc: "Earned for completing 75 study sessions! ⏰",
    },
    // Completion of 100 tasks
    {
      image: "../../assets/achievement-badges/gold-book.png",
      desc: "Achieved by completing 100 tasks! 📘",
    },
    // Completion of 100 study sessions
    {
      image: "../../assets/achievement-badges/gold-brain.png",
      desc: "Awarded for completing 100 study sessions! 🧠",
    },
    // Completion of at least 100 study sessions and 200 tasks
    {
      image: "../../assets/achievement-badges/gold-penguin.png",
      desc: "Granted for completing at least 100 study sessions and 200 tasks! 🐧",
    },
  ];

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
