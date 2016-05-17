import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';

export class Propuesta {

  constructor(
    public id: number,
    public creador: string,
    public aprobada: boolean,
    public concejal: string,
    public firmantes: string[],
    public titulo: string,
    public contenido: string,
    public imagen: string) {}

}

@Injectable()
export class PropuestaService {

  private propuestas = [
  	new Propuesta(1, 'Manolo el del Bombo', false, null, ['Guti','Pique','Casillas','Ramos'], 'Quiero una Vuvuzela', 'Pues lo dicho quiero una vuvuzela, estoy harto del bombo. Quiero ser Manolo el Vuvuzelo.', '/img'),
  	new Propuesta(2, 'Rasputin', true, 'Manuela Carmena', ['Principe Felix Yusupov'], 'Echar al Zar', 'Pues lo dicho, vamos a juntar firmas para echar al Zar Nicolas II de Rusia. Que ya huele a naftalina.', '/img')
  ];

  getPropuestas() {
    return withObserver(this.propuestas);
  }

  getPropuesta(id: number | string) {
    let propuesta = this.propuestas.filter(h => h.id === +id)[0]
    return withObserver(new Propuesta(propuesta.id, propuesta.creador, propuesta.aprobada, propuesta.concejal, propuesta.firmantes, propuesta.titulo, propuesta.contenido, propuesta.imagen));
  }

  removePropuesta(propuesta: Propuesta){
    for(let i=0; i<this.propuestas.length; i++){
        if(this.propuestas[i].id === propuesta.id){
          this.propuestas.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  savePropuesta(propuesta: Propuesta){
    if(propuesta.id){
      let oldPropuesta = this.propuestas.filter(h => h.id === propuesta.id)[0];
      oldPropuesta.creador = propuesta.titulo;
      oldPropuesta.aprobada = propuesta.titulo;
      oldPropuesta.concejal = propuesta.titulo;
      oldPropuesta.firmantes = propuesta.titulo;
      oldPropuesta.titulo = propuesta.titulo;
      oldPropuesta.contenido = propuesta.titulo;
      oldPropuesta.imagen = propuesta.titulo;
    } else {
      propuesta.id = this.propuestas.length+1;
      this.propuestas.push(propuesta);
    }
    return withObserver(propuesta);
  }
}
