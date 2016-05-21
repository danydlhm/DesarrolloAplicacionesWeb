import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';

export class Imagen{
    id?:number;
    name:string;
    foto:string;
    active:boolean = false;
}

const URL = 'carrousel/';

@Injectable()
export class CarrouselService {
    
    constructor(private http: Http) { }
  
  getImagenes() {
    return this.http.get(URL).map(
        response => response.json(),
    )
  }

  getImagen(id: number | string) {
    return this.http.get(URL+id)
        .map(response => response.json())
	       .catch(error => this.handleError(error));
  }

  removeImagen(imagen: Imagen){
    let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });  
	  
    return this.http.delete(URL + imagen.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  saveImagen(imagen: Imagen){
    let body = JSON.stringify(imagen);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  updateImagen(imagen: Imagen) {

    let body = JSON.stringify(imagen);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + imagen.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}