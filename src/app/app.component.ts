import { AppCounterService } from './services/app-counter.service';
import { Component } from '@angular/core';
import { AppCounterService1 } from './services/app-counter.service1';
import { LocalCounterService } from './services/local-counter.service';

export interface Post {
  title: string,
  text: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [LocalCounterService]
})
export class AppComponent {
  constructor(public appCounterService: AppCounterService,
    public appCounterService1: AppCounterService1,
    public appCounterServiceLocal: LocalCounterService,

  ) { }
}
