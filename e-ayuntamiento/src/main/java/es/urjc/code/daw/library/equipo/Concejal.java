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

import es.urjc.code.daw.library.propuesta.Propuesta;

@Entity
public class Concejal {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	private String name;
	private String cargo;
	private String urlFoto;
	
	@OneToMany(mappedBy="concejal")
	private List<Propuesta> propuestasAprobadas;
	
	@Column(length = 512)
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> contacto;

	public Concejal() {}

	public Concejal(String name, String cargo, String foto, String... contacto) {
		super();
		this.name = name;
		this.cargo = cargo;
		this.urlFoto = foto;
		this.contacto = new ArrayList<>(Arrays.asList(contacto));
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

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getFoto() {
		return urlFoto;
	}

	public void setFoto(String foto) {
		this.urlFoto = foto;
	}

	public List<String> getContacto() {
		return contacto;
	}

	public void setContacto(List<String> contacto) {
		this.contacto = contacto;
	}
	
	

	public List<Propuesta> getPropuestasAprobadas() {
		return propuestasAprobadas;
	}

	public void setPropuestasAprobadas(List<Propuesta> propuestasAprobadas) {
		this.propuestasAprobadas = propuestasAprobadas;
	}

	@Override
	public String toString() {
		return "Concejal [id=" + id + ", name=" + name + ", cargo=" + cargo + ", urlFoto=" + urlFoto + ", contacto="
				+ contacto + "]";
	}
	
	

}
