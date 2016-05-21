package es.urjc.code.daw.library.propuesta;

import java.util.ArrayList;
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
	@ManyToMany(mappedBy="propuestasFirmadas")
	private List<User> firmantes;
	
	@JsonView(Basico.class)
	@Column(length = 50000)
	private String contenido;

	public Propuesta() {}

	public Propuesta(User nombre, String description, String title, String url) {
		super();
		this.titulo = title;
		this.creador = nombre;
		this.contenido = description;
		this.aprobada = false;
		this.firmantes = new ArrayList<User>();
		this.firmantes.add(this.creador);
		this.imagen = url;
	}
	
	public User getCreador() {
		return creador;
	}

	public void setCreador(User creador) {
		this.creador = creador;
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

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public String getContenido() {
		return contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Propuesta [id=" + id + ", titulo=" + titulo + ", aprobada=" + aprobada + ", imagen=" + imagen
				+ ", creador=" + creador + ", concejal=" + concejal + ", firmantes=" + firmantes + ", contenido="
				+ contenido + "]";
	}
	
}
