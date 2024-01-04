import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {TutorialService} from "../../../server/tutorial.service";
import {Tutorial} from "../../../modelos/tutorial";

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.css'
})
export class AddTutorialComponent implements OnInit{

  constructor(private router : Router, private route : ActivatedRoute, private service : TutorialService) {}

  idTarea : number;
  tareaSelect : Tutorial;

  texto : string = "";
  fecha : string = "";

  ngOnInit() {
    this.idTarea = this.route.snapshot.params['id'];

    if ( this.idTarea != null){
      this.service.encontrarTarea(this.idTarea)
        .subscribe( tarea =>
          this.tareaSelect = tarea)
    }
  }

  deleteTarea () {
    this.service.deleteTarea(this.idTarea).subscribe(
      (response) => {
        this.router.navigate([''])
      },
      (error) => {
        alert("ERROR");
      }
    )
  }

  update (){
    this.service.updateTarea(this.tareaSelect, this.idTarea).subscribe(
      success => { this.router.navigate(['']) },
      error => { alert("ERROR"); }
    )
  }

  submit () {
    let tarea : Tutorial = {id : this.idTarea, texto: this.texto, fecha: this.fecha, recordatorio: true};
    this.service.submitTarea(tarea).subscribe(
      (response) => {
        this.router.navigate([''])
      },
      (error) => {
        alert("ERROR");
      }
    )
  }

}
