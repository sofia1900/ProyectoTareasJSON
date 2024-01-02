import {Component, Input} from '@angular/core';
import {Tutorial} from "../../../modelos/tutorial";

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrl: './tutorial-details.component.css'
})
export class TutorialDetailsComponent {
  @Input() tarea? : Tutorial;
}
