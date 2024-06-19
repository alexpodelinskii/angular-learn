import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppCounterService1 {
    counter = 0
    increase() {
        this.counter++;
    }
    decrease() {
        this.counter--;
    }
}