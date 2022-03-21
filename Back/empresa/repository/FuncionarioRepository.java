package soulCode.empresa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.empresa.model.Funcionario;

public interface FuncionarioRepository extends JpaRepository <Funcionario, Integer> {
	
	//mas aqui vamos colocar um id dinamico e o último parametro que temos que colocar é para 
	//informar ao spring que essa consulta é uma query nativa do mySQL
	
	@Query (value = "select * from funcionario where id_cargo = :id_cargo", nativeQuery = true)
	List<Funcionario>fetchByCargo(Integer id_cargo);
	
	@Query(value = "SELECT ra_funcionario, fu_nome,fu_cidade,cargo.id_cargo,car_nome,car_descricao FROM cargo right JOIN funcionario ON funcionario.id_cargo = cargo.id_cargo order by fu_nome", nativeQuery = true)
	List <List> funcionariosComCargo();
	

}
