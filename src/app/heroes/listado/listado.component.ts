import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})

export class ListadoComponent {


  heroes: string[] =['Spirdeman', 'Iroman','Thor', 'Serch'];

  heroeBorrado : String ='';

  borrarHeroe()
  {
    this.heroeBorrado = this.heroes.shift() || '';

    console.log(this.heroeBorrado);
    
  }

}
