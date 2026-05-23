import { Component, OnInit, signal } from '@angular/core';
import { ServiciosApi } from '../../services/servicios-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-punto-b',
  imports: [CommonModule,FormsModule],
  templateUrl: './punto-b.html',
  styleUrl: './punto-b.css',
})
export class PuntoB implements OnInit{

  constructor(private serviceApi: ServiciosApi){

  }

  ngOnInit(){
    this.traerMarcas()
  }

  id:string= ""
  marcas = signal<Array<any>>([])
  modelos = signal<Array<any>>([])

  traerMarcas(){
    this.serviceApi.getMarcas().subscribe(
      (results:any)=>{
        this.marcas.set(results)
      },
      (errors:any)=>{
        console.log(errors)
      }
    )
  }

  mostrarModelos(id:string){
    this.serviceApi.getModelos(id).subscribe(
      (results:any)=>{
        this.modelos.set(results)
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
