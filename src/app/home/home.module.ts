import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { TablaComponent } from './tabla/tabla.component';
import { SubtablaComponent } from './subtabla/subtabla.component';
import {InicioRoutingModule} from './home-routing.module';
import {FormsModule} from '@angular/forms';
import {MatTableModule,MatInputModule} from '@angular/material';

@NgModule({
  declarations: [InicioComponent, TablaComponent, SubtablaComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatTableModule,
    FormsModule,
    MatInputModule
  ]
})
export class HomeModule { }
