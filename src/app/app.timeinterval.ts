import { Observable } from "rxjs/Rx";
import { Subscription } from "rxjs/Subscription";




export class TimeInterval {
    dateStart : number;
    dateEnd : number;
    isActive : boolean;
    obs : Observable<number>;
    subscriber : any;
    time: number;
    name: string;
    onStart(){
      this.dateStart = Date.now();
      this.isActive = true;
      this.obs = Observable.interval(1000);
      this.subscriber = this.obs.subscribe(val => {
        this.time = Date.now();

      });
  
    }
  
    onEnd(){
      this.dateEnd = Date.now();
      this.isActive = false;
      this.subscriber.unsubscribe();
    }

    toggle(){
        if(this.isActive){
            this.onEnd();
        } else {
            this.onStart();
        }
    }
    
  }