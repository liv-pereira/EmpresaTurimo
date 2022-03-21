package soulCode.empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.empresa.model.Cargo;
import soulCode.empresa.model.Funcionario;
import soulCode.empresa.model.Supervisor;
import soulCode.empresa.repository.CargoRepository;
import soulCode.empresa.repository.SupervisorRepository;

@Service

public class SupervisorService {
	
	@Autowired
	private SupervisorRepository supervisorRepository;
	
	@Autowired
	private CargoService cargoService;

	@Autowired
	private CargoRepository cargoRepository;
	
	public List<Supervisor> mostrarTodosSupervisores(){
		return supervisorRepository.findAll();	
	}
	
	public Supervisor mostrarUmSupervisor(Integer id_supervisor) {
		Optional<Supervisor> supervisor = supervisorRepository.findById(id_supervisor);
		return supervisor.orElseThrow();
	}
	
	public Supervisor inserirSupervisor(Integer id_cargo, Supervisor supervisor){
		supervisor.setId_supervisor(null);
		if (id_cargo != null){
			Cargo cargo = cargoService.buscarUmCargo(id_cargo);
			supervisor.setCargo(cargo);
			
		}
		return supervisorRepository.save(supervisor);	
}
	
//public Supervisor editarSupervisor(Integer id_cargo, Supervisor supervisor){
//		
//		if(id_cargo != null){
//			Supervisor dadosSuperAntesDaMudanca = mostrarUmSupervisor(supervisor.getId_supervisor());
//		  	Cargo cargoAnterior = dadosSuperAntesDaMudanca.getCargo();
//			  if(cargoAnterior != null){
//				cargoAnterior.setSupervisor(null);
//		  		cargoRepository.save(cargoAnterior);
//			  }
//		  	
//	
//		  	Cargo cargo = cargoService.buscarUmCargo(id_cargo);
//		  	supervisor.setCargo(cargo);
//		  	cargo.setSupervisor(supervisor);
//		}
//		return supervisorRepository.save(supervisor);
//	  }

//public Supervisor buscarSupervisorDoCargo(Integer id_cargo){
//	Supervisor supervisor = supervisorRepository.buscarSupervisorDoCargo(id_cargo);
//	return supervisor;
//}
	
	

public Supervisor buscarSupervisorDoCargo(Integer id_cargo){
	Supervisor supervisor = supervisorRepository.fetchByCargo(id_cargo);
	return supervisor;
}

	public List <Supervisor> supervisorSemCargo() {
		return supervisorRepository.supervisorSemCargo();
	}
	
	public Supervisor salvarFoto(Integer id_supervisor, String caminhoFoto) {
		Supervisor supervisor = mostrarUmSupervisor(id_supervisor);
		supervisor.setSup_foto(caminhoFoto);
		return supervisorRepository.save(supervisor);
	}
	
	public Supervisor buscarSupervisorPeloNome(String sup_nome){
		Supervisor supervisor = supervisorRepository.fetchByName(sup_nome);
		return supervisor;
	}
	
	public List<List> supervisorComSeuCargo(){
		return supervisorRepository.SupervisorComSeuCargo();
	}
	
	public Supervisor editarSupervisor(Supervisor supervisor) {
		mostrarUmSupervisor(supervisor.getId_supervisor());
		return supervisorRepository.save(supervisor);
	}
	
	public void deletarUmSupervisor(Integer id_supervisor) {
		supervisorRepository.deleteById(id_supervisor);
	}
	
	

	


}
	
