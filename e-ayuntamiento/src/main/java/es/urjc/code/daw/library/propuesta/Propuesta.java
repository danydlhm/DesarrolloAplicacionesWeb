package es.urjc.code.daw.library.propuesta;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.library.equipo.Concejal;
import es.urjc.code.daw.library.user.User;

@Entity
public class Propuesta {
	
	public interface Basico {}
	interface Detalle {}
	
	@JsonView(Basico.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;

	@JsonView(Basico.class)
	private String titulo;
	
	@JsonView(Basico.class)
	private boolean aprobada;
	
	@JsonView(Basico.class)
	private String imagen;
	
	@JsonView(Detalle.class)
	@ManyToOne
	private User creador;
	
	@JsonView(Detalle.class)
	@ManyToOne
	private Concejal concejal;
	
	@JsonView(Detalle.class)
	@ManyToMany
	private List<User> firmantes;
	
	@JsonView(Basico.class)
	@Column(length = 50000)
	private String contenido;

	public Propuesta() {}

	
	
	public Propuesta( String titulo, boolean aprobada, String imagen, User creador, Concejal concejal,
			List<User> firmantes, String contenido) {
		super();
		this.titulo = titulo;
		this.aprobada = aprobada;
		this.imagen = imagen;
		this.creador = creador;
		this.concejal = concejal;
		this.firmantes = firmantes;
		this.contenido = contenido;
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getTitulo() {
		return titulo;
	}



	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}



	public boolean isAprobada() {
		return aprobada;
	}



	public void setAprobada(boolean aprobada) {
		this.aprobada = aprobada;
	}



	public String getImagen() {
		return imagen;
	}



	public void setImagen(String imagen) {
		this.imagen = imagen;
	}



	public User getCreador() {
		return creador;
	}



	public void setCreador(User creador) {
		this.creador = creador;
	}



	public Concejal getConcejal() {
		return concejal;
	}



	public void setConcejal(Concejal concejal) {
		this.concejal = concejal;
	}



	public List<User> getFirmantes() {
		return firmantes;
	}



	public void setFirmantes(List<User> firmantes) {
		this.firmantes = firmantes;
	}



	public String getContenido() {
		return contenido;
	}



	public void setContenido(String contenido) {
		this.contenido = contenido;
	}



	@Override
	public String toString() {
		return "Propuesta [id=" + id + ", titulo=" + titulo + ", aprobada=" + aprobada + ", imagen=" + imagen
				+ ", creador=" + creador + ", concejal=" + concejal + ", firmantes=" + firmantes + ", contenido="
				+ contenido + "]";
	}
	
}
