package es.urjc.code.daw.library.noticias;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Noticia {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	private String titulo;
	private String subTitulo;
	private String imagen;
	
	@Column(length = 50000)
	private String cuerpo;

	public Noticia() {}
	

	public Noticia(String titulo, String subTitulo, String imagen, String cuerpo) {
		super();
		this.titulo = titulo;
		this.subTitulo = subTitulo;
		this.imagen = imagen;
		this.cuerpo = cuerpo;
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


	public String getSubTitulo() {
		return subTitulo;
	}


	public void setSubTitulo(String subTitulo) {
		this.subTitulo = subTitulo;
	}


	public String getImagen() {
		return imagen;
	}


	public void setImagen(String imagen) {
		this.imagen = imagen;
	}


	public String getCuerpo() {
		return cuerpo;
	}


	public void setCuerpo(String cuerpo) {
		this.cuerpo = cuerpo;
	}


	@Override
	public String toString() {
		return "Noticia [id=" + id + ", titulo=" + titulo + ", subTitulo=" + subTitulo + ", imagen=" + imagen
				+ ", cuerpo=" + cuerpo + "]";
	}


}