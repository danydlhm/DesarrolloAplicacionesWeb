package es.urjc.code.daw.library.pleno;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private PlenoRepository plenoRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample books

		plenoRepository.save(new Pleno("Lunes","Maestre canto lo siguiente : La abogada soltera, lucha por su cliente, lleva minifaldas provocativas y además es autosuficiente. A que no lo hago mal.","Enero",15,1998));
		plenoRepository.save(new Pleno("Martes","Carmena canto lo siguiente : Volverá a la montaña alguna vez, volverá a la montaña cuando quiera, volverá a la montaña, volverá a la montaña, volverá a la montaña cuando quiera, cuando quiera...Volverá a la montaña alguna vez y le pegaré un tiro cuando vuelva, y le pegaré un tiro, y le pegaré un tiro, y le pegaré un tiro cuando vuelva, cuando vuelva...voy acabar con todos los humanos, con los humanos todos yo acabaré, voy a acabar con todos, voy a acabar con todos, con todos los humanos acabare acabaré... ","Febrero",16,1999));
		plenoRepository.save(new Pleno("Miercoles","Esperanza comento lo siguiente : Estáis frescos, pues ahora pienso montar mi propio parque de atracciones, con casino y furcias. Es más, paso del parque","Marzo",17,2000));
		plenoRepository.save(new Pleno("Jueves","Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.","Abril",18,2001));
		plenoRepository.save(new Pleno("Viernes","Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.","Mayo",19,2003));
		plenoRepository.save(new Pleno("Sabado","The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.","Junio",20,2004));
		plenoRepository.save(new Pleno("Domingo","Hodor, hodor. Hodor. Hodor, hodor hodor hodor - hodor... Hodor hodor hodor; hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor hodor! Hodor hodor - hodor hodor hodor... Hodor hodor hodor hodor hodor, hodor. Hodor hodor?! Hodor hodor HODOR! Hodor hodor HODOR hodor, hodor hodor hodor hodor, hodor, hodor hodor. Hodor, hodor hodor HODOR hodor, hodor hodor hodor hodor hodor hodor. Hodor. Hodor hodor; hodor hodor hodor, hodor. Hodor hodor. Hodor! Hodor hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.","Julio",21,2005));
		// Sample users

		userRepository.save(new User("user", "pass", "ROLE_USER"));
		userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
	}

}
