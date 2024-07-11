import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../../shared/components/post/post.component';
import { HomecardpostcommunityComponent } from '../../homecardpostcommunity/homecardpostcommunity.component';
import { HomecardbrowsecomComponent } from '../../homecardbrowsecom/homecardbrowsecom.component';
import { CommonModule } from '@angular/common';
import { PostserviceService } from '../../shared/services/postservice.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PostComponent,
    HomecardpostcommunityComponent,
    HomecardbrowsecomComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  posts!: any[];
  constructor(private postService: PostserviceService) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getPosts().subscribe((e: any) => {
      this.posts = e.data;
    });
  }
  
}
