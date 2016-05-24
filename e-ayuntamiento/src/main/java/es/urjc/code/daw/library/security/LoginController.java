package es.urjc.code.daw.library.security;

import java.util.Collection;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.library.user.*;
import es.urjc.code.daw.library.propuesta.Propuesta;

/**
 * This class is used to provide REST endpoints to logIn and logOut to the
 * service. These endpoints are used by Angular 2 SPA client application.
 * 
 * NOTE: This class is not intended to be modified by app developer.
 */
@RestController
public class LoginController {

	interface UserDetalle extends User.Basico, User.Detalle, Propuesta.Basico{}
	
	private static final Logger log = LoggerFactory.getLogger(LoginController.class);

	@Autowired
	private UserComponent userComponent;
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping("/logIn")
	@JsonView(User.Basico.class)
	public ResponseEntity<User> logIn() {
		
		if (!userComponent.isLoggedUser()) {
			log.info("Not user logged");
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			User loggedUser = userComponent.getLoggedUser();
			log.info("Logged as " + loggedUser.getName());
			return new ResponseEntity<>(loggedUser, HttpStatus.OK);
		}
	}

	@RequestMapping("/logOut")
	public ResponseEntity<Boolean> logOut(HttpSession session) {

		if (!userComponent.isLoggedUser()) {
			log.info("No user logged");
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			session.invalidate();
			log.info("Logged out");
			return new ResponseEntity<>(true, HttpStatus.OK);
		}
	}
	
	@RequestMapping(value = "/newUser", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@JsonView(User.Configuracion.class)
	public User nuevaUsuario(@RequestBody User anuncio) {

		userRepository.save(anuncio);

		return anuncio;
	}
	
	@JsonView(UserDetalle.class)
	@RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> actulizaUser(@PathVariable long id, @RequestBody User updatedUser) {

		User user = userRepository.findOne(id);
		if (user != null) {

			updatedUser.setId(id);
			userRepository.save(updatedUser);

			return new ResponseEntity<>(updatedUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	} 

	
	@JsonView(UserDetalle.class)
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public Collection<User> getUsers() {
		return userRepository.findAll();
	}
	
	@JsonView(UserDetalle.class)
	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> getUser(@PathVariable long id) {

		log.info("Get concejal {}", id);

		User user = userRepository.findOne(id);
		if (user != null) {
			return new ResponseEntity<>(user, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}