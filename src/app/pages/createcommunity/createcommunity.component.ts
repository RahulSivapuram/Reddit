import { Component } from '@angular/core';
import { HomecardpostcommunityComponent } from '../../shared/components/homecardpostcommunity/homecardpostcommunity.component';
import { HomecardbrowsecomComponent } from '../../shared/components/homecardbrowsecom/homecardbrowsecom.component';
import { Router, RouterModule } from '@angular/router';
import { skip } from 'rxjs';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostserviceService } from '../../shared/services/postservice.service';

@Component({
  selector: 'app-createcommunity',
  standalone: true,
  templateUrl: './createcommunity.component.html',
  styleUrl: './createcommunity.component.css',
  imports: [
    HomecardpostcommunityComponent,
    HomecardbrowsecomComponent,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class CreatecommunityComponent {
  communityForm!: FormGroup;

  constructor(private postService:PostserviceService){

  }

  ngOnInit() {
    this.communityForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, Validators.required),
      createdAt: new FormControl(new Date()),
    });
  }

  post() {
    this.postService
      .addSubReddit(this.communityForm.value)
      .subscribe((e) => {
        console.log(e);
      });
  }
  discard() {
    this.communityForm.reset();
  }
}
