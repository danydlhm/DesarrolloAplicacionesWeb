import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Propuesta, PropuestaService}   from './propuesta.service';

@Component({
    template: `
    <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center ">
          <h2>Propuesta : "{{propuesta.titulo}}"</h2>
          <img src="{{propuesta.imagen}}" alt="Imagen asociada a la propuesta" height="350" width="350">
            <div *ngIf="propuesta.aprobada">
                <h3> Propuesta "Aprobada" por el Concejal : {{propuesta.concejal}}</h3>
            </div>
            <div *ngIf!="propuesta.aprobada">
                <h3> Propuesta "Sin Aprobar", faltan firmas</h3>
                <button class="btn btn-primary" (click)="addP()">Unete</button>
            </div>
          <div>
            <p>{{propuesta.contenido}}</p>
          </div>
          <h4> Creada por : "{{propuesta.creador}}"</h4>
            <button class="btn btn-primary" (click)="removePropuesta()">Eliminar</button>
            <button class="btn btn-primary" (click)="editPropuesta()">Editar</button>
            <br>
            <button class="btn btn-primary" (click)="gotoPropuestas()">Volver a Propuestas</button>
        </div>
    </div>
  `
})
export class PropuestaDetailComponent {

    propuesta: Propuesta;

    constructor(private router: Router, routeParams: RouteParams, private service: PropuestaService) {
        let id = routeParams.get('id');
        service.getPropuesta(id).subscribe(
            propuesta => this.propuesta = propuesta,
            error => console.error(error)
        );
    }

    removePropuesta() {
        let okResponse = window.confirm("¿De verdad quieres eliminar esta propuesta?");
        if (okResponse) {
            this.service.removePropuesta(this.propuesta).subscribe(
                _ => this.router.navigate(['PropuestaList']),
                error => console.error(error)
            )
        }
    }

    editPropuesta() {
        this.router.navigate(['PropuestaEdit', { id: this.propuesta.id }]);
    }

    gotoPropuestas() {
        this.router.navigate(['PropuestaList']);
    }
    
    addP() {
        this.propuesta.firmantes[this.propuesta.firmantes.length +1] = "Usuario Anonimo";
    }
}