import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Propuesta, PropuestaService}   from './propuesta.service';

@Component({
    template: `
  <h2>Propuesta : "{{propuesta.titulo}}"</h2>
  <img src="{{propuesta.imagen}}" alt="Imagen asociada a la propuesta" height="350" width="350"> 
  <div>
    <p>{{propuesta.contenido}}</p>
  </div>
  <h4> Creada por : "{{propuesta.creador}}"<h4>
  <p>
    <button (click)="removePropuesta()">Eliminar</button>
    <button (click)="editPropuesta()">Editar</button>
    <br>
    <button (click)="gotoPropuestas()">Volver a Propuestas</button>
  </p>`
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
                _ => this.router.navigate(['Propuestas']),
                error => console.error(error)
            )
        }
    }

    editPropuesta() {
        this.router.navigate(['PropuestaEdit', { id: this.propuesta.id }]);
    }

    gotoPropuestas() {
        this.router.navigate(['Propuestas']);
    }
}
