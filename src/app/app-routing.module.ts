import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TutorialComponent} from "./componentes/tutorial/tutorial/tutorial.component";
import {AddTutorialComponent} from "./componentes/tutorial/add-tutorial/add-tutorial.component";

const routes : Routes = [
  {path : '', component:TutorialComponent},
  {path : 'nuevaTarea', component: AddTutorialComponent},
  {path : 'modifica/:id', component : AddTutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
