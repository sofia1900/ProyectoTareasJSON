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
  encontrarTarea (id : number) : Observable<Tutorial> {
    let tutorial = this.http.get<Tutorial>(this.baseUrl+"/"+id);
    return tutorial
  }

  submitTarea (tarea : Tutorial){
    return this.http.post(this.baseUrl, tarea)
  }

  deleteTarea (id : number){
    return this.http.delete(this.baseUrl+"/"+id)
  }

  delete (){
    return this.http.delete(this.baseUrl)
  }

  updateTarea (tarea : Tutorial, id : number) {
    return this.http.put(this.baseUrl+"/"+id, tarea)
  }
}
