import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { TutorialListComponent } from './componentes/tutorial/tutorial-list/tutorial-list.component';
import { TutorialDetailsComponent } from './componentes/tutorial/tutorial-details/tutorial-details.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TutorialComponent } from './componentes/tutorial/tutorial/tutorial.component';
import { AddTutorialComponent } from './componentes/tutorial/add-tutorial/add-tutorial.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const appRoutes : Routes = [
  {path : '', component:TutorialComponent},
  {path : 'nuevaTarea', component: AddTutorialComponent},
  {path : 'modifica/:id', component : AddTutorialComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TutorialListComponent,
    TutorialDetailsComponent,
    FooterComponent,
    TutorialComponent,
    AddTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
