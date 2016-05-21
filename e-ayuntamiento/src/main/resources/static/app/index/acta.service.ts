import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';

export interface Acta {
    id?: number;
    diaSemana: string;
    dia: number;
    mes: string;
    year: number;
    contenido: string;
}

const URL = 'actas/';

@Injectable()
export class ActaService {
    
    constructor(private http: Http) { }

  getActas() {
    return this.http.get(URL).map(
        response => response.json(),
    )
  }

  getActa(id: number | string) {
    return this.http.get(URL+id)
        .map(response => response.json())
	       .catch(error => this.handleError(error));
  }

  removeActa(acta: Acta){
    let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });  
	  
    return this.http.delete(URL + acta.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  saveActa(acta: Acta){
    let body = JSON.stringify(acta);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  updateActa(acta: Acta) {

    let body = JSON.stringify(acta);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + acta.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}
