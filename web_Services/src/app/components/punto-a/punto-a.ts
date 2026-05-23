import { Component} from '@angular/core';
import { ServiciosApi } from '../../services/servicios-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto-a',
  imports: [CommonModule],
  templateUrl: './punto-a.html',
  styleUrl: './punto-a.css',
})
export class PuntoA{

  constructor(private serviceApi: ServiciosApi){
    this.traerPeliculas();
  }

  peliculas: Array<any> = []

  
  traerPeliculas(){
    this.serviceApi.getPeliculas().subscribe(
      (result:any)=>{
        this.peliculas = result
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }


}
