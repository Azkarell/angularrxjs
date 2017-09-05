import { Component, Input } from "@angular/core";
import { TimeInterval } from "./app.timeinterval";
@Component({
    selector: 'time-interval-detail',
    templateUrl: './app.timeinterval-detail.html',
    styleUrls: ['./app.timeinterval-detail.css']
})

export class TimeIntervalComponent{
    @Input("interval") timeInterval : TimeInterval;

}