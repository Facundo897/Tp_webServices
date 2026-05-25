import { NoTrailingSlashPathLocationStrategy } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiciosApi {

  constructor(private http: HttpClient){

  }

  //Punto A
  getPeliculas():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'bfdff2aca5msh30fdd0319c3618ep19c7f3jsnf6d7f78e7b80',
        'x-rapidapi-host':'imdb-top-100-movies.p.rapidapi.com',
        'Content-Type':'application/json'
      }),
    }
    return this.http.get('https://imdb-top-100-movies.p.rapidapi.com/', httpOptions)
  }

  //Punto B
  getMarcas():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'bfdff2aca5msh30fdd0319c3618ep19c7f3jsnf6d7f78e7b80',
        'x-rapidapi-host':'car-specs.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }
    return this.http.get('https://car-specs.p.rapidapi.com/v2/cars/makes', httpOptions)
  }

  getModelos(id:string):Observable<any>{

    let httpOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-key':'bfdff2aca5msh30fdd0319c3618ep19c7f3jsnf6d7f78e7b80',
        'x-rapidapi-host':'car-specs.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }

    return this.http.get('https://car-specs.p.rapidapi.com/v2/cars/makes/'+id+'/models',httpOptions)

  }


  //Punto C

  getMonedas():Observable<any>{
    
    let httpOptions ={
      headers: new HttpHeaders ({
        "apikey": "OlnIvhROkssEavmaFU0hn0XCGTMp8MBA"
      })
    }
    
    return this.http.get("https://api.apilayer.com/currency_data/list", httpOptions)
  }

  convertMoneda(to:string,from:string,amount:number):Observable<any>{

    let httpOptions ={
      headers: new HttpHeaders ({
        "apikey":"OlnIvhROkssEavmaFU0hn0XCGTMp8MBA"
      })
    }
    return this.http.get("https://api.apilayer.com/currency_data/convert?to=" + to + "&from=" + from + "&amount=" + amount, httpOptions)
  }



  //PUNTO D

  getLenguages():Observable<any>{

    let httpOptions = {
      headers: new HttpHeaders ({
        'x-rapidapi-key':'bfdff2aca5msh30fdd0319c3618ep19c7f3jsnf6d7f78e7b80',
        'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    }
    return this.http.get('https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages', httpOptions)
  }

  convertTextInAudio(text:string):Observable<Blob>{

    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'bfdff2aca5msh30fdd0319c3618ep19c7f3jsnf6d7f78e7b80',
        'x-rapidapi-host':'open-ai-text-to-speech1.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      responseType: 'blob' as 'blob'
    }

  
    let body={
      "model": 'tts-1',
      "input": text,
      "instructions":"tono normal",      
      "voice": 'alloy'
    }

    return this.http.post('https://open-ai-text-to-speech1.p.rapidapi.com/',body,httpOptions)
  }

  // PUNTO E 

  generateQr(texto:string):Observable<Blob>{

    let httpOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-key':'bfdff2aca5msh30fdd0319c3618ep19c7f3jsnf6d7f78e7b80',
        'x-rapidapi-host':'qr-code-generator20.p.rapidapi.com',
      }),
      responseType: 'blob' as 'blob'
    }
    return this.http.get(`https://qr-code-generator20.p.rapidapi.com/generatebasicimage?data=${texto}&size=500`, httpOptions)

  }

  
  
}
