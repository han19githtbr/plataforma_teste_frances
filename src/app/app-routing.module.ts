import { AuthGuardGuard } from './guard/auth-guard.guard';
import { ContentComponent } from './components/pages/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { MembrosComponent } from './components/pages/membros/membros.component';
import { NotificationComponent } from './components/shared/notification/notification.component';
//import { MembrosDetailComponent } from './components/pages/membros-detail/membros-detail.component';
//import { TeamComponent } from './components/pages/team/team.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'membros', component: MembrosComponent, canActivate: [AuthGuardGuard] },
  {path: 'notifications', component: NotificationComponent},
  //{path: 'team', component: TeamComponent, canActivate: [AuthGuardGuard] },
  //{path: 'membro-detail/:id', component: MembrosDetailComponent, canActivate: [AuthGuardGuard] },
  {path: 'conteudo', component: ContentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
