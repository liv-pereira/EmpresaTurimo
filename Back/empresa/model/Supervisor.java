package soulCode.empresa.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Supervisor {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_supervisor;
	
	@Column(nullable = false, length=100)
	@Size(min = 3, max = 100, message ="O nome deve conter mais de dois caracteres" )
	private String sup_nome;
	
	@Column(nullable = true, length=100)
	private String sup_setor;
	
	@Column(nullable = true)
	private String sup_foto;
	
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_cargo", unique = true)
	private Cargo cargo;

	public Integer getId_supervisor() {
		return id_supervisor;
	}

	public void setId_supervisor(Integer id_supervisor) {
		this.id_supervisor = id_supervisor;
	}

	public String getSup_nome() {
		return sup_nome;
	}

	public void setSup_nome(String sup_nome) {
		this.sup_nome = sup_nome;
	}

	public String getSup_setor() {
		return sup_setor;
	}

	public void setSup_setor(String sup_setor) {
		this.sup_setor = sup_setor;
	}

	public String getSup_foto() {
		return sup_foto;
	}

	public void setSup_foto(String sup_foto) {
		this.sup_foto = sup_foto;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}
	
	

}
