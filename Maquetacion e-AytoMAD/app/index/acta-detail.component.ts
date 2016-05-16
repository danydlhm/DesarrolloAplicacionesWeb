import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Acta, ActaService}   from './acta.service';

@Component({
    template: `
    <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center ">
          <h2>Acta del Pleno del "{{acta.diaSemana}}" dia "{{acta.dia}}" del mes "{{acta.mes}}" del año "{{acta.year}}"</h2>
          <div>
            <p>{{acta.contenido}}</p>
          </div>
          <div>
            <div class="col-lg-8 col-lg-offset-2 text-center ">
                <button class="btn btn-primary" (click)="removeActa()">Eliminar</button>
                <button class="btn btn-primary" (click)="editActa()">Editar</button>
            </div>
            <div class="col-lg-8 col-lg-offset-2 text-center ">
                <button class="btn btn-primary" (click)="gotoActas()">Volver a las Actas</button>
            </div>
          </div>
        </div>
    </div>
  `
})
export class ActaDetailComponent {

    acta: Acta;

    constructor(private router: Router, routeParams: RouteParams, private service: ActaService) {
        let id = routeParams.get('id');
        service.getActa(id).subscribe(
            acta => this.acta = acta,
            error => console.error(error)
        );
    }

    removeActa() {
        let okResponse = window.confirm("Do you want to remove this acta?");
        if (okResponse) {
            this.service.removeActa(this.acta).subscribe(
                _ => this.router.navigate(['Actas']),
                error => console.error(error)
            )
        }
    }

    editActa() {
        this.router.navigate(['ActaEdit', { id: this.acta.id }]);
    }

    gotoActas() {
        this.router.navigate(['Actas']);
    }
}
