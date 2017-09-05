import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TimeIntervalComponent } from "./app.timeinterval-detail";
import { StorageService} from './app.storage';
@NgModule({
  declarations: [
    AppComponent,
    TimeIntervalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
