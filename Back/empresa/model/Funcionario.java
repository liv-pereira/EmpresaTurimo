package soulCode.empresa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Funcionario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer ra_funcionario;
	
	@Column(nullable = false, length = 60)
	@Size(min = 3, max = 60, message ="O nome deve conter mais de dois caracteres" )
	private String fu_nome;
	
//	@Column(nullable = true, length = 60)
//	private String fu_cargo;
	
	@Column(nullable = false, length = 30)
	private String fu_cidade;
	
	
	//novo código cargo
	@JsonIgnore 
	@ManyToOne //muitos funcionarios para um cargo
	@JoinColumn(name = "id_cargo") // vai armazemar o id do cargo que esse funcionario está relacionado

	//esse cargo é o cargo que fizemos o mappedby na outra entidade.
	private Cargo cargo;

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}

	public Integer getRa_funcionario() {
		return ra_funcionario;
	}

	public void setRa_funcionario(Integer ra_funcionario) {
		this.ra_funcionario = ra_funcionario;
	}

	public String getFu_nome() {
		return fu_nome;
	}

	public void setFu_nome(String fu_nome) {
		this.fu_nome = fu_nome;
	}

//	public String getFu_cargo() {
//		return fu_cargo;
//	}
//
//	public void setFu_cargo(String fu_cargo) {
//		this.fu_cargo = fu_cargo;
//	}

	public String getFu_cidade() {
		return fu_cidade;
	}

	public void setFu_cidade(String fu_cidade) {
		this.fu_cidade = fu_cidade;
	}
	
	

}
