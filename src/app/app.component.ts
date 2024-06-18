import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string,
  text: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  e: number = Math.E
  str: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. '
  obj = {
    a: 1,
    b: 2,
    c: 'abc'
  }
  search = ''
  searchField: 'title' | 'text' = 'title'
  posts: Post[] = [
    { title: 'Title1', text: 'text1', },
    { title: 'Title2', text: 'text2', },
    { title: 'Title3', text: 'text3', },
    { title: 'Title4', text: 'text4', }
  ]
  numberPost = 1;
  addPost() {
    this.posts.unshift({
      title: 'newTitle' + this.numberPost,
      text: 'newtext' + this.numberPost++
    })
  }

  P: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Resolved')
    }, 4000)
  })

  date: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })
}
