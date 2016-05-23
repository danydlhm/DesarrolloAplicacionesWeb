package es.urjc.code.daw.library.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.library.propuesta.Propuesta;

/**
 * This is the entity to store in database user information. It contains the
 * following basic information:
 * <ul>
 * <li>name: The name of the user. This name have to be used to logIn into the
 * service</li>
 * <li>passwordHash: The hash of the password. The password in never stored in
 * plain text to avoid information leak</li>
 * <li>roles: The roles of this user</li>
 * 
 * To check if a user can be logged into the service, this object is loaded from
 * database and password is verified. If user is authenticated, then this
 * database object is returned to the user.
 * 
 * NOTE: This class is intended to be extended by developer adding new
 * attributes. Current attributes can not be removed because they are used in
 * authentication procedures.
 */

@Entity
public class User {
	
	public interface Basico{}
	public interface Detalle{}

	@JsonView(Basico.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@JsonView(Basico.class)
	private String name;
	
	@JsonView(Basico.class)
	private String nombre;
	
	@JsonView(Basico.class)
	private String foto;
	
	@JsonView(Detalle.class)
	@ManyToMany
	private List<Propuesta> propuestasFirmadas;
	
	@JsonView(Detalle.class)
	@OneToMany(mappedBy="creador")
	private List<Propuesta> propuestasCreadas;

	@JsonIgnore
	private String passwordHash;

	@JsonView(Basico.class)
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;

	public User() {
	}

	public User(String name, String password, String... roles) {
		this.name = name;
		this.nombre = name;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.roles = new ArrayList<>(Arrays.asList(roles));
		this.propuestasCreadas = new ArrayList<>();
		this.propuestasFirmadas = new ArrayList<>();
		this.foto = "img/default-user-image.png";//foto deafult
	}
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<Propuesta> getPropuestasFirmadas() {
		return propuestasFirmadas;
	}

	public void setPropuestasFirmadas(List<Propuesta> propuestasFirmadas) {
		this.propuestasFirmadas = propuestasFirmadas;
	}

	public List<Propuesta> getPropuestasCreadas() {
		return propuestasCreadas;
	}

	public void setPropuestasCreadas(List<Propuesta> propuestasCreadas) {
		this.propuestasCreadas = propuestasCreadas;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}
}