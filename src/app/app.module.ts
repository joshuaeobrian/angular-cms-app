import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SeoPanelComponent } from './seo-panel/seo-panel.component';
import { DisplayPanelComponent } from './display-panel/display-panel.component';
import { CreateAccountPanelComponent } from './create-account-panel/create-account-panel.component';
// import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SeoPanelComponent,
    DisplayPanelComponent,
    CreateAccountPanelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
