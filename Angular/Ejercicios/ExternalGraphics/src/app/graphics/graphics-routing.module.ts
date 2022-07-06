import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { RadarComponent } from './pages/radar/radar.component';

const routes: Routes = [


{
  path: '',
  children: [
    {path: 'bars', component: BarsComponent},
  {path: 'radar', component: RadarComponent},
  {path: '**', redirectTo: 'bars'},
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
