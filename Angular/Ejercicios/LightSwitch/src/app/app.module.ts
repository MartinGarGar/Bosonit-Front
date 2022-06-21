import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrafficLightComponent } from './TrafficLight/TrafficLight.component';
import { ControllerComponent } from './ControllerComponent/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
