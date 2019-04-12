import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoService } from './curso.service';
import { CursoHistoriaComponent } from './curso-historia/curso-historia.component';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule,NgbModule
  ],
  declarations: [CursoListComponent, CursoDetailComponent, CursoHistoriaComponent],
  providers: [CursoService],
  exports:[CursoListComponent]
})
export class CursoModule { }