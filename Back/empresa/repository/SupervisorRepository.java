package soulCode.empresa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.empresa.model.Supervisor;

public interface SupervisorRepository extends JpaRepository <Supervisor, Integer> {
	
//	@Query(value="SELECT * FROM supervisor WHERE id_cargo = :id_cargo", nativeQuery = true)
//	Supervisor buscarSupervisorDoCargo(Integer id_cargo);
	
	@Query(value="SELECT * FROM supervisor WHERE id_cargo is null", nativeQuery = true)
	List<Supervisor>supervisorSemCargo();
	
	@Query(value = "SELECT * FROM supervisor WHERE sup_nome = :sup_nome", nativeQuery = true)
	Supervisor fetchByName(String sup_nome);
	
	@Query(value = "SELECT supervisor.id_supervisor,supervisor.sup_nome,supervisor.sup_setor, supervisor.sup_foto, cargo.id_cargo,cargo.car_descricao,cargo.car_nome FROM cargo right JOIN supervisor ON supervisor.id_cargo = cargo.id_cargo order by supervisor.sup_nome;",nativeQuery = true)
	List<List> SupervisorComSeuCargo();
	
	@Query(value = "SELECT * FROM supervisor WHERE id_cargo = :id_cargo", nativeQuery = true)
	Supervisor fetchByCargo(Integer id_cargo);

}	
