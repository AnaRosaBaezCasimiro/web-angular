import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  // standalone: true,
  templateUrl: './counter-page.component.html'
})
export class CounterPageComponent {
    counter = 10;
    counterSignal = signal(10);



  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
    
  }  


  resertCounter() {
    this.counter = 10;
    this.counterSignal.set(0)
  }
}
