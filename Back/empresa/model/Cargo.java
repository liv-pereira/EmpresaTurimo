package soulCode.empresa.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Size;

@Entity
public class Cargo {
	//Agora vamos definir nossa classe cargo
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private Integer id_cargo;
	
	@Column(nullable = false, length = 30) 
	@Size(min = 3, max = 60, message ="O nome deve conter mais de dois caracteres" )
	private String car_nome;
	
	@Column(nullable = false, length = 60) 
	private String car_descricao;
	
	@OneToMany(mappedBy = "cargo") //Um cargo para vários funcionarios
	private List<Funcionario> funcionario = new ArrayList<>(); //armazenar a lista de funcionario para cada cargo
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_supervisor", unique = true)
	private Supervisor supervisor;

	public Integer getId_cargo() {
		return id_cargo;
	}

	public void setId_cargo(Integer id_cargo) {
		this.id_cargo = id_cargo;
	}

	public String getCar_nome() {
		return car_nome;
	}

	public void setCar_nome(String car_nome) {
		this.car_nome = car_nome;
	}

	public String getCar_descricao() {
		return car_descricao;
	}

	public void setCar_descricao(String car_descricao) {
		this.car_descricao = car_descricao;
	}

	public List<Funcionario> getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(List<Funcionario> funcionario) {
		this.funcionario = funcionario;
	}

	public Supervisor getSupervisor() {
		return supervisor;
	}

	public void setSupervisor(Supervisor supervisor) {
		this.supervisor = supervisor;
	}
	
	

}
