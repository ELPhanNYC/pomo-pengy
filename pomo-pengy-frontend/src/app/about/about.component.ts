import { Component, OnDestroy, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/assets/animations/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [fadeInAnimation],
})
export class AboutComponent implements OnInit, OnDestroy{

  ngOnInit() {
    document.body.classList.add('about-body');
  }

  ngOnDestroy() {
    document.body.classList.remove('about-body');
  }

}
