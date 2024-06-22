import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PomoPageComponent } from './pomo-page/pomo-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"pomo", component:PomoPageComponent},
  {path:"notes", component:NotesPageComponent},
  {path:"register", component:RegisterPageComponent},
  {path:"login", component:LoginPageComponent},
  {path:"profile", component: ProfilePageComponent},
  {path: "about-pomo-pengy", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
