import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../Interfaces/gifsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'Ed6NRczBAl0zd6tINK7CA8mUxa6Sr8XC'
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs'
  private _historial: string [] = []

 
  public resultados: Gif[] = []

  get historial() {
    return [... this._historial]
  }

  constructor( private http : HttpClient) {


     this._historial = JSON.parse(localStorage.getItem('historial')!) || []
     this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []


  }
  
  buscarGifs( query: string) {

    query = query.trim().toLocaleLowerCase();
    
    if (!this._historial.includes(query)) {
      
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,10)

      localStorage.setItem('historial' , JSON.stringify(this._historial))
    }

    //Forma común de fetch
    //const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=Ed6NRczBAl0zd6tINK7CA8mUxa6Sr8XC&q=dbz&limit=10')
    //const data = await resp.json()
    //console.log(data);

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('q',query)

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
    .subscribe(( resp) => {
      console.log(resp.data);
      this.resultados = resp.data

      localStorage.setItem('resultados', JSON.stringify(this.resultados))
      
    }) 
  }
}
