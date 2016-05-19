package es.urjc.code.daw.library.noticias;

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
@RequestMapping("/noticias")
public class NoticiaController {

	private static final Logger log = LoggerFactory.getLogger(NoticiaController.class);

	@Autowired
	private NoticiaRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Noticia> getNoticias() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Noticia> getNoticia(@PathVariable long id) {

		log.info("Get noticia {}", id);

		Noticia noticia = repository.findOne(id);
		if (noticia != null) {
			return new ResponseEntity<>(noticia, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Noticia nuevaNoticia(@RequestBody Noticia noticia) {

		repository.save(noticia);

		return noticia;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Noticia> actulizaNoticia(@PathVariable long id, @RequestBody Noticia updatedNoticia) {

		Noticia noticia = repository.findOne(id);
		if (noticia != null) {

			updatedNoticia.setId(id);
			repository.save(updatedNoticia);

			return new ResponseEntity<>(updatedNoticia, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Noticia> borraNoticia(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
