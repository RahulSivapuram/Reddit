import { Component, OnInit } from '@angular/core';
import { HomecardpostcommunityComponent } from '../../shared/components/homecardpostcommunity/homecardpostcommunity.component';
import { HomecardbrowsecomComponent } from '../../shared/components/homecardbrowsecom/homecardbrowsecom.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostserviceService } from '../../shared/services/postservice.service';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-createpost',
  standalone: true,
  templateUrl: './createpost.component.html',
  styleUrl: './createpost.component.css',
  imports: [
    HomecardpostcommunityComponent,
    HomecardbrowsecomComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class CreatepostComponent implements OnInit {
  postForm!: FormGroup;
  redditsList: any[] = [];
  loggedInUserId!: number;

  constructor(
    private postService: PostserviceService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.fetchSubReddits();
    this.loggedInUserId = Number(this.accountService.getTokenDetails().Id);
  }

  initializeForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      url: new FormControl(null, [Validators.required]),
      subredditId: new FormControl(null, [Validators.required]),
      userId: new FormControl(null),
      body: new FormControl(''),
      createdAt: new FormControl(new Date().toISOString()),
      updatedAt: new FormControl(new Date().toISOString()),
    });
  }

  fetchSubReddits() {
    this.postService.getSubReddits().subscribe((e: any) => {
      this.redditsList = e.data;
    });
  }

  post() {
    this.postForm.controls['userId'].setValue(this.loggedInUserId);
    this.postForm.controls['subredditId'].setValue(
      Number(this.postForm.controls['subredditId'].value)
    );
    if (this.postForm.valid) {
      this.postService.addPost(this.postForm.value).subscribe((e: any) => {
        alert('added');
      });
    } else {
      alert('failed to add');
    }
  }
}
