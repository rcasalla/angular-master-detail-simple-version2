import { Component, OnInit, Input } from '@angular/core';
import { CursoService } from '../curso.service';
import { Historia } from '../historia';

@Component({
  selector: 'curso-historia',
  templateUrl: './curso-historia.component.html',
  styleUrls: ['./curso-historia.component.css']
})
export class CursoHistoriaComponent implements OnInit {

  constructor(private cursoService: CursoService) { }


  @Input() idcurso: number;
  isCollapsed: boolean = true;
  
  historia: Historia;

  

  getHistorias(idcurso: number): void {
    console.log("getHistorias " + idcurso);
    this.cursoService.getCursoHistorias(idcurso)
      .subscribe(h => {
        this.historia = h
      });
  }

  getCursoHistoria(): void {
    console.log("getCursoHistoria :" + this.idcurso);
    this.getHistorias(this.idcurso);
    this.togglehistorias();
  }

  togglehistorias(): void {

    this.isCollapsed = !this.isCollapsed;
  }
  /**
  * The method which initializes the component.
  * We need to create the curso so it is never considered as undefined
  */
  ngOnInit() {
     if (this.historia == undefined)
     this.historia = new Historia();
    this.isCollapsed  = true;
  }
}