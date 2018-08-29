import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    NavbarComponent,
    HeadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
