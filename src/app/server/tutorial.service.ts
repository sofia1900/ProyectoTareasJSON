import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tutorial} from "../modelos/tutorial";

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private baseUrl = 'http://localhost:5000/tareas';
  constructor(private http : HttpClient) { }
  mostrarLista () : Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(this.baseUrl)
  }

}
