package es.urjc.code.daw.library.propuesta;

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
@RequestMapping("/propuestas")
public class PropuestaController {

	private static final Logger log = LoggerFactory.getLogger(PropuestaController.class);

	@Autowired
	private PropuestaRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Propuesta> getPropuestas() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Propuesta> getPropuesta(@PathVariable long id) {

		log.info("Get propuesta {}", id);

		Propuesta anuncio = repository.findOne(id);
		if (anuncio != null) {
			return new ResponseEntity<>(anuncio, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Propuesta nuevoAnuncio(@RequestBody Propuesta anuncio) {

		repository.save(anuncio);

		return anuncio;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Propuesta> actulizaAnuncio(@PathVariable long id, @RequestBody Propuesta updatedBook) {

		Propuesta anuncio = repository.findOne(id);
		if (anuncio != null) {

			updatedBook.setId(id);
			repository.save(updatedBook);

			return new ResponseEntity<>(updatedBook, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Propuesta> borraAnuncio(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
