import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Propuesta, PropuestaService}   from './propuesta.service';
import {User, LoginService} from '../index/login.service';
import {Concejal, ConcejalService} from '../index/concejal.service';

@Component({
    template: `
    <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center " *ngIf="user">
          <h2>Nombre : "{{user.nombre}}"</h2>
          <img src="{{user.foto}}" alt="Imagen asociada a {{user.nombre}}" height="350" width="350">
            <div *ngIf="user.concejal">
                <h3> Cargo en el ayuntamiento : {{user.concejal.descripcion}}</h3>
                <button class="btn btn-primary" *ngIf="loginService.user && loginService.isAdmin" (click)="eliminarConcejal()">Eliminar Concejal</button>
            </div>
            <div *ngIf!="user.concejal">
                <div *ngIf="concejal">
                    <label>Cargo en el ayuntamiento: </label>
                    <input [(ngModel)]="concejal.descripcion" placeholder="cargoAyuntamiento"/>
                </div>
                <div *ngIf="concejal">
                    <label>Enlaces de contacto: </label>
                    <input [(ngModel)]="contacto" placeholder="Enlace de contacto"/>
                    <button class="btn btn-primary" (click)="addContacto()">Añadir contacto</button>
                </div>
                <button class="btn btn-primary" (click)="addConcejal()">Añadir Concejal</button>
            </div>
            <button class="btn btn-primary" (click)="gotoUsers()">Volver a Usuarios</button>
        </div>
    </div>
  `
})
export class ConcejalDetailComponent {

    user: User;
    concejal: Concejal;
    contacto: String;

    constructor(private router: Router, routeParams: RouteParams, private service: ConcejalService, private loginService: LoginService,private concejalService: ConcejalService) {
        let id = routeParams.get('id');
        loginService.getUser(id).subscribe(
            user => {this.user = user;
                    if(!user.concejal){
                        this.concejal = {name: user.nombre, urlFoto: user.foto, descripcion: '',
                        propuestasAprobadas: [], contactos: []};
                    }},
            error => console.error(error)
        );
    }

    gotoUsers() {
        this.router.navigate(['AdminConcejal'])
    }
    
    addContacto(){
        if (this.concejal.contactos.indexOf(this.contacto) === -1){
            this.concejal.contactos[this.concejal.contactos.length] = this.contacto;
            this.contacto = "";
        }
    }
    
    eliminarConcejal(){
        this.concejal = this.user.concejal;
        this.user.concejal = null;
        this.user.roles = ["ROLE_USER"];
        this.loginService.updateUser(this.user).subscribe(
                user => {this.service.removeConcejal(this.concejal).subscribe(
                            concejal => this.gotoUsers(),
                            error => console.error("Error al borrar un concejal"+error))
                        },
                error => console.error("Error al actualizar un usuario"+error)
        );
        
    }
    
    addConcejal(){
        if (!this.concejal.descripcion === ""){
            this.concejal.descripcion = "Concejal";
        };
        this.user.concejal = this.concejal;
        this.user.roles = ["ROLE_USER","ROLE_CONCEJAL"];
        this.loginService.updateUser(this.user).subscribe(
            user => this.gotoUsers(),
            error => console.error("Error al crear un nuevo concejal")
        );
    }
    
    
}