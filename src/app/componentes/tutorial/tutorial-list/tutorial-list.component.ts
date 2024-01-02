import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Tutorial} from "../../../modelos/tutorial";
import {TutorialService} from "../../../server/tutorial.service";

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrl: './tutorial-list.component.css'
})
export class TutorialListComponent {
  public tutorials$! : Observable<Tutorial[]>;
  public tareaSelect? : Tutorial;

  constructor(private tutorialService : TutorialService) {
    this.tutorials$ = this.tutorialService.mostrarLista()
  }

  selectTarea (tarea : Tutorial) {
    this.tareaSelect = tarea
  }
}
