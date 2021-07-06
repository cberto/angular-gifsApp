import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string= 'UyNQYQfX0knI5qMgApdAsscWL7EwJqGr';
  private _historial:string[]=[];
  //cambiar any por su tipo correspondiente
  public resultados:Gif[] = [];

  get historial(){

    return [...this._historial];
  }

  constructor(private http: HttpClient){}

  //insertar valoresres
  buscarGifs(query:string =''){

    query=query.trim().toLocaleLowerCase();

//Para no duplicar
    if(!this._historial.includes(query)){
 //insertar al inicio unshift
 this._historial.unshift(query);
 //cortar arreglo principal
 this._historial =this._historial.splice(0,10);
    }

  //  console.log(this._historial);
  //tipo generico
     this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=UyNQYQfX0knI5qMgApdAsscWL7EwJqGr&q=${query}&limit=10`)
     .subscribe((resp) => {
       console.log(resp.data);
       this.resultados=resp.data;

     });

     //suscripcion para la resolucion del get
  }
}
