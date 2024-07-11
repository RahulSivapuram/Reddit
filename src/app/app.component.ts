import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule],
  providers:[HttpClient],
})
export class AppComponent{
  title = 'redditclone';

}