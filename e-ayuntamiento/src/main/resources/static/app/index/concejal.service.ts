import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';
import {Propuesta} from '../usuario/propuesta.service'
import {Http, Response, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/Rx';

export class Concejal{
    id?:number;
    name:string;
    urlFoto:string;
    descripcion:string;
    propuestasAprobadas:Propuesta[];
    contactos:string[];

}

const URL = 'concejales/';

@Injectable()
export class ConcejalService {

  constructor(private http: Http) { }

  getConcejales() {
    return this.http.get(URL).map(
        response => response.json(),
    )
  }

  getConcejal(id: number | string) {
    return this.http.get(URL+id)
        .map(response => response.json())
	       .catch(error => this.handleError(error));
  }

  removeConcejal(concejal: Concejal){
    let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });  
	  
    return this.http.delete(URL + concejal.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  saveConcejal(concejal: Concejal){
    let body = JSON.stringify(concejal);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  updateConcejal(concejal: Concejal) {
    for (var prop of concejal.propuestasAprobadas){
        prop.concejal = null;
    }
    let body = JSON.stringify(concejal);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + concejal.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}