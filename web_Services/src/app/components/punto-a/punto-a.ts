import { Component, OnInit, signal} from '@angular/core';
import { ServiciosApi } from '../../services/servicios-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto-a',
  imports: [CommonModule],
  templateUrl: './punto-a.html',
  styleUrl: './punto-a.css',
})
export class PuntoA implements OnInit{

  constructor(private serviceApi: ServiciosApi){
  }

  ngOnInit() {  //asegura que primero cargue el componente
    this.traerPeliculas();
  }

  peliculas = signal<Array<any>>([])

  
  traerPeliculas(){
    this.serviceApi.getPeliculas().subscribe(
      (result:any)=>{
        this.peliculas.set(result);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }


}
