import { Component, OnInit, signal } from '@angular/core';
import { ServiciosApi } from '../../services/servicios-api';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto-d',
  imports: [CommonModule,FormsModule],
  templateUrl: './punto-d.html',
  styleUrl: './punto-d.css',
})
export class PuntoD implements OnInit{
  
  audioUrl: any = null;
  text:string = ""
  lenguajes= signal<Array<any>>([])

  constructor(private serviceApis: ServiciosApi,
              private sanitizer: DomSanitizer  //herramienta de seguridad
  ){
  }

  ngOnInit(){
    this.traerLenguajes()

  }

  traerLenguajes(){
    this.serviceApis.getLenguages().subscribe(
      (results:any)=>{
        this.lenguajes.set(results)
      },
      (errors:any)=>{
        console.log(errors)
      }
    )
  }
  
  convertirTexto(){
    this.audioUrl = null;
    this.serviceApis.convertTextInAudio(this.text).subscribe(
      data => {
        console.log(data)
        let blobUrl = URL.createObjectURL(data) // Lo convertimos en una URL temporal
        //  Le damos el "visto bueno" de seguridad para que Angular deje usarlo en el HTML
        this.audioUrl = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
