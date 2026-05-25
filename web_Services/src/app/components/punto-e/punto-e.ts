import { Component } from '@angular/core';
import { ServiciosApi } from '../../services/servicios-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-punto-e',
  imports: [CommonModule,FormsModule],
  templateUrl: './punto-e.html',
  styleUrl: './punto-e.css',
})
export class PuntoE {

  constructor(private serviceApi:ServiciosApi,private sanitizer: DomSanitizer){
  }

  text:string=""
  qrResultadoUrl: SafeUrl | null = null;

  generarQr(){
    this.qrResultadoUrl=null
    this.serviceApi.generateQr(this.text).subscribe(
      (data: any) => {
        let reader = new FileReader();
        reader.onloadend = () => {
          let base64data = reader.result as string;
          
          // ¡AQUÍ ESTÁ EL TRUCO! Sanitizamos el Base64 para que Angular lo acepte en el HTML
          this.qrResultadoUrl = this.sanitizer.bypassSecurityTrustUrl(base64data);
          
          console.log("Base64 Sanitizado listo.");
        };
        reader.readAsDataURL(data);
      },
      (errors:any)=>{
        console.log(errors)
      }
    )
  }


}
