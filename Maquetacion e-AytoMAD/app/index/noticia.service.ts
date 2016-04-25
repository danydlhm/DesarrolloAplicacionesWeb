import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';

export class Noticia {

  constructor(
    public id: number,
    public title: string,
    public subtitle: string,
    public abstract: string,
    public url: string) {}

}

@Injectable()
export class NoticiaService {

  private noticias = [
  	new Noticia(1, 'A oscuras por el cambio climático','El Ayuntamiento se suma a la Hora del Planeta de mañana sábado 19 de marzo que este año lleva por lema: “Ahora es el momento. Cambia por el clima”','El Ayuntamiento de Madrid se suma a la Hora del Planeta apagando la iluminación de la fuente de Cibeles, la fachada del Palacio de Cibeles, la Puerta de Alcalá y el alumbrado público de la plaza de Oriente. El acto tendrá lugar mañana sábado 19 de marzo de 20:30 a 21:30 horas. Para la alcaldesa Carmena, este gesto es un paso para mostrar “la necesidad de dar prioridad y abordar de manera decidida los problemas ambientales de la ciudad, e incluso de aquellos que trascienden el ámbito del municipio, como es el caso del Cambio Climático”. Este año el lema de la campaña será “Ahora es el momento. Cambia por el clima”. La Hora del Planeta es una campaña mundial de la ONG ambiental WWF que este año celebra la acción con un gran evento en la plaza de Oriente. A partir de las 18 horas habrá diferentes actividades como la entrega de camisetas, juegos, bailes, talleres de “pintacaras” y un espectáculo lumínico de androides LED. Este año la campaña se centrará en promover acciones climáticas que la sociedad pueda adoptar como una transición a las energías renovables, la promoción de la alimentación y la agricultura sostenible, la adopción de legislación climática o la sensibilización sobre cuestiones climáticas en los colegios. En relación a esta última acción, “el Ayuntamiento de Madrid asume su parte y trabaja en el impulso de acciones dirigidas a reducir las emisiones de la ciudad y entre estas medidas se consideran de especial relevancia aquellas educativas y de concienciación, en sintonía con esta iniciativa”, comenta Manuela Carmena. Además del apagado de edificios emblemáticos, WWF solicita al Ayuntamiento de Madrid y al resto de las administraciones locales, que difundan la campaña entre la ciudadanía y empleados públicos, que apuesten por la reducción de emisiones, que los plenos aprueben mociones contra el cambio climático, la incorporación de criterios de eficiencia energética en la compra pública de equipos y la creación de carriles bici para fomentar el transporte público. En este evento también participarán algunos de los monumentos más emblemáticos del planeta como el Empire State Building, la Torre Eiffel o la Ópera de Sidney. El año 2015 participaron en la campaña más de 10 400 edificios del mundo, 250 ciudades españolas y 7 000 ciudades de 172 países.','/img/Noticias/CambioClimatico.jpg'),
    
  	new Noticia(2, 'La EMT recupera 20 millones y consigue cerrar 2015 sin pérdidas','La EMT presenta un balance positivo de 10 millones de euros, el mejor resultado de la última década','El balance de la EMT de 2015 recoge un resultado positivo de 10 millones de euros, cifra que supone el mejor resultado de la última década. Además es el segundo año consecutivo en el que la EMT obtiene beneficios rompiendo así un ciclo –de 2006 a 2013– en el que los resultados han sido negativos o de exiguas ganancias. El Consejo de Administración de la Empresa Municipal de Transportes de Madrid aprobó ayer (jueves, 17 de marzo) la cuenta de resultados de la entidad correspondiente al ejercicio 2015. Los balances positivos son consecuencia de tres razones fundamentales: contención del gasto de personal; reducción del gasto de carburante y de los gastos de financiación de la deuda, y, finalmente, obtención de ingresos extra por la devolución a la EMT de las cantidades abonadas desde 2005 a 2012 en concepto del Impuesto a las Ventas Minoristas sobre Determinados Hidrocarburos (IVMDH), el popularmente conocido como ‘céntimo sanitario’, que fue declarado ilegal por el Tribunal de Justicia de la Unión Europea en 2014. La sala de lo Contencioso-Administrativo del Tribunal Supremo resolvió en enero de este año 2016 aceptar las relaciones de responsabilidad patrimonial del Estado por este impuesto. La correcta gestión jurídica y administrativa que la EMT ha realizado desde entonces para reclamar las cantidades adeudadas por este concepto, ha supuesto un ingreso superior a los 20 millones de euros. La cuenta de resultados del ejercicio 2015 ofrece un balance positivo de más de 10 millones de euros lo que representa una mejora del 284 por ciento respecto a los resultados de 2014. Los ingresos han aumentado en 6,5 millones mientras que los gastos se han reducido en un millón. Por partidas, los gastos de personal se mantienen estables; los gastos en carburantes descienden un 17 por ciento; y los gastos financieros se reducen casi un 25 por ciento (en los últimos cinco años, el endeudamiento a largo plazo de la EMT bajó un 44,6 por ciento). En cuanto a los ingresos, se produce un notable aumento de los ingresos extraordinarios (producto de la mencionada devolución del ‘céntimo sanitario’), de los ingresos por publicidad y de los ingresos por gestión de aparcamientos. El balance final de las cuentas de la EMT en 2015 supone la recuperación del equilibrio financiero de la empresa municipal lo que garantiza su sostenibilidad económica y su continuidad como empresa pública.','/img/Noticias/EMT.jpg'),
    
  	new Noticia(3, 'Expomanga 2016','Salón del Manga y de la Cultura Oriental de Madrid','Además de su traslado a IFEMA, Feria de Madrid, la principal novedad del evento será su inclusión en el Circuito Europeo de Cultura Pop de Easyfairs, que aglutina a un total de nueve salones del sector del cómic en Países Bajos, Bélgica, Dinamarca y Suecia, además de los eventos madrileños Expomanga y Expocómic. Los eventos programados para este año 2016 reunirán a más de 1000 expositores. Contará con invitados internacionales como Twin Cosplay, la pareja formada por los mexicanos Shema Arroyo y Juan Carlos Tolento, que visitará España por primera vez como vigentes campeones del World Cosplay Summit 2015. En la feria, entre otras actividades, habrá un espacio dedicado exclusivamente a la cultura japonesa, talleres, área de restauración, una zona de juegos al estilo de Takeshi´s Castle, conciertos, concursos y zona infantil. Además, contará con una exposición dedicada a un autor japonés, otra que homenajeará las series de dibujos clásicas niponas de los 80 con materiales originales traídos de Japón, y una fuerte presencia de jóvenes talentos españoles. El madrileño Vito Sicilia, es el autor del cartel de Expomanga 2016: A New Flight.','/img/Noticias/Expomanga2016.jpg'),
    
  	new Noticia(4, 'Exposición: Julia Margaret Cameron','Sin duda uno de los nombres más importantes e innovadores dentro de la fotografía del siglo XIX','La exposición quiere acercar al público uno de los productos más tradicionales la Fábrica Nacional de Moneda y Timbre-Real Casa de la Moneda, el papel, y  una de sus características más destacadas, la filigrana o marca de agua. A través de papeles, modelados, moldes y objetos históricos, la muestra recorre la historia del papel, de su proceso de fabricación, de las marcas de agua, del papel de seguridad en España, de la Fábrica de Papel de Burgos y de los artistas grabadores de marcas de agua.','/img/Noticias/ExpoJuliaMargaret.bmp'),
    
  	new Noticia(5, 'Torneo de Tenis','Mutua Madrid Open 2016','Un año más, los mejores jugadores del mundo volverán a deleitar a las más de 200.000 personas que volverán a darse cita en la Caja Mágica.','/img/Noticias/MadridOpen.jpg'),
    
  	new Noticia(6, 'Exposición: Filigranas','Las huellas del agua','Julia Margaret Cameron (Calcuta, 1815 - Ceilán, 1879) fue sin duda uno de los nombres más importantes e innovadores dentro de la fotografía del siglo XIX. Conocida por la intensidad de sus retratos, hizo posar como modelos a sus familiares, sirvientes y amigos, entre los que se encontraban los más importantes poetas, escritores y artistas británicos de su tiempo. Sus fotografías rompían con las reglas establecidas: estaban deliberadamente desenfocadas y a menudo incluían imperfecciones, arañazos, manchas y otros rastros del proceso creativo. A lo largo de su vida, Cameron recibió críticas de sus contemporáneos por sus técnicas poco convencionales, pero también fue alabada por la belleza de sus composiciones y por su concepción de la fotografía como forma artística. Organizada por el Victoria and Albert Museum, Londres, con la colaboración de Fundación Mapfre, la exposición ha sido comisariada por Marta Weiss, conservadora de fotografía del Victoria and Albert Museum, Londres. La exposición está formada por más de 100 fotografías que permitirán adentrarse en la mirada de la fotógrafa inglesa y que ofrecen una visión completa de su obra.','/img/Noticias/ExpoFiligranas.png')
  ];

  getNoticias() {
    return withObserver(this.noticias);
  }

  getNoticia(id: number | string) {
    let noticia = this.noticias.filter(h => h.id === +id)[0]
    return withObserver(new Noticia(noticia.id, noticia.title, notica.subtitle, noticia.abstract, noticia.url));
  }

  removeNoticia(noticia: Noticia){
    for(let i=0; i<this.noticias.length; i++){
        if(this.noticias[i].id === noticia.id){
          this.noticias.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveNoticias(noticia: Noticia){
    if(noticia.id){
      let oldNoticia = this.noticias.filter(h => h.id === noticia.id)[0];
      oldNoticia.title = noticia.title;
      oldNoticia.subtitle = noticia.subtitle;
      oldNoticia.abstract = noticia.abstract;
      oldNoticia.url = noticia.url;
    } else {
      noticia.id = this.noticias.length+1;
      this.noticias.push(noticia);
    }
    return withObserver(noticia);
  }
}
