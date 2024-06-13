import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  achievement_badges = [
    {image: "../../assets/achievement-badges/bronze-plain.png"},
    {image: "../../assets/achievement-badges/bronze-lightning.png"},
    {image: "../../assets/achievement-badges/bronze-star.png"},
    {image: "../../assets/achievement-badges/bronze-clock.png"},
    {image: "../../assets/achievement-badges/bronze-book.png"},
    {image: "../../assets/achievement-badges/bronze-brain.png"},
    {image: "../../assets/achievement-badges/silver-plain.png"},
    {image: "../../assets/achievement-badges/silver-star.png"},
    {image: "../../assets/achievement-badges/silver-clock.png"},
    {image: "../../assets/achievement-badges/silver-book.png"},
    {image: "../../assets/achievement-badges/silver-brain.png"},
    {image: "../../assets/achievement-badges/gold-plain.png"},
    {image: "../../assets/achievement-badges/gold-lightning.png"},
    {image: "../../assets/achievement-badges/gold-star.png"},
    {image: "../../assets/achievement-badges/gold-clock.png"},
    {image: "../../assets/achievement-badges/gold-book.png"},
    {image: "../../assets/achievement-badges/gold-brain.png"}
  ]
}
