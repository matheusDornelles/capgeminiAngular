import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { produtos } from './produtos';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  exports:[
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
