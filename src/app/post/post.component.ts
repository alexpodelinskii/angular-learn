import { Title } from '@angular/platform-browser';
import { Post } from './../app.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  @Input() post: Post

  constructor() {
    this.post = { title: '', text: '' };
  }

  ngOnInit() {
  }

}
