import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  title = ''
  text = ''

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const newPost = {
        title: this.title,
        text: this.text
      };
      this.text = this.title = ''
      this.onAdd.emit(newPost);

    }

  }
}
