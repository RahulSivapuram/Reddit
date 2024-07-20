import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { HomecardbrowsecomComponent } from '../../shared/components/homecardbrowsecom/homecardbrowsecom.component';
import { HomecardpostcommunityComponent } from '../../shared/components/homecardpostcommunity/homecardpostcommunity.component';
import { HomeComponent } from '../../pages/home/home.component';
import { ViewpostComponent } from '../../pages/viewpost/viewpost.component';


@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    HomecardpostcommunityComponent,
    HomecardbrowsecomComponent,
    ViewpostComponent,
  ],
})
export class MainComponent {}
