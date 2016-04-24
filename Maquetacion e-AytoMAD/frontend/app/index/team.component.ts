import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Concejal} from './concejal.service';

@Component({
    selector: 'team-section',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/index/teamTemplate.html',
})

export class TeamComponent{
    private concejales = [
    new Concejal('Marta Higueras','img/team/Marta%20c%C3%ADrculo.png',['http://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/El-Pleno/Composicion/Corporacion-actual/Grupo-Municipal-Ahora-Madrid/Marta-Maria-Higueras-Garrobo?vgnextfmt=default&vgnextoid=1ddd0001dd49d410VgnVCM2000000c205a0aRCRD&vgnextchannel=fe69d1cebc98d410VgnVCM1000000b205a0aRCRD'],'Primera Teniente de Alcalde'),
    new Concejal('Manuela Carmena','img/team/Manuela%20c%C3%ADrculo.png',['https://twitter.com/@ManuelaCarmena','https://www.facebook.com/Manuela.Carmena.Castrillo','https://es.linkedin.com/in/manuela-carmena-9060b212?trk=pub-pbmap','http://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/Grupos-politicos/Grupo-Municipal-Ahora-Madrid/Manuela-Carmena-Castrillo?vgnextfmt=default&vgnextoid=806c0001dd49d410VgnVCM2000000c205a0aRCRD&vgnextchannel=22da2569d1b13310VgnVCM2000000c205a0aRCRD'],'Alcaldesa'),
    new Concejal('Rita Maestre','img/team/Rita%20c%C3%ADrculo.png',['http://www.madrid.es/vgn-ext-templating/v/index.jsp?vgnextoid=a06d0001dd49d410VgnVCM2000000c205a0aRCRD&vgnextchannel=97f1ae2418a57310VgnVCM1000000b205a0aRCRD&vgnextfmt=default','https://www.instagram.com/ritamaestref/','https://www.instagram.com/ritamaestref/'],'Portavoz')
    ]
    

}