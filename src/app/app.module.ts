import { NotafiscalService } from './notafiscal.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotafiscalListaComponent } from './notafiscal/notafiscal-lista/notafiscal-lista.component';
import { NotafiscalFormComponent } from './notafiscal/notafiscal-form/notafiscal-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NotafiscalListaComponent,
    NotafiscalFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [NotafiscalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
