import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';

export class Imagen{
    private id:number;
    private name:string;
    private urlFoto:string;
    private active:boolean;
    
    constructor (id:number,name:string,urlFoto:string){
        this.id = id;
        this.name = name;
        this.urlFoto = urlFoto;
        this.active = false;
    }
    
    getName(){
        return this.name;
    }
    
    getUrl(){
        return this.urlFoto;
    }
    
    getActive(){
        return this.active;
    }
    
    setActive(active:boolean){
        this.active = active;
    }

}

@Injectable()
export class CarrouselService {

  private imagenes = [
    new Imagen (1,'Atocha','img/Turismo/Atocha.jpg'),
    new Imagen (2,'Gran Via','img/Turismo/GranVia.jpg'),
    new Imagen (3,'Palacio Real','img/Turismo/PalacioReal.jpg'),
    new Imagen (4,'Plaza De España','img/Turismo/PlazaDeEspa%C3%B1a.jpg'),
    new Imagen (5,'Plaza Mayor','img/Turismo/PlazaMayor.jpg'),
    new Imagen (6,'Puerta Del Sol','img/Turismo/PuertaDelSol.jpg'),
    new Imagen (7,'Templo De Debod','img/Turismo/TemploDeDebod.JPG'),
    new Imagen (8,'El Prado','img/Turismo/ElPrado.jpg'),
    new Imagen (9,'El Retiro','img/Turismo/ElRetiro.jpg'),
    new Imagen (10,'Las Ventas','img/Turismo/LasVentas.jpg'),
    new Imagen (11,'Palacio de Cristal','img/Turismo/PalacioCristal.jpg'),
    new Imagen (12,'Puerta de Alcala','img/Turismo/PuertaAlcala.jpg'),
    new Imagen (13,'Torres Quio','img/Turismo/TorresQuio.jpg'),
    new Imagen (14,'Campo del moro','img/Turismo/CampodelMoro.jpg'),
    ];

  getImagenes() {
    return withObserver(this.imagenes);
  }

  getImagen(id: number | string) {
    let img = this.imagenes.filter(h => h.id === +id)[0]
    return withObserver(new Imagen(img.id, img.name, img.urlFoto));
  }

  removeImagen(imagen: Imagen){
    for(let i=0; i<this.imagenes.length; i++){
        if(this.imagenes[i].id === imagen.id){
          this.imagenes.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveConcejal(imagen: Imagen){
    if(imagen.id){
      let oldimagen = this.imagenes.filter(h => h.id === imagen.id)[0];
      oldimagen.name = imagen.name;
      oldimagen.urlFoto = imagen.urlFoto;
    } else {
      cimagen.id = this.imagenes.length+1;
      this.concejales.push(imagen);
    }
    return withObserver(imagen);
  }
}
