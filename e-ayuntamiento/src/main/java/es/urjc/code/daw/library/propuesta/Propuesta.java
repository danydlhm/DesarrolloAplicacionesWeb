package es.urjc.code.daw.library.propuesta;

import java.util.ArrayList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Propuesta {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	private String creador;
	private String titulo;
	private boolean aprobada;
	private String concejal;
	private ArrayList<String> firmantes;
	private String imagen;
	
	@Column(length = 50000)
	private String contenido;

	public Propuesta() {}

	public Propuesta(String nombre, String description, String title, String url) {
		super();
		this.titulo = title;
		this.creador = nombre;
		this.contenido = description;
		this.aprobada = false;
		this.concejal = null;
		this.firmantes = new ArrayList<String>();
		this.firmantes.add(this.creador);
		this.imagen = url;
	}
	
	public String getCreador() {
		return creador;
	}

	public void setCreador(String creador) {
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

	public String getConcejal() {
		return concejal;
	}

	public void setConcejal(String concejal) {
		this.concejal = concejal;
	}

	public ArrayList<String> getFirmantes() {
		return firmantes;
	}

	public void setFirmantes(ArrayList<String> firmantes) {
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
		return "Propuesta [id=" + this.id + ", titulo =" + this.titulo + ", descripcion =" + this.contenido + "] Creada por " + this.creador;
	}
}
