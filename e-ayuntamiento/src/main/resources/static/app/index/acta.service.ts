import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';

export class Acta {

  constructor(
    public id: number,
    public diaSemana: string,
    public dia: number,
    public mes: string,
    public year: number,
    public contenido: string) {}

}

@Injectable()
export class ActaService {
    
    constructor(private http: Http) { }

  getActas() {
    let url = 'https://localhost:8443/actas/';
    return this.http.get(url).map(
        response => response.json(),
    )
  }

  getActa(id: number | string) {
    let url = 'https://localhost:8443/actas/1/';
    return this.http.get(url).map(
        response => response.json(),
    );
  }

  removeActa(acta: Acta){
    for(let i=0; i<this.actas.length; i++){
        if(this.actas[i].id === acta.id){
          this.actas.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveActa(acta: Acta){
    if(book.id){
      let oldActa = this.actas.filter(h => h.id === acta.id)[0];
      oldActa.diaSemana = acta.diaSemana;
      oldActa.dia = acta.dia;
      oldActa.mes = acta.mes;
      oldActa.year = acta.year;
      oldActa.contenido = acta.contenido;
    } else {
      acta.id = this.actas.length+1;
      this.actas.push(acta);
    }
    return withObserver(acta);
  }
}
