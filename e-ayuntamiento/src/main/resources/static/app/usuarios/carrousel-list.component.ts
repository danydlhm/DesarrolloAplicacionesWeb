import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Carrousel, CarrouselService}   from '../index/carrousel.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="row">
        <h2>Fotos del Carrousel</h2>
        <div class="col-md-4 col-sm-6 portfolio-item text-center " *ngFor="#img of carrousel">
            <div class="cajita">
                <a [routerLink]="['CarrouselEdit', {id: img.id}]" class="portfolio-link">
                    <hr>
                        <img src="{{img.foto}}" class="img-responsive img-rounded center-block" alt="foto de {{img.name}}">
                    <hr>
                    <div class="portfolio-caption">
                        <h5>{{img.name}}</h5>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <p class="text-center">
        <button class="btn btn-primary" (click)="newImagen()">Nueva Imagen</button>
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
export class CarrouselListComponent implements OnInit {

    carrousel: Carrousel[];

    constructor(private router:Router, private service: CarrouselService) {}

    ngOnInit(){
      this.service.getImagenes().subscribe(
        carrousel => this.carrousel = carrousel,
        error => console.log(error)
      );
    }
    
    newImagen() {
      this.router.navigate(['CarrouselNew']);
    }
    
    gotoIndex() {
      this.router.navigate(['ConcejalIndex']);
    }
}