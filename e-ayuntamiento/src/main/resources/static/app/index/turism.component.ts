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
        imagenes => this.inicializarImagenes(imagenes),
        error => console.log(error)
      );
    }
    
    next(){
        this.imagenes[this.activo].active = false;
        this.activo = ((this.activo + 1) % (this.imagenes.length));
        this.imagenes[this.activo].active = true;
    }
    
    prev(){
        this.imagenes[this.activo].active = false;
        this.activo = ((this.activo + this.imagenes.length - 1) % (this.imagenes.length));
        console.log(this.activo);
        this.imagenes[this.activo].active = true;
    }
    
    gotoImg(i:number){
        this.imagenes[this.activo].active = false;
        this.activo = i;
        this.imagenes[this.activo].active = true;
    }
    
    inicializarImagenes(img: Imagen[]){
        this.imagenes = img;
        for(let i=0; i<this.imagenes.length; i++){
            this.imagenes[i].active = false;
        }
      if(this.imagenes.length > 0){
        this.imagenes[0].active = true;
        this.activo = 0;
      }
    }
}