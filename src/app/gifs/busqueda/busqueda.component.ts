import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  //decordador, busca y asigna. !: asegura q el objeto no es null
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;


  constructor(private gifsService:GifsService){}

  buscar(){
    // console.log(this.txtBuscar);
  const valor = this.txtBuscar.nativeElement.value;
  // console.log(valor);

  if(valor.trim().length ===0){
    return;
  }

  this.gifsService.buscarGifs(valor);
  this.txtBuscar.nativeElement.value='';
  }

}
