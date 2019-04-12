import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { CursoDetail } from './curso-detail';
import { Historia } from './historia';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const curso = "curso1.json";
const cursos = "cursos.json";
/**
* The service provider for everything related to Cursos
*/
@Injectable()
export class CursoService {

  /**
  * Constructor of the service
  * @param http The HttpClient - This is necessary in order to perform requests
  */
  constructor(private http: HttpClient) { }


  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(API_URL + cursos);
  }

  /**
  * Returns the Observable object with the details of an curso retrieved from the API
  * @returns The curso details
  */
  getCursoDetail(cursoId): Observable<CursoDetail> {
    console.log(API_URL + "curso-" + cursoId + ".json");
    return this.http.get<CursoDetail>(API_URL + "curso-" + cursoId + ".json");
  }


  getCursoHistorias(cursoId: number): Observable<Historia> {
    console.log(API_URL + "historia-" + cursoId + ".json");
    return this.http.get<Historia>(API_URL + "historia-" + cursoId + ".json");
  }

}