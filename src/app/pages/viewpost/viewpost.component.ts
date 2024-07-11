import { Component, OnInit } from '@angular/core';
import { HomecardpostcommunityComponent } from '../../homecardpostcommunity/homecardpostcommunity.component';
import { HomecardbrowsecomComponent } from '../../homecardbrowsecom/homecardbrowsecom.component';
import { ActivatedRoute } from '@angular/router';
import { PostserviceService } from '../../shared/services/postservice.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../../shared/services/account.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewpost',
  standalone: true,
  templateUrl: './viewpost.component.html',
  styleUrl: './viewpost.component.css',
  imports: [HomecardpostcommunityComponent, HomecardbrowsecomComponent,ReactiveFormsModule,CommonModule],
})
export class ViewpostComponent implements OnInit {
  posts!:any[];
  comments!:any[];
  loggedInUserId!:number;
  commentForm!:FormGroup;
  constructor(
    private route: ActivatedRoute,
    private postService: PostserviceService,
    private accountService:AccountService
  ) {}

  ngOnInit(): void {
    this.loggedInUserId = this.accountService.getTokenDetails();
    this.getPostsById(Number(this.route.snapshot.params['id']))
    this.getComments(Number(this.route.snapshot.params['id']));
    this.initializeForm();
  }

  initializeForm(){
    this.commentForm = new FormGroup({
      userId:new FormControl(this.loggedInUserId),
      postId:new FormControl(Number(this.route.snapshot.params['id'])),
      body:new FormControl(null),
      createdAt:new FormControl(new Date().toISOString())
    })
  }

  submit(){
    if(this.commentForm.valid){
      this.postService.addComment(this.commentForm.value).subscribe((e)=>{
        console.log("added comment");
        this.commentForm.reset();
      })
    }
  }

  getPostsById(uid:number){
    this.postService.getPosts().subscribe((e:any)=>{
      this.posts=e.data.filter((e: { id: number; }) => e.id == uid);
      console.log(this.posts,"posts");
    })
  }

  getComments(postId:number){
    this.postService.getCommentsByPostId(postId).subscribe((e:any)=>{
      this.comments=e.data;
      console.log(this.comments,"comments");
    })
  }

}
