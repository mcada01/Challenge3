import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CompNorrisComponent } from './comp-norris/comp-norris.component';
import { ServJokesService } from './serv-jokes.service';

@NgModule({
  declarations: [
    AppComponent,
    CompNorrisComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ServJokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
