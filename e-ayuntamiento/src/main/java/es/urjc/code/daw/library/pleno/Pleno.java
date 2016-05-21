package es.urjc.code.daw.library.pleno;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pleno {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	private String diaSemana;
	private int dia;
	private String mes;
	private int year;
	
	@Column(length = 50000)
	private String contenido;

	public Pleno() {}

	public Pleno(String nombre, String description, String m, int d, int a) {
		super();
		this.diaSemana = nombre;
		this.dia = d;
		this.mes = m;
		this.year = a;
		this.contenido = description;
	}

	public String getDiaSemana() {
		return diaSemana;
	}

	public void setDiaSemana(String diaSemana) {
		this.diaSemana = diaSemana;
	}

	public int getDia() {
		return dia;
	}

	public void setDia(int dia) {
		this.dia = dia;
	}

	public String getMes() {
		return mes;
	}

	public void setMes(String mes) {
		this.mes = mes;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
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
		return "Pleno [id=" + id + ", diaSemana=" + diaSemana + ", dia=" + dia + ", mes=" + mes + ", year=" + year
				+ ", contenido=" + contenido + "]";
	}
}
