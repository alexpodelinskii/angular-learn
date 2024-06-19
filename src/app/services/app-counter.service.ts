import { LogService } from './log.service';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppCounterService {
    constructor(private logService: LogService) {

    }
    counter = 0
    increase() {
        this.counter++;
        this.logService.log('increase')
    }
    decrease() {
        this.counter--;
        this.logService.log('decrease')
    }
}