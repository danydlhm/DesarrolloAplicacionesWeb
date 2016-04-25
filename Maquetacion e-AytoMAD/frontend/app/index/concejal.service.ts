import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';

export class Concejal{
    private id:number;
    private name:string;
    private urlFoto:string;
    private contacto:Array<string>;
    private descripcion:string;
    
    constructor (id:numbername:string,urlFoto:string,contactos:Array<string>,desc:string){
        this.id = id;
        this.name = name;
        this.urlFoto = urlFoto;
        this.contacto = contactos;
        this.descripcion = desc;
    }
    constructor (id:number,name:string,urlFoto:string){
        this.id = id;
        this.name = name;
        this.urlFoto = urlFoto;
        this.contacto = new Array<string>;
        this.descripcion = "";
    }
    
    getName(){
        return this.name;
    }
    
    getUrl(){
        return this.urlFoto;
    }
    
    getContactos(){
        return this.contacto;
    }
    
    getDesc(){
        return this.descripcion;
    }
    
}

@Injectable()
export class ConcejalService {

  private concejales = [
    new Concejal(1,'Marta Higueras','img/team/Marta%20c%C3%ADrculo.png',['http://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/El-Pleno/Composicion/Corporacion-actual/Grupo-Municipal-Ahora-Madrid/Marta-Maria-Higueras-Garrobo?vgnextfmt=default&vgnextoid=1ddd0001dd49d410VgnVCM2000000c205a0aRCRD&vgnextchannel=fe69d1cebc98d410VgnVCM1000000b205a0aRCRD'],'Primera Teniente de Alcalde'),
    new Concejal(2,'Manuela Carmena','img/team/Manuela%20c%C3%ADrculo.png',['https://twitter.com/@ManuelaCarmena','https://www.facebook.com/Manuela.Carmena.Castrillo','https://es.linkedin.com/in/manuela-carmena-9060b212?trk=pub-pbmap','http://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/Grupos-politicos/Grupo-Municipal-Ahora-Madrid/Manuela-Carmena-Castrillo?vgnextfmt=default&vgnextoid=806c0001dd49d410VgnVCM2000000c205a0aRCRD&vgnextchannel=22da2569d1b13310VgnVCM2000000c205a0aRCRD'],'Alcaldesa'),
    new Concejal(3,'Rita Maestre','img/team/Rita%20c%C3%ADrculo.png',['http://www.madrid.es/vgn-ext-templating/v/index.jsp?vgnextoid=a06d0001dd49d410VgnVCM2000000c205a0aRCRD&vgnextchannel=97f1ae2418a57310VgnVCM1000000b205a0aRCRD&vgnextfmt=default','https://www.instagram.com/ritamaestref/','https://www.instagram.com/ritamaestref/'],'Portavoz')
    ];

  getConcejales() {
    return withObserver(this.concejales);
  }

  getConcejal(id: number | string) {
    let concejal = this.concejales.filter(h => h.id === +id)[0]
    return withObserver(new Concejal(concejal.id, concejal.name, concejal.urlFoto,concejal.contactos,concejal.desc));
  }

  removeConcejal(concejal: Concejal){
    for(let i=0; i<this.concejales.length; i++){
        if(this.concejales[i].id === concejal.id){
          this.concejales.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveConcejal(concejal: Concejal){
    if(concejal.id){
      let oldConcejal = this.concejales.filter(h => h.id === concejal.id)[0];
      oldConcejal.name = concejal.name;
      oldConcejal.urlFoto = concejal.urlFoto;
      oldConcejal.contactos = concejal.contactos;
      oldConcejal.desc = concejal.desc;
    } else {
      concejal.id = this.concejales.length+1;
      this.concejales.push(concejal);
    }
    return withObserver(concejal);
  }
}
