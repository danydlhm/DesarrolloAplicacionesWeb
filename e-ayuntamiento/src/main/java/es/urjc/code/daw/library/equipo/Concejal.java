package es.urjc.code.daw.library.equipo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.library.propuesta.Propuesta;

@Entity
public class Concejal {
	
	public interface Basico{}
	interface Detalle extends Propuesta.Basico{}

	@JsonView(Basico.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	@JsonView(Basico.class)
	private String name;
	
	@JsonView(Basico.class)
	private String descripcion;
	
	@JsonView(Basico.class)
	private String urlFoto;
	
	@JsonView(Detalle.class)
	@OneToMany(mappedBy="concejal")
	private List<Propuesta> propuestasAprobadas;
	
	@JsonView(Basico.class)
	@Column(length = 512)
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> contactos;

	public Concejal() {}

	public Concejal(String name, String cargo, String foto, String... contacto) {
		super();
		this.name = name;
		this.descripcion = cargo;
		this.urlFoto = foto;
		this.contactos = new ArrayList<>(Arrays.asList(contacto));
		this.propuestasAprobadas = new ArrayList<>();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getUrlFoto() {
		return urlFoto;
	}

	public void setUrlFoto(String urlFoto) {
		this.urlFoto = urlFoto;
	}

	public List<Propuesta> getPropuestasAprobadas() {
		return propuestasAprobadas;
	}

	public void setPropuestasAprobadas(List<Propuesta> propuestasAprobadas) {
		this.propuestasAprobadas = propuestasAprobadas;
	}

	public List<String> getContactos() {
		return contactos;
	}

	public void setContactos(List<String> contactos) {
		this.contactos = contactos;
	}

	@Override
	public String toString() {
		return "Concejal [id=" + id + ", name=" + name + ", descripcion=" + descripcion + ", urlFoto=" + urlFoto
				+ ", propuestasAprobadas=" + propuestasAprobadas + ", contactos=" + contactos + "]";
	}


}
