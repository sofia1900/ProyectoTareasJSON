import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TutorialService} from "../../../server/tutorial.service";
import {Tutorial} from "../../../modelos/tutorial";

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.css'
})
export class AddTutorialComponent implements OnInit{

  constructor(private route : ActivatedRoute, private service : TutorialService) {}

  idTarea : number;
  tareaSelect : Tutorial;
  ngOnInit() {
    this.idTarea = this.route.snapshot.params['id'];

    this.service.encontrarTarea(this.idTarea)
        .subscribe( tarea =>
        this.tareaSelect = tarea)
  }

}
