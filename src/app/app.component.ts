import { Component } from '@angular/core';
import { Subscription,interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  maxSecond = 20;
  currentSecond = 0;
  timer: Subscription;
  constructor() {
    this.currentSecond = this.maxSecond;
  }

  start() {
    this.timer = interval(1000).subscribe(()=>{
      this.currentSecond--;
    });
  }
  stop() {
    // clearInterval(this.timer);
    this.timer.unsubscribe();
  }
  restart() {
    this.currentSecond = this.maxSecond;
      this.timer.unsubscribe();
  }
}
