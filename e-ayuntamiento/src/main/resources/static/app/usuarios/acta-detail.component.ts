import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Acta, ActaService}   from '../index/acta.service';
import {LoginService} from '../index/login.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center" *ngIf="acta">
        <h2>Acta del Pleno del "{{acta.diaSemana}}" dia "{{acta.dia}}" del mes "{{acta.mes}}" del año {{acta.year}}</h2>
          <div>
            <p>{{acta.contenido}}</p>
          </div>
          <div>
            <div class="col-lg-8 col-lg-offset-2 text-center ">
                <button class="btn btn-primary" *ngIf="loginService.user && loginService.isAdmin" (click)="removeActa()">Eliminar</button>
                <button class="btn btn-primary" *ngIf="loginService.user && loginService.isAdmin" (click)="editActa()">Editar</button>
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

    constructor(private router: Router, routeParams: RouteParams, private service: ActaService, private loginService: LoginService) {
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
                _ => this.router.navigate(['AdminActas']),
                error => console.error(error)
            )
        }
    }

    editActa() {
        this.router.navigate(['AdminActaEdit', { id: this.acta.id }]);
    }

    gotoActas() {
        this.router.navigate(['AdminActas']);
    }
}
