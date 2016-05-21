package es.urjc.code.daw.library.img;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Carrousel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	private String name;
	private String foto;
	private boolean active;
	

	public Carrousel() {}

	public Carrousel(String name, String foto) {
		super();
		this.name = name;
		this.foto = foto;
		this.active = false;
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


	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	
	
	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Carrousel [id=" + id + ", name=" + name + ", foto=" + foto + ", active=" + active + "]";
	}	

}
