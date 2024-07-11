import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewpostComponent } from './pages/viewpost/viewpost.component';
import { CreatecommunityComponent } from './pages/createcommunity/createcommunity.component';
import { CreatepostComponent } from './pages/createpost/createpost.component';
import { MainComponent } from './layout/main/main.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'signin',pathMatch:'full'},
    { path: 'signin', component: AuthenticationPageComponent },
    { path: 'signup', component: AuthenticationPageComponent },
    {
      path: 'main',
      component: MainComponent,
      children: [
        {path:'home',component:HomeComponent},
        { path: 'view/:id', component: ViewpostComponent },
        { path: 'community/add', component: CreatecommunityComponent },
        { path: 'post/add', component: CreatepostComponent },
      ],
    },
  ];
