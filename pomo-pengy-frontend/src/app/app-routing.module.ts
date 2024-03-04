import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PomoPageComponent } from './pomo-page/pomo-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotesPageComponent } from './notes-page/notes-page.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"pomo", component:PomoPageComponent},
  {path:"notes", component:NotesPageComponent},
  {path:"register", component:RegisterPageComponent},
  {path:"login", component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
