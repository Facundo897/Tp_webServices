import { Component, OnInit, signal } from '@angular/core';
import { ServiciosApi } from '../../services/servicios-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto-c',
  imports: [CommonModule,FormsModule],
  templateUrl: './punto-c.html',
  styleUrl: './punto-c.css',
})
export class PuntoC implements OnInit {

  constructor(private serviceApi: ServiciosApi){

  }

  ngOnInit(){
    this.traerMonerdas()
  }

  monedas = signal<Array<any>>([])
  to:string=""
  from:string=""
  amount:number= 0
  resultado = signal<number>(0);

  
  traerMonerdas(){
    this.serviceApi.getMonedas().subscribe(
      (result:any)=>{
        this.monedas.set(result.currencies)
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

  convertirMonto(){
    this.serviceApi.convertMoneda(this.to,this.from,this.amount).subscribe(
      (result:any)=>{
        this.resultado.set(result.result);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
