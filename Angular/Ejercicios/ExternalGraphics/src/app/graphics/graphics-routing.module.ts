import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { LineComponent } from './pages/line/line.component';

const routes: Routes = [


{
  path: '',
  children: [
    {path: 'bars', component: BarsComponent},
  {path: 'double-bars', component: DoubleBarsComponent},
  {path: 'line', component: LineComponent},
  {path: '**', redirectTo: 'bars'},
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
