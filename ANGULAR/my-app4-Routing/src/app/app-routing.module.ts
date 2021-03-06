import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    //i : identificano una propr dinamica da passare alla route, all'url
    {path: ':id/:nome', component: UserComponent}
  ]},

  {path: 'login', component: LoginComponent},

  {path: 'servers',
   //canActivate: [AuthGuardService], //QUESTA prop protegge la route servers
   //canActivateChild: [AuthGuardService],
  component: ServersComponent, children: [
    {path: ':id', component: ServerComponent, canActivate: [AuthGuardService]},
    {path: ':id/edit', component: EditServerComponent,  canActivate: [AuthGuardService]}

  ]},

  //NOt found. ATT: deve essere sempre inserito al fondo
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
