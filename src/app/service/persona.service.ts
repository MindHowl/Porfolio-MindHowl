import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';
  constructor( private httpClient: HttpClient) { }

  public getPersona():Observable<persona>{
      return this.httpClient.get<persona>(this.URL +'traer/perfil')
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
  public update(id: number, persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar`, persona);
  }
  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }
}
