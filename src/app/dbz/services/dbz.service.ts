import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()


export class DbzService{


   private _personajes: Personaje[] =[

        {
          nombre:"Goku",
          poder:1000
        }, 
        {
          nombre:"Vegueta",
          poder:800
        }, 
        {
          nombre:"Trunks",
          poder:700
        }
       ];


       get persoonajes () : Personaje[]
       {
                  // Los puntos deben ir
           return [...this._personajes]
       }

    //Es necesario crear un contructor
    constructor(){

    }

    agregarPersonaje(personaje:Personaje)
  {
   
   this._personajes.push(personaje)

  }
    
    
}