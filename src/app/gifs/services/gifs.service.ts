import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial:string[]=[];

  get historial(){

    return [...this._historial];
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
    }

    console.log(this._historial);
  }
}
