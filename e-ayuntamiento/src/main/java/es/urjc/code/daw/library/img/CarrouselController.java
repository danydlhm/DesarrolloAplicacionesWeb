package es.urjc.code.daw.library.img;

import java.util.Collection;

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

@RestController
@RequestMapping("/Carrousel")
public class CarrouselController {

	private static final Logger log = LoggerFactory.getLogger(CarrouselController.class);

	@Autowired
	private CarrouselRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Carrousel> getImagenes() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Carrousel> getImagen(@PathVariable long id) {

		log.info("Get imagen {}", id);

		Carrousel persona = repository.findOne(id);
		if (persona != null) {
			return new ResponseEntity<>(persona, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Carrousel nuevaImagen(@RequestBody Carrousel persona) {

		repository.save(persona);

		return persona;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Carrousel> actulizaImagen(@PathVariable long id, @RequestBody Carrousel updatedConcejal) {

		Carrousel persona = repository.findOne(id);
		if (persona != null) {

			updatedConcejal.setId(id);
			repository.save(updatedConcejal);

			return new ResponseEntity<>(updatedConcejal, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Carrousel> borraImagen(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
