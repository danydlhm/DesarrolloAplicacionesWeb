package es.urjc.code.daw.library.propuesta;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private PropuestaRepository propuestaRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample books

		propuestaRepository.save(new Propuesta("Manolo el del Bombo","Pues lo dicho quiero una vuvuzela, estoy harto del bombo. Quiero ser Manolo el Vuvuzelo.","Quiero una Vuvuzela","../img/Propuestas/manolo-bombo.jpg"));
		propuestaRepository.save(new Propuesta("Rasputin","Pues lo dicho, vamos a juntar firmas para echar al Zar Nicolas II de Rusia. Que ya huele a naftalina.", "Echar al Zar", "../img/Propuestas/Rasputin.jpg"));

		// Sample users

		userRepository.save(new User("user", "pass", "ROLE_USER"));
		userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
	}

}
