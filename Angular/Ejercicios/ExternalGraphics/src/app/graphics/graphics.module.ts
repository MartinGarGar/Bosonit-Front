import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { LineComponent } from './pages/line/line.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    LineComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
