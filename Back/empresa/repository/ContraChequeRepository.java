package soulCode.empresa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.empresa.model.ContraCheque;

public interface ContraChequeRepository extends JpaRepository<ContraCheque, Integer> {
	
	@Query(value = "SELECT * FROM bd_empresa.contra_cheque where ra_funcionario= :ra_funcionario", nativeQuery = true)
	List<ContraCheque> buscarContraChequeDoFuncionario(Integer ra_funcionario);

}
