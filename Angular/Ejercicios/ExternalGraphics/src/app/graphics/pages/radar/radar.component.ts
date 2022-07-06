import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-line',
  templateUrl: './radar.component.html',
  styles: [
  ]
})
export class RadarComponent implements OnInit {

  newYork : number [] = []
  santiago: number [] = []



  constructor(private _graphicsSvc : GraphicsService) {}

  ngOnInit(): void {

    
    this._graphicsSvc.getWheatherbyId('40.71,-74.00')
    .subscribe(
      data => {
        this.newYork.push(data.temp_c)
        this.newYork.push(data.feelslike_c)
        this.newYork.push(data.humid_pct)
        this.newYork.push(data.temp_f)
        this.newYork.push(data.cloudtotal_pct)
        this.newYork.push(data.windspd_kmh)
      }
    )

    this._graphicsSvc.getWheatherbyId('es.15702')
    .subscribe(
        data => {
          this.santiago.push(data.temp_c)
          this.santiago.push(data.feelslike_c)
          this.santiago.push(data.humid_pct)
          this.santiago.push(data.temp_f)
          this.santiago.push(data.cloudtotal_pct)
          this.santiago.push(data.windspd_kmh)
        }
      )


  }



  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'Temperatura C°', 'Sensación térmica C°' , 'humedad', 'Temperatura F°', 'Nublado%', 'Velocidad Viento' ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: this.newYork , label: 'New York' },
      { data: this.santiago, label: 'Santiago' }
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}


