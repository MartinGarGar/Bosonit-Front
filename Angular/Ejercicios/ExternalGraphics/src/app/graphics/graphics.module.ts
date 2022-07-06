import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { RadarComponent } from './pages/radar/radar.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarsComponent,
    RadarComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
