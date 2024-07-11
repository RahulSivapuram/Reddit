import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { HomecardbrowsecomComponent } from '../../homecardbrowsecom/homecardbrowsecom.component';
import { HomecardpostcommunityComponent } from '../../homecardpostcommunity/homecardpostcommunity.component';
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
