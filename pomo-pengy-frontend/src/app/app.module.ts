import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MarkdownModule.forRoot(),
    MarkdownModule.forChild(),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
