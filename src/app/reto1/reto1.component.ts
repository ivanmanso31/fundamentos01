import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto1.component.html',
  styleUrl: './reto1.component.css'
})
export class Reto1Component {
email:string='';
contrasena:string='';
rcontrasena:string='';
respuesta:string='';
funcion():void{
if(this.email!=''&&this.contrasena!=''&&this.contrasena==this.rcontrasena){
  this.respuesta='Bienvenido';
}else{
  this.respuesta='Usuario o contraseña inválidos';
}
}
}
