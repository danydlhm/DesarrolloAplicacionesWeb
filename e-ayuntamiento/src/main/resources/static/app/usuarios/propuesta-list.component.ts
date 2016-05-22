import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Propuesta, PropuestaService}   from './propuesta.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item text-center" *ngFor="#propuesta of propuestas">
            <div class="cajita">
            <a [routerLink]="['PropuestaDetail', {id: propuesta.id}]" class="portfolio-link">
                <hr>
                <img src="{{propuesta.imagen}}" class="img-responsive img-rounded center-block" alt="foto descriptiva de la propuesta" height="350" width="350">
                <hr>
                <div class="portfolio-caption">
                    <h5>Propuesta nº{{propuesta.id}} :</h5>
                    <h6>{{propuesta.titulo}}</h6>
                </div>
            </a>
            </div>
        </div>
    </div>
    <p class="text-center">
        <button class="btn btn-primary" (click)="newPropuesta()">Nueva Propuesta</button>
        <button class="btn btn-primary" (click)="gotoIndex()">Atrás</button>
    </p>`,
    styles: [`
        .cajita{
            border-radius: 50px 10px 50px 10px;
            -moz-border-radius: 50px 10px 50px 10px;
            -webkit-border-radius: 50px 10px 50px 10px;
            border: 1.5px solid #191919;
            background: #d9f5f4;
        }
    `]
})
export class PropuestaListComponent implements OnInit {

    propuestas: Propuesta[];

    constructor(private router:Router, private service: PropuestaService) {}

    ngOnInit(){
      this.service.getPropuestas().subscribe(
        propuestas => this.propuestas = propuestas,
        error => console.log(error)
      );
    }

    newPropuesta() {
      this.router.navigate(['PropuestaNew']);
    }
    
    gotoIndex() {
      this.router.navigate(['ConcejalIndex']);
    }
}
