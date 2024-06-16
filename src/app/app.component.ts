import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Title1',
      text: `fasldkjfsdl;jfl;sdjfl;sdj`
    },
    {
      title: 'Title2',
      text: `as;jfl;sdjfl;sdj`
    },
    {
      title: 'Title3',
      text: `3333333333333333333333333`
    }
  ]
  addPost(post: Post) {
    this.posts.push(post)
  }
}
