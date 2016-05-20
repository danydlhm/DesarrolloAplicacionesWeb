package es.urjc.code.daw.library;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.equipo.Concejal;
import es.urjc.code.daw.library.equipo.ConcejalRepository;
import es.urjc.code.daw.library.img.Carrousel;
import es.urjc.code.daw.library.img.CarrouselRepository;
import es.urjc.code.daw.library.noticias.Noticia;
import es.urjc.code.daw.library.noticias.NoticiaRepository;
import es.urjc.code.daw.library.pleno.Pleno;
import es.urjc.code.daw.library.pleno.PlenoRepository;
import es.urjc.code.daw.library.propuesta.Propuesta;
import es.urjc.code.daw.library.propuesta.PropuestaRepository;
import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private ConcejalRepository concejalRepository;
	
	@Autowired
	private CarrouselRepository carrouselRepository;
	
	@Autowired
	private NoticiaRepository noticiaRepository;
	
	@Autowired
	private PlenoRepository plenoRepository;
	
	@Autowired
	private PropuestaRepository propuestaRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {
		
		// Sample Concejal
		
		concejalRepository.save(new Concejal("Marta Higueras","Primera Teniente de Alcalde","img/team/Marta%20c%C3%ADrculo.png","http://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/El-Pleno/Composicion/Corporacion-actual/Grupo-Municipal-Ahora-Madrid/Marta-Maria-Higueras-Garrobo?vgnextfmt=default&vgnextoid=1ddd0001dd49d410VgnVCM2000000c205a0aRCRD&vgnextchannel=fe69d1cebc98d410VgnVCM1000000b205a0aRCRD"));
		concejalRepository.save(new Concejal("Manuela Carmena","Alcaldesa","img/team/Manuela%20c%C3%ADrculo.png","https://twitter.com/@ManuelaCarmena','https://www.facebook.com/Manuela.Carmena.Castrillo","https://es.linkedin.com/in/manuela-carmena-9060b212?trk=pub-pbmap","http://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/Grupos-politicos/Grupo-Municipal-Ahora-Madrid/Manuela-Carmena-Castrillo?vgnextfmt=default&vgnextoid=806c0001dd49d410VgnVCM2000000c205a0aRCRD&vgnextchannel=22da2569d1b13310VgnVCM2000000c205a0aRCRD"));
		concejalRepository.save(new Concejal("Rita Maestre","Portavoz","img/team/Rita%20c%C3%ADrculo.png","http://www.madrid.es/vgn-ext-templating/v/index.jsp?vgnextoid=a06d0001dd49d410VgnVCM2000000c205a0aRCRD&vgnextchannel=97f1ae2418a57310VgnVCM1000000b205a0aRCRD&vgnextfmt=default","https://www.instagram.com/ritamaestref/","https://www.instagram.com/ritamaestref/"));
		
		// Sample Carrousel
		
		carrouselRepository.save(new Carrousel("Atocha","img/Turismo/Atocha.jpg"));
		carrouselRepository.save(new Carrousel("Gran Via","img/Turismo/GranVia.jpg"));
		carrouselRepository.save(new Carrousel("Palacio Real","img/Turismo/PalacioReal.jpg"));
		carrouselRepository.save(new Carrousel("Plaza De España","img/Turismo/PlazaDeEspa%C3%B1a.jpg"));
		carrouselRepository.save(new Carrousel("Plaza Mayor","img/Turismo/PlazaMayor.jpg"));
		carrouselRepository.save(new Carrousel("Puerta Del Sol","img/Turismo/PuertaDelSol.jpg"));
		carrouselRepository.save(new Carrousel("Templo De Debod","img/Turismo/TemploDeDebod.JPG"));
		carrouselRepository.save(new Carrousel("El Prado","img/Turismo/ElPrado.jpg"));
		carrouselRepository.save(new Carrousel("El Retiro","img/Turismo/ElRetiro.jpg"));
		carrouselRepository.save(new Carrousel("Las Ventas","img/Turismo/LasVentas.jpg"));
		carrouselRepository.save(new Carrousel("Palacio de Cristal","img/Turismo/PalacioCristal.jpg"));
		carrouselRepository.save(new Carrousel("Puerta de Alcala","img/Turismo/PuertaAlcala.jpg"));
		carrouselRepository.save(new Carrousel("Torres Quio","img/Turismo/TorresQuio.jpg"));
		carrouselRepository.save(new Carrousel("Campo del moro","img/Turismo/CampodelMoro.jpg"));
		
		// Sample noticias
		
		noticiaRepository.save(new Noticia("A oscuras por el cambio climático","El Ayuntamiento se suma a la Hora del Planeta de mañana sábado 19 de marzo que este año lleva por lema: “Ahora es el momento. Cambia por el clima”","/img/Noticias/CambioClimatico.jpg","El Ayuntamiento de Madrid se suma a la Hora del Planeta apagando la iluminación de la fuente de Cibeles, la fachada del Palacio de Cibeles, la Puerta de Alcalá y el alumbrado público de la plaza de Oriente. El acto tendrá lugar mañana sábado 19 de marzo de 20:30 a 21:30 horas. Para la alcaldesa Carmena, este gesto es un paso para mostrar “la necesidad de dar prioridad y abordar de manera decidida los problemas ambientales de la ciudad, e incluso de aquellos que trascienden el ámbito del municipio, como es el caso del Cambio Climático”. Este año el lema de la campaña será “Ahora es el momento. Cambia por el clima”. La Hora del Planeta es una campaña mundial de la ONG ambiental WWF que este año celebra la acción con un gran evento en la plaza de Oriente. A partir de las 18 horas habrá diferentes actividades como la entrega de camisetas, juegos, bailes, talleres de “pintacaras” y un espectáculo lumínico de androides LED. Este año la campaña se centrará en promover acciones climáticas que la sociedad pueda adoptar como una transición a las energías renovables, la promoción de la alimentación y la agricultura sostenible, la adopción de legislación climática o la sensibilización sobre cuestiones climáticas en los colegios. En relación a esta última acción, “el Ayuntamiento de Madrid asume su parte y trabaja en el impulso de acciones dirigidas a reducir las emisiones de la ciudad y entre estas medidas se consideran de especial relevancia aquellas educativas y de concienciación, en sintonía con esta iniciativa”, comenta Manuela Carmena. Además del apagado de edificios emblemáticos, WWF solicita al Ayuntamiento de Madrid y al resto de las administraciones locales, que difundan la campaña entre la ciudadanía y empleados públicos, que apuesten por la reducción de emisiones, que los plenos aprueben mociones contra el cambio climático, la incorporación de criterios de eficiencia energética en la compra pública de equipos y la creación de carriles bici para fomentar el transporte público. En este evento también participarán algunos de los monumentos más emblemáticos del planeta como el Empire State Building, la Torre Eiffel o la Ópera de Sidney. El año 2015 participaron en la campaña más de 10 400 edificios del mundo, 250 ciudades españolas y 7 000 ciudades de 172 países."));
		noticiaRepository.save(new Noticia("La EMT recupera 20 millones y consigue cerrar 2015 sin pérdidas","La EMT presenta un balance positivo de 10 millones de euros, el mejor resultado de la última década","/img/Noticias/EMT.jpg","El balance de la EMT de 2015 recoge un resultado positivo de 10 millones de euros, cifra que supone el mejor resultado de la última década. Además es el segundo año consecutivo en el que la EMT obtiene beneficios rompiendo así un ciclo –de 2006 a 2013– en el que los resultados han sido negativos o de exiguas ganancias. El Consejo de Administración de la Empresa Municipal de Transportes de Madrid aprobó ayer (jueves, 17 de marzo) la cuenta de resultados de la entidad correspondiente al ejercicio 2015. Los balances positivos son consecuencia de tres razones fundamentales: contención del gasto de personal; reducción del gasto de carburante y de los gastos de financiación de la deuda, y, finalmente, obtención de ingresos extra por la devolución a la EMT de las cantidades abonadas desde 2005 a 2012 en concepto del Impuesto a las Ventas Minoristas sobre Determinados Hidrocarburos (IVMDH), el popularmente conocido como ‘céntimo sanitario’, que fue declarado ilegal por el Tribunal de Justicia de la Unión Europea en 2014. La sala de lo Contencioso-Administrativo del Tribunal Supremo resolvió en enero de este año 2016 aceptar las relaciones de responsabilidad patrimonial del Estado por este impuesto. La correcta gestión jurídica y administrativa que la EMT ha realizado desde entonces para reclamar las cantidades adeudadas por este concepto, ha supuesto un ingreso superior a los 20 millones de euros. La cuenta de resultados del ejercicio 2015 ofrece un balance positivo de más de 10 millones de euros lo que representa una mejora del 284 por ciento respecto a los resultados de 2014. Los ingresos han aumentado en 6,5 millones mientras que los gastos se han reducido en un millón. Por partidas, los gastos de personal se mantienen estables; los gastos en carburantes descienden un 17 por ciento; y los gastos financieros se reducen casi un 25 por ciento (en los últimos cinco años, el endeudamiento a largo plazo de la EMT bajó un 44,6 por ciento). En cuanto a los ingresos, se produce un notable aumento de los ingresos extraordinarios (producto de la mencionada devolución del ‘céntimo sanitario’), de los ingresos por publicidad y de los ingresos por gestión de aparcamientos. El balance final de las cuentas de la EMT en 2015 supone la recuperación del equilibrio financiero de la empresa municipal lo que garantiza su sostenibilidad económica y su continuidad como empresa pública."));
		noticiaRepository.save(new Noticia("Expomanga 2016","Salón del Manga y de la Cultura Oriental de Madrid","/img/Noticias/Expomanga2016.jpg","Además de su traslado a IFEMA, Feria de Madrid, la principal novedad del evento será su inclusión en el Circuito Europeo de Cultura Pop de Easyfairs, que aglutina a un total de nueve salones del sector del cómic en Países Bajos, Bélgica, Dinamarca y Suecia, además de los eventos madrileños Expomanga y Expocómic. Los eventos programados para este año 2016 reunirán a más de 1000 expositores. Contará con invitados internacionales como Twin Cosplay, la pareja formada por los mexicanos Shema Arroyo y Juan Carlos Tolento, que visitará España por primera vez como vigentes campeones del World Cosplay Summit 2015. En la feria, entre otras actividades, habrá un espacio dedicado exclusivamente a la cultura japonesa, talleres, área de restauración, una zona de juegos al estilo de Takeshi´s Castle, conciertos, concursos y zona infantil. Además, contará con una exposición dedicada a un autor japonés, otra que homenajeará las series de dibujos clásicas niponas de los 80 con materiales originales traídos de Japón, y una fuerte presencia de jóvenes talentos españoles. El madrileño Vito Sicilia, es el autor del cartel de Expomanga 2016: A New Flight."));
		noticiaRepository.save(new Noticia("Exposición: Julia Margaret Cameron","Sin duda uno de los nombres más importantes e innovadores dentro de la fotografía del siglo XIX","/img/Noticias/ExpoJuliaMargaret.bmp","La exposición quiere acercar al público uno de los productos más tradicionales la Fábrica Nacional de Moneda y Timbre-Real Casa de la Moneda, el papel, y  una de sus características más destacadas, la filigrana o marca de agua. A través de papeles, modelados, moldes y objetos históricos, la muestra recorre la historia del papel, de su proceso de fabricación, de las marcas de agua, del papel de seguridad en España, de la Fábrica de Papel de Burgos y de los artistas grabadores de marcas de agua."));
		noticiaRepository.save(new Noticia("Torneo de Tenis","Mutua Madrid Open 2016","/img/Noticias/MadridOpen.jpg","Un año más, los mejores jugadores del mundo volverán a deleitar a las más de 200.000 personas que volverán a darse cita en la Caja Mágica."));
		noticiaRepository.save(new Noticia("Exposición: Filigranas","Las huellas del agua","/img/Noticias/ExpoFiligranas.png","Julia Margaret Cameron (Calcuta, 1815 - Ceilán, 1879) fue sin duda uno de los nombres más importantes e innovadores dentro de la fotografía del siglo XIX. Conocida por la intensidad de sus retratos, hizo posar como modelos a sus familiares, sirvientes y amigos, entre los que se encontraban los más importantes poetas, escritores y artistas británicos de su tiempo. Sus fotografías rompían con las reglas establecidas: estaban deliberadamente desenfocadas y a menudo incluían imperfecciones, arañazos, manchas y otros rastros del proceso creativo. A lo largo de su vida, Cameron recibió críticas de sus contemporáneos por sus técnicas poco convencionales, pero también fue alabada por la belleza de sus composiciones y por su concepción de la fotografía como forma artística. Organizada por el Victoria and Albert Museum, Londres, con la colaboración de Fundación Mapfre, la exposición ha sido comisariada por Marta Weiss, conservadora de fotografía del Victoria and Albert Museum, Londres. La exposición está formada por más de 100 fotografías que permitirán adentrarse en la mirada de la fotógrafa inglesa y que ofrecen una visión completa de su obra."));
		

		// Sample actas

		plenoRepository.save(new Pleno("Lunes","Maestre canto lo siguiente : La abogada soltera, lucha por su cliente, lleva minifaldas provocativas y además es autosuficiente. A que no lo hago mal.","Enero",15,1998));
		plenoRepository.save(new Pleno("Martes","Carmena canto lo siguiente : Volverá a la montaña alguna vez, volverá a la montaña cuando quiera, volverá a la montaña, volverá a la montaña, volverá a la montaña cuando quiera, cuando quiera...Volverá a la montaña alguna vez y le pegaré un tiro cuando vuelva, y le pegaré un tiro, y le pegaré un tiro, y le pegaré un tiro cuando vuelva, cuando vuelva...voy acabar con todos los humanos, con los humanos todos yo acabaré, voy a acabar con todos, voy a acabar con todos, con todos los humanos acabare acabaré... ","Febrero",16,1999));
		plenoRepository.save(new Pleno("Miercoles","Esperanza comento lo siguiente : Estáis frescos, pues ahora pienso montar mi propio parque de atracciones, con casino y furcias. Es más, paso del parque","Marzo",17,2000));
		plenoRepository.save(new Pleno("Jueves","Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.","Abril",18,2001));
		plenoRepository.save(new Pleno("Viernes","Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.","Mayo",19,2003));
		plenoRepository.save(new Pleno("Sabado","The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.","Junio",20,2004));
		plenoRepository.save(new Pleno("Domingo","Hodor, hodor. Hodor. Hodor, hodor hodor hodor - hodor... Hodor hodor hodor; hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor hodor! Hodor hodor - hodor hodor hodor... Hodor hodor hodor hodor hodor, hodor. Hodor hodor?! Hodor hodor HODOR! Hodor hodor HODOR hodor, hodor hodor hodor hodor, hodor, hodor hodor. Hodor, hodor hodor HODOR hodor, hodor hodor hodor hodor hodor hodor. Hodor. Hodor hodor; hodor hodor hodor, hodor. Hodor hodor. Hodor! Hodor hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.","Julio",21,2005));
		
		// Sample users

		userRepository.save(new User("user", "pass", "ROLE_USER"));
		userRepository.save(new User("manoloBombo", "1234", "ROLE_USER"));
		userRepository.save(new User("rasputin", "1234", "ROLE_USER"));
		userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
		
		// Sample propuestas
		
		User us = userRepository.findByName("manoloBombo");
		propuestaRepository.save(new Propuesta(us,"Pues lo dicho quiero una vuvuzela, estoy harto del bombo. Quiero ser Manolo el Vuvuzelo.","Quiero una Vuvuzela","../img/Propuestas/manolo-bombo.jpg"));
		us = userRepository.findByName("rasputin");
		propuestaRepository.save(new Propuesta(us,"Pues lo dicho, vamos a juntar firmas para echar al Zar Nicolas II de Rusia. Que ya huele a naftalina.", "Echar al Zar", "../img/Propuestas/Rasputin.jpg"));


		
	}

}
