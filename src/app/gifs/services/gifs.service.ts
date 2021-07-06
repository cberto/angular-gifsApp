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

  constructor(private http: HttpClient){

//Cargar de localStorage

this._historial= JSON.parse(localStorage.getItem('historial')!) || [];

//cargar los ultimos resultados
this.resultados= JSON.parse(localStorage.getItem('resultados')!) || [];

//Una forma de hacerlo
// estricto !
// if(localStorage.getItem('historial')){
//   this._historial = JSON.parse(localStorage.getItem('historial')!) ;
// }
  }

  //insertar valoresres
  buscarGifs(query:string =''){

    query=query.trim().toLocaleLowerCase();

//Para no duplicar
    if(!this._historial.includes(query)){
 //insertar al inicio unshift
 this._historial.unshift(query);
 //cortar arreglo principal
 this._historial =this._historial.splice(0,10);

 //Grabar en el LocalStorage, lo manda como string
 localStorage.setItem('historial', JSON.stringify(this._historial));
    }

  //  console.log(this._historial);
  //tipo generico
     this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=UyNQYQfX0knI5qMgApdAsscWL7EwJqGr&q=${query}&limit=10`)
     .subscribe((resp) => {
       console.log(resp.data);
       this.resultados=resp.data;
       localStorage.setItem('resultados', JSON.stringify(this.resultados));
     });

     //suscripcion para la resolucion del get
  }
}
