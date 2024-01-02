import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { TutorialListComponent } from './componentes/tutorial/tutorial-list/tutorial-list.component';
import { TutorialDetailsComponent } from './componentes/tutorial/tutorial-details/tutorial-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TutorialListComponent,
    TutorialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
