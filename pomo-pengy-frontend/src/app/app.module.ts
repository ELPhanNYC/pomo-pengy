import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeDateComponent } from './time-date/time-date.component';
import { SessionButtonComponent } from './session-button/session-button.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ToDoComponent } from './to-do/to-do.component';
import { PomoPageComponent } from './pomo-page/pomo-page.component';
import { TimerComponent } from './timer/timer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { SpotifyIntegrationComponent } from './spotify-integration/spotify-integration.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { LoginRegisterButtonsComponent } from './login-register-buttons/login-register-buttons.component';
import { HeaderComponent } from './header/header.component';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { AboutButtonComponent } from './about-button/about-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeDateComponent,
    SessionButtonComponent,
    NavBarComponent,
    HomePageComponent,
    ToDoComponent,
    PomoPageComponent,
    TimerComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotesPageComponent,
    SpotifyIntegrationComponent,
    TextEditorComponent,
    LoginRegisterButtonsComponent,
    HeaderComponent,
    ProfilePageComponent,
    AchievementsComponent,
    StatisticsComponent,
    CarouselComponent,
    LogoutComponent,
    AboutComponent,
    AboutButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    MarkdownModule.forChild(),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
