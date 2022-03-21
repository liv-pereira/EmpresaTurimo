package soulCode.empresa.model;



import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;

@Entity // é uma entidade nova
public class ContraCheque {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codigo;
	@Column
	private String ch_descricao;
	@DateTimeFormat(pattern="dd-MM-yyyy")
	//@Temporal(TemporalType.DATE) 
	@Column(columnDefinition = "date", nullable = false)
	private Date ch_dataReferencia;
	
	
	
	@NumberFormat(pattern = "#.##0,00")
	@Column(nullable=false)
	private Double ch_salario;
	@NumberFormat(pattern = "#.##0,00")
	@Column(nullable=false)
	private Double ch_descontos;
	@NumberFormat(pattern = "#.##0,00")
	@Column(nullable=false)
	private Double ch_valorLiquido;
	@Enumerated(EnumType.STRING)
	private StatusCh ch_status;
	
	//vamos fazer um relacionamento unidirecional
	@JsonIgnore 
	@ManyToOne (cascade = CascadeType.ALL)
	@JoinColumn(name = "ra_funcionario")
	private Funcionario funcionario;

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	

	public String getCh_descricao() {
		return ch_descricao;
	}

	public void setCh_descricao(String ch_descricao) {
		this.ch_descricao = ch_descricao;
	}

	public Date getCh_dataReferencia() {
		return ch_dataReferencia;
	}

	public void setCh_dataReferencia(Date ch_dataReferencia) {
		this.ch_dataReferencia = ch_dataReferencia;
	}

	public Double getCh_salario() {
		return ch_salario;
	}

	public void setCh_salario(Double ch_salario) {
		this.ch_salario = ch_salario;
	}

	public Double getCh_descontos() {
		return ch_descontos;
	}

	public void setCh_descontos(Double ch_descontos) {
		this.ch_descontos = ch_descontos;
	}

	public Double getCh_valorLiquido() {
		return ch_valorLiquido;
	}

	public void setCh_valorLiquido(Double ch_valorLiquido) {
		this.ch_valorLiquido = ch_valorLiquido;
	}

	public StatusCh getCh_status() {
		return ch_status;
	}

	public void setCh_status(StatusCh ch_status) {
		this.ch_status = ch_status;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}
	
	
	
	}

