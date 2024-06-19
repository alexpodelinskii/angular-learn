import { LocalCounterService } from './../services/local-counter.service';
import { AppCounterService1 } from './../services/app-counter.service1';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  providers: [LocalCounterService]
})
export class CounterComponent {
  constructor(public appCounterService: AppCounterService1,
    public appCounterServiceLocal: LocalCounterService
  ) { }
}
