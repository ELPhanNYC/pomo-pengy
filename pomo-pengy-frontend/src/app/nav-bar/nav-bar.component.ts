import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  icons = [
    {link:"/", src:"../../assets/nav-icons/home-icon.png", title:"Home", class:"icon"},
    {link:"/pomo", src:"../../assets/nav-icons/timer-icon.png", title:"Pomodoro Timer", class:"icon right-icons"},
    // {link:"/notes", src:"../../assets/nav-icons/note-icon.png", title:"Notes", class:"icon right-icons"},
    {link:"/profile", src:"../../assets/nav-icons/user-icon.png", title:"Profile", class:"icon right-icons"},
  ]
}
