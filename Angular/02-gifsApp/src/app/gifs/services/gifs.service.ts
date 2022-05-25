import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../Interfaces/gifsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'Ed6NRczBAl0zd6tINK7CA8mUxa6Sr8XC'
  private _historial: string [] = []

 
  public resultados: Gif[] = []

  get historial() {
    return [... this._historial]
  }

  constructor( private http : HttpClient) {}
  
  buscarGifs( query: string) {

    query = query.trim().toLocaleLowerCase();
    
    if (!this._historial.includes(query)) {
      
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,10)
    }

    //Forma común de fetch
    //const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=Ed6NRczBAl0zd6tINK7CA8mUxa6Sr8XC&q=dbz&limit=10')
    //const data = await resp.json()
    //console.log(data);

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=Ed6NRczBAl0zd6tINK7CA8mUxa6Sr8XC&q=${query}&limit=10`)
    .subscribe(( resp) => {
      console.log(resp.data);
      this.resultados = resp.data
      
    }) 
  }
}
