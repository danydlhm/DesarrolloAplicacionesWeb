import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';

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

  private actas = [
  	new Acta(1, 'Lunes', 15, 'Enero', 1998, 'Esperanza se comio un moco, Carmena se durmio cual abuelita y Maestre enseño un pezon'),
  	new Acta(2, 'Martes', 16, 'Febrero', 1999, 'Esperanza se comio un moco, Carmena se durmio cual abuelita y Maestre enseño un pezon'),
  	new Acta(3, 'Miercoles', 17, 'Marzo', 2000, 'Esperanza se comio un moco, Carmena se durmio cual abuelita y Maestre enseño un pezon'),
  	new Acta(4, 'Jueves', 18, 'Abril', 2001, 'Esperanza se comio un moco, Carmena se durmio cual abuelita y Maestre enseño un pezon'),
  	new Acta(5, 'Viernes', 19, 'Mayo', 2002, 'Esperanza se comio un moco, Carmena se durmio cual abuelita y Maestre enseño un pezon'),
  	new Acta(6, 'Sabado', 20, 'Junio', 2003, 'Esperanza se comio un moco, Carmena se durmio cual abuelita y Maestre enseño un pezon'),
  	new Acta(7, 'Domingo', 21, 'Julio', 2004, 'Esperanza se comio un moco, Carmena se durmio cual abuelita y Maestre enseño un pezon')
  ];

  getActas() {
    return withObserver(this.actas);
  }

  getActa(id: number | string) {
    let acta = this.actas.filter(h => h.id === +id)[0]
    return withObserver(new Acta(acta.id, acta.diaSemana, acta.dia, acta.mes, acta.year, acta.contenido,));
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
