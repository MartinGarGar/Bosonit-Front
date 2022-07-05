import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { GraphicsService } from '../../services/graphics.service';
import { Person } from '../../interfaces/person.interface';
import { MalesCount } from '../../interfaces/malesCount.interface';
import { Data } from '../../interfaces/data.interface';
import { Wheather } from '../../interfaces/wheather.interface';



@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styles: [
  ]
})
export class BarsComponent implements OnInit  {

  maleAlive: Person[] = []
  maleDead: Person[] = []
  maleUnkonw: Person[] = []
  femaleAlive: Person[] = []
  femaleDead: Person[] = []
  femaleUnkonw: Person[] = []

  males : number[] = []
  females : number[] = []
  

  femalesAliveNumber!: number 
  femalesDeadNumber!: number 
  femalesUnknownNumber!: number 


  newYork : number [] = []
  santiago: number [] = []

  

  constructor(private _graphicsSvc : GraphicsService) {

  }



  ngOnInit(): void {
  

    this._graphicsSvc.getWheatherbyId('40.71,-74.00')
    .subscribe(
      data => {
        this.newYork.push(data.temp_c)
        this.newYork.push(data.feelslike_c)
        this.newYork.push(data.humid_pct)
      }
    )

    this._graphicsSvc.getWheatherbyId('es.15702')
    .subscribe(
        data => {
          this.santiago.push(data.temp_c)
          this.santiago.push(data.feelslike_c)
          this.santiago.push(data.humid_pct)
        }
      )
  }



  show() {
    console.log(this.barChartData);
    
  }
  
 
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      }
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['Temperatura', 'Sensación térmica' , 'humedad'],
    datasets: [
      { data:  this.newYork, label: 'Nueva York'  },
     { data: this.santiago , label: 'Santiago'  }
    ],
  };

}

