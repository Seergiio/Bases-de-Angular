import { Component } from '@angular/core';

@Component ({
  
    selector: 'app-heroe',

    templateUrl: 'heroe.component.html'

}
)

export class HeroeComponent{

   title = 'Componet 2'

   nombre :string  ='Iroman';

   edad: number = 45;


   get NombreCapitalizado ():string
   {
       return this.nombre.toUpperCase();
   }


   obtenerNombre(): string
   {

    return this.nombre +' '+ this.edad

   }
  

   //Concepto de One Way Data 

   //Se cambia en todo donde se ah invocado

   cambiarNombre() : void
   {
       this.nombre ='Spirdermna';

   }

   cambiarEdad(): void {

    this.edad =30;
   }

}