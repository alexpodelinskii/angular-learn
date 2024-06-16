
import { Post } from './../app.component';
import { Component, ContentChild, ElementRef, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  @Input({ required: true })
  post!: Post;

  @ContentChild('info', { static: true })
  infoRef!: ElementRef | null;



  ngOnInit() {
    console.log(111);

    console.log(this.infoRef?.nativeElement);

  }

}
