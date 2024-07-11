import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  API_URL:string="https://localhost:7244/api";

  constructor(private http:HttpClient) { }

  addSubReddit(data:any){
    return this.http.post(`${this.API_URL}/Post/subreddit`,data);
  }

  addPost(data:any){
    return this.http.post(`${this.API_URL}/Post/post`,data);
  }

  getSubReddits(){
    return this.http.get(`${this.API_URL}/Post/subreddits/all`);
  }

  getPosts(){
    return this.http.get(`${this.API_URL}/Post/posts/all`);
  }

  addComment(data:any){
    return this.http.post(`${this.API_URL}/Post/comment`,data);
  }

  getCommentsByPostId(postId:number){
    return this.http.get(`${this.API_URL}/Post/posts/${postId}/comments`);
  }

  getCommentsCount(postId:number){
    return this.getCommentsByPostId(postId);
  }
}
