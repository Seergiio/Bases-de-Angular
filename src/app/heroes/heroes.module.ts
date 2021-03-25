import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from "@angular/common";

@NgModule({
    
    //Componentes que contenga este modulo, es un arrglo
    declarations: [
        ListadoComponent,
        HeroeComponent
    ],

    //Componentes, servicios, etc, que van a ser visibles afuera de este modulo, como cosas publicas
    exports: [
        ListadoComponent


    ],

    //
    imports:[

        //Sirve para las directirvas
        CommonModule

    ]
})

export class HeroesModule{


}