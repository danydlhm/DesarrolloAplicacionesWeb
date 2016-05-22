import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';
import {Http, Response, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/Rx';

export class Noticia {
    id?: number;
    title: string;
    subtitle: string;
    cuerpo: string;
    url: string;
}

const URL = 'noticias/';

@Injectable()
export class NoticiaService {

  constructor(private http: Http) { }

  getNoticias() {
    return this.http.get(URL).map(
        response => response.json(),
    )
  }

  getNoticia(id: number | string) {
    return this.http.get(URL+id)
        .map(response => response.json())
	       .catch(error => this.handleError(error));
  }

  removeNoticia(noticia: Noticia){
    let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });  
	  
    return this.http.delete(URL + noticia.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  saveNoticia(noticia: Noticia){
    let body = JSON.stringify(noticia);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  updateNoticia(noticia: Noticia) {

    let body = JSON.stringify(noticia);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + noticia.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}