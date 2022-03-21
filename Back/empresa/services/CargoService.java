package soulCode.empresa.services;

import java.util.List;

//import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
//import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;


import soulCode.empresa.model.Cargo;
import soulCode.empresa.model.Funcionario;
import soulCode.empresa.model.Supervisor;
import soulCode.empresa.repository.CargoRepository;
import soulCode.empresa.services.exceptions.ObjectNotFoundException;

import java.util.Optional;

@Service 
public class CargoService {

	@Autowired
	private CargoRepository cargoRepository;
	
	@Lazy
	@Autowired
	private SupervisorService supervisorService;
	
	public List<Cargo>mostrarTodosCargos(){
		return cargoRepository.findAll();
	}
	
public Cargo buscarUmCargo(Integer id_cargo) {
	
	Optional <Cargo> cargo = cargoRepository.findById(id_cargo);
	
	return cargo.orElseThrow (() -> new ObjectNotFoundException("Objeto não cadastrado! O id procurado foi: " + id_cargo));
	
		
}
public Cargo cadastrarCargo(Cargo cargo) {
	cargo.setId_cargo(null);
	return cargoRepository.save(cargo);
}
//Put
		public  Cargo editarCargo(Cargo cargo) {
			buscarUmCargo(cargo.getId_cargo());
			return cargoRepository.save(cargo);
		}
//deletar um cargo
		public void deletarUmCargo (Integer id_cargo) {
			buscarUmCargo(id_cargo);
			
			try {
				cargoRepository.deleteById( id_cargo);	
					}catch (DataIntegrityViolationException e) {
						
						throw new soulCode.empresa.services.exceptions.DataIntegrityViolationException("O cargo não pode ser deletado, pois possui funcionários relacionados");
						
					}
			
			

		}
		
		public Cargo atribuirSupervisor(Integer id_cargo,Integer id_supervisor){
		Cargo cargo = buscarUmCargo(id_cargo);
			Supervisor supervisorAnterior = supervisorService.buscarSupervisorDoCargo(id_cargo);			Supervisor supervisor = supervisorService.mostrarUmSupervisor(id_supervisor);
		if(cargo.getSupervisor()!=null) {
			cargo.setSupervisor(null);
			supervisorAnterior.setCargo(null);
			}
			cargo.setSupervisor(supervisor);
			supervisor.setCargo(cargo);
		return cargoRepository.save(cargo);
		}
		
		
	 
		public List<Cargo> cargoSemSupervisor(){
			return cargoRepository.cargoSemSupervisor();
		}
		
		public Cargo cargoDoSupervisor(Integer id_professor) {
			Cargo cargo = cargoRepository.cargoDoSupervisor(id_professor);
			return cargo;
		}
		

		public List<List> cargoComSeuSupervisor(){
			return cargoRepository.cargoComSeuSupervisor();
		}
		
		
		
		public Cargo deixarCargoSemSupervisor(Integer id_cargo, Integer id_supervisor) {
			Cargo cargo = buscarUmCargo(id_cargo);
			cargo.setSupervisor(null);
			Supervisor supervisor = supervisorService.mostrarUmSupervisor(id_supervisor);
			supervisor.setCargo(null);
			return cargoRepository.save(cargo);
		}
		

}

