import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostserviceService } from '../../services/postservice.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input() communityName!: string;
  @Input() postTitle!: string;
  @Input() postContent!: string;
  @Input() userDetail!: string;
  @Input() postDate!: string;
  @Input() postId!: any;
  commentsCount:number=0;

  constructor(private postService:PostserviceService) {
  }
  

  ngOnInit(): void {
    this.postService.getCommentsCount(this.postId).subscribe((e:any)=>{
      this.commentsCount=e.data.length;
    });
    
  }
}
