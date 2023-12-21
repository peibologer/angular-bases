import { Component } from "@angular/core";


@Component ({

  selector: "app-counter",
  template: `
<h3>{{counter}}</h3>
<button (click)="increaseBy(1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
  `

})
export class CounterComponent{
  public counter: number = 10;

  increaseBy(value: number):void {
    if (value == 1)
      this.counter = this.counter + 1;
    else if (value == -1)
      this.counter = this.counter -1;
  }
  resetCounter(): void{
    this.counter = 10;
  }

}
