import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from '../curso/curso-list/curso-list.component';
import { CursoDetailComponent } from '../curso/curso-detail/curso-detail.component';

const routes: Routes = [
  {
    path: 'cursos',
    children: [
      { path: 'list', component: CursoListComponent},
      { path: ':id', component: CursoDetailComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }