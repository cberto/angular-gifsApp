import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  //decordador, busca y asigna. !: asegura q el objeto no es null
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar(){
    // console.log(this.txtBuscar);
  const valor = this.txtBuscar.nativeElement.value;
  console.log(valor);
  this.txtBuscar.nativeElement.value='';
  }

}
