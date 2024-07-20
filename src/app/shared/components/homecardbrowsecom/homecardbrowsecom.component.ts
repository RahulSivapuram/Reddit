import { Component } from '@angular/core';
import { PostserviceService } from '../../services/postservice.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homecardbrowsecom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homecardbrowsecom.component.html',
  styleUrl: './homecardbrowsecom.component.css'
})
export class HomecardbrowsecomComponent {
  communities!:any;

  constructor(private postService:PostserviceService){
  }

  ngOnInit():void{
    this.getCommunities();
  }

  getCommunities(){
    this.postService.getSubReddits().subscribe((e:any)=>{
      this.communities = e.data;
    })
  }
}
