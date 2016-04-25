import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Imagen, CarrouselService} from './carrousel.service';


@Component({
    selector: 'turism-section',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/index/turismTemplate.html',
})

export class TurismComponent implements OnInit{

    imagenes: Imagen[];
    activo:number = -1;
    
    constructor(private router:Router, private service: CarrouselService) {}

    ngOnInit(){
      this.service.getImagenes().subscribe(
        imagenes => this.imagenes = imagenes,
        error => console.log(error)
      );
      if(this.imagenes.length > 0){
        this.imagenes[0].setActive(true);
        this.activo = 0;
      }
    }
    
    next(){
        this.imagenes[this.activo].setActive(false);
        this.activo = ((this.activo + 1) % (this.imagenes.length));
        this.imagenes[this.activo].setActive(true);
    }
    
    prev(){
        this.imagenes[this.activo].setActive(false);
        this.activo = ((this.activo - 1) % (this.imagenes.length));
        this.imagenes[this.activo].setActive(true);
    }

}