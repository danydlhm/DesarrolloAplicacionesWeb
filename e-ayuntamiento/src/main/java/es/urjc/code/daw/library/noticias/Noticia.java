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
	private String title;
	private String subtitle;
	private String url;
	
	@Column(length = 50000)
	private String cuerpo;

	public Noticia() {}
	

	public Noticia(String titulo, String subTitulo, String imagen, String cuerpo) {
		super();
		this.title = titulo;
		this.subtitle = subTitulo;
		this.url = imagen;
		this.cuerpo = cuerpo;
	}





	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getSubtitle() {
		return subtitle;
	}


	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}


	public String getUrl() {
		return url;
	}


	public void setUrl(String url) {
		this.url = url;
	}


	public String getCuerpo() {
		return cuerpo;
	}


	public void setCuerpo(String cuerpo) {
		this.cuerpo = cuerpo;
	}


	@Override
	public String toString() {
		return "Noticia [id=" + id + ", title=" + title + ", subtitle=" + subtitle + ", url=" + url + ", cuerpo="
				+ cuerpo + "]";
	}



}