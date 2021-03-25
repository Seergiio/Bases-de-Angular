import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent  {


  // El padre nos evia informacion
  @Input  ('data') nuevo:Personaje = {
    nombre:'',
    poder:0
  }

  

 
  // @Output  () nuevoPersonaje : EventEmitter<
  // Personaje> = new EventEmitter <Personaje>(); 



  constructor(private dbzservice:DbzService)
  {
  

  }

  Agregar()
  {
      if(this.nuevo.nombre.trim().length === 0)
      {
        return;
      }
      // this.nuevoPersonaje.emit(this.nuevo)
      this.dbzservice.agregarPersonaje(this.nuevo);
      
      this.nuevo ={
        nombre:'',
        poder:0
      }
  
  }

}
