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
  buscarGifs(query:string){
    //insertar al inicio unshift
    this._historial.unshift(query);
    console.log(this._historial);
  }
}
