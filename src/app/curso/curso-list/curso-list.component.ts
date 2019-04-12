import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoDetail } from '../curso-detail';
import { CursoService } from '../curso.service';

/**
 * The component for the list of cursos in the BookStore
 */
@Component({
    selector: 'list-curso',
    templateUrl: './curso-list.component.html', 
})
export class CursoListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param cursoService The curso's services provider
     */
    constructor(private cursoService: CursoService) { }
    
    curso_id : number;
    selectedCurso: CursoDetail;
    /**
     * The list of cursos
     */
    cursos: Curso[];

   onSelected(curso_id: number): void {
    this.curso_id = curso_id;
    this.selectedCurso = new CursoDetail();
    this.cursoService.getCursoDetail(curso_id).subscribe(o => this.selectedCurso = o);
  }

    /**
     * Asks the service to update the list of cursos
     */
    getCursos(): void {
        this.cursoService.getCursos().subscribe(cursos => {this.cursos = cursos});
    }

    /**
     * This will initialize the component by retrieving the list of cursos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getCursos();
    }
}