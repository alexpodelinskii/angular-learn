import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Post {
  title: string,
  text: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('Minsk', Validators.required)
      })
    })
  }
  submit() {
    if (this.form.valid) {
      let formData = { ...this.form.value };
      console.log(this.form);

    }


  }
}
