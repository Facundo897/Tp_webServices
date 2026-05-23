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
      })
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


  
}
