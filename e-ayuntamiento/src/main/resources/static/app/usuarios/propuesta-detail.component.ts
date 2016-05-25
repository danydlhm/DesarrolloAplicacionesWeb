import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Propuesta, PropuestaService}   from './propuesta.service';
import {LoginService} from '../index/login.service';
import {ConcejalService} from '../index/concejal.service';

@Component({
    template: `
    <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center " *ngIf="propuesta">
          <h2>Propuesta : "{{propuesta.titulo}}"</h2>
          <img src="{{propuesta.imagen}}" alt="Imagen asociada a la propuesta" height="350" width="350">
            <div *ngIf="propuesta.concejal">
                <h3> Propuesta "Aprobada" por el Concejal : {{propuesta.concejal.name}}</h3>
            </div>
            <div *ngIf!="propuesta.aprobada">
                <h3> Propuesta "Sin Aprobar", faltan firmas</h3>
                <div *ngIf="loginService.user">
                    <button class="btn btn-primary" (click)="addP()">Unete</button>
                </div>
            </div>
          <div>
            <p>{{propuesta.contenido}}</p>
          </div>
          <h4> Creada por : "{{propuesta.creador.name}}"</h4>
          <h4> Apoyada por : <span *ngFor="#per of propuesta.firmantes,#i=index">{{per.name}} ,</span></h4>
            <button class="btn btn-primary" *ngIf="loginService.user && loginService.isConcejal" (click)="aprobarPropuesta()">Aprobar</button>
            <button class="btn btn-primary" *ngIf="loginService.user && loginService.isConcejal" (click)="removePropuesta()">Eliminar</button>
            <button class="btn btn-primary" *ngIf="loginService.user && loginService.isConcejal" (click)="editPropuesta()">Editar</button>
            <br>
            <button class="btn btn-primary" (click)="gotoPropuestas()">Volver a Propuestas</button>
        </div>
    </div>
  `
})
export class PropuestaDetailComponent {

    propuesta: Propuesta;

    constructor(private router: Router, routeParams: RouteParams, private service: PropuestaService, private loginService: LoginService,private concejalService: ConcejalService) {
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
        if(this.propuesta.firmantes.indexOf(this.loginService.user) === -1){
            this.propuesta.firmantes[this.propuesta.firmantes.length] = this.loginService.user;
            this.service.updatePropuesta(this.propuesta).subscribe(
                propuestas => {},
                error => console.log(error)
            );
        } 
    }
    
    actualizarPropuesta(concejal: Concejal){
        this.propuesta.aprobada = true;
        concejal.propuestasAprobadas[concejal.propuestasAprobadas.length] = this.propuesta;
        this.propuesta.concejal = concejal;
        this.concejalService.updateConcejal(concejal).subscribe(
            concejal => {this.propuesta.concejal = concejal;
                        this.service.updatePropuesta(this.propuesta).subscribe(
                            propuestas => {this.propuesta.concejal = concejal},
                            error => console.log(error)
                        );},
            error => console.error(error)
        );
    }
    aprobarPropuesta() {
        this.concejalService.getConcejal(this.loginService.user.concejal.id).subscribe(
            concejal => this.actualizarPropuesta(concejal),
            error => console.error("Error al obtener el concejal en la propuesta: "+error);
        );
        
        
    }
}