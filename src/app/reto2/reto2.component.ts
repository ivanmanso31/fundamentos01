import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto2.component.html',
  styleUrl: './reto2.component.css'
})
export class Reto2Component {
  descripcion:string='';
  codigo:string='';
  costo:number=0;
  venta:number=0;
  stock:number=0;
  respuesta:string='';
  funcion():void{
  if(this.descripcion!=''&&this.codigo!=''&&this.costo>0&&this.venta>0&&this.stock>0){
    this.respuesta='Insertado';
  }else{
    this.respuesta='Datos incorrectos';
  }
  }
}
