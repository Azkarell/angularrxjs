import { Component } from '@angular/core';
import { Observable }  from 'rxjs/Rx'
import {Subscription} from 'rxjs/Subscription'
import { TimeInterval } from "./app.timeinterval";
import { TimeIntervalComponent } from "./app.timeinterval-detail";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  intervals: TimeInterval[];
  time : number;
  selectedTimeinterval: TimeInterval;
  constructor(){
    this.intervals = [];
  }
  add(){
    var inter = new TimeInterval();
    inter.onStart();
    this.intervals.push(inter);
    console.log(this.intervals.length)
  }
  remove(){
    var i = this.intervals.indexOf(this.selectedTimeinterval,0);
    if( i > -1){
      this.intervals.splice(i,1);
    }
    this.selectedTimeinterval = null;
  }
  onSelect(interval: TimeInterval){
    this.selectedTimeinterval = interval;
  }
  onStart(){
    this.selectedTimeinterval.onStart();

  }
  onStop(){
    this.selectedTimeinterval.onEnd();
  }
  hasItems(): boolean{
    return this.intervals.length > 0;
  }
}

