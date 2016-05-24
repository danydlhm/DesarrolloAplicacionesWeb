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

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.library.equipo.Concejal;
import es.urjc.code.daw.library.user.User;

@RestController
@RequestMapping("/propuestas")
public class PropuestaController {
	
	interface PropuestaDetalle extends Propuesta.Basico, Propuesta.Detalle, User.Basico, Concejal.Basico{}

	private static final Logger log = LoggerFactory.getLogger(PropuestaController.class);

	@Autowired
	private PropuestaRepository repository;
	
	@JsonView(Propuesta.Basico.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Propuesta> getPropuestas() {
		return repository.findAll();
	}

	@JsonView(PropuestaDetalle.class)
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
	public Propuesta nuevaPropuesta(@RequestBody Propuesta anuncio) {

		repository.save(anuncio);

		return anuncio;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Propuesta> actulizaPropuesta(@PathVariable long id, @RequestBody Propuesta updatedPropuesta) {

		Propuesta anuncio = repository.findOne(id);
		if (anuncio != null) {

			updatedPropuesta.setId(id);
			repository.save(updatedPropuesta);

			return new ResponseEntity<>(updatedPropuesta, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Propuesta> borraPropuesta(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
