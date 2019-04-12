import { OnInit, OnChanges, Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CursoService } from '../curso.service';

import { CursoDetail } from '../curso-detail';
import { Curso } from '../curso';
import { CursoHistoriaComponent } from '../curso-historia/curso-historia.component';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit, OnChanges {

  @Input() cursoDetail: CursoDetail;
  public isCollapsed = true;

  /**
  * Constructor for the component
  * @param route The route which helps to retrieves the id of the book to be shown
  * @param cursoService The curso's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService
  ) {
  }



  @ViewChild(CursoHistoriaComponent) historiaComponent: CursoHistoriaComponent;



  /**
  * El id del curso que viene en el path get .../cursos/curso_id
  */
  curso_id: number;
  /**
  * The method which obtains the curso whose details we want to show
  */
  getCursoDetail(): void {
    this.cursoService.getCursoDetail(this.curso_id)
      .subscribe(cursoDetail => {
        this.cursoDetail = cursoDetail
      });
  }

  

  ngOnChanges() {
    this.historiaComponent.isCollapsed  = true;
  }

}
