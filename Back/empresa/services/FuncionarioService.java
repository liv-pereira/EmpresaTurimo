package soulCode.empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.empresa.model.Cargo;
import soulCode.empresa.model.Funcionario;
import soulCode.empresa.repository.FuncionarioRepository;

@Service
public class FuncionarioService {
	
	//fazendo a injeção de dependência
		@Autowired
		//chamando a interface de funcionario repository e vamos instanciar através de um objeto
		private FuncionarioRepository funcionarioRepository;
		
		@Autowired
		private CargoService cargoService;
		
		public List <Funcionario> mostrarTodosFuncionarios(){
			
			return funcionarioRepository.findAll();
			
		}
		
		//serviço para listar apenas um funcionário
		//nesse momento vou buscar pelo id mas pode ser por vários coisas como nome, nome responsavel etc
		public Funcionario buscarUmFuncionario (Integer ra_funcionario) {
			Optional <Funcionario> funcionario = funcionarioRepository.findById(ra_funcionario);
			return funcionario.orElseThrow();
			
		}
		
		public Funcionario InserirFuncionario (Funcionario funcionario) {
			return funcionarioRepository.save(funcionario);			
		}
		//aqui eu já coloco o funcionário dentro do cargo		
public Funcionario InserirFuncionario (Integer id_cargo, Funcionario funcionario) {
			funcionario.setRa_funcionario(null);	
			Cargo cargo = cargoService.buscarUmCargo(id_cargo);
			funcionario.setCargo(cargo);
			return funcionarioRepository.save(funcionario);
			
		}
		
		public void deletarUmFuncionario(Integer ra_funcionario) {
			funcionarioRepository.deleteById(ra_funcionario);
		}
		
		public Funcionario editarFuncionario(Funcionario funcionario) {
			buscarUmFuncionario(funcionario.getRa_funcionario());
			return funcionarioRepository.save(funcionario);
		}
		
		public List <Funcionario> buscarFuncionarioCargo (Integer id_cargo){
			List<Funcionario> funcionario = funcionarioRepository.fetchByCargo(id_cargo);
			return funcionario;
		}
		
		public List<List> funcionariosComCargo(){
			return funcionarioRepository.funcionariosComCargo();
		}
		//inclusão carnaval
		public Funcionario inserirFuncionarioNoCargo(Integer ra_funcionario, Cargo cargo) {
			Funcionario funcionario = buscarUmFuncionario(ra_funcionario);
			funcionario.setCargo(cargo);
			return funcionarioRepository.save(funcionario);
		}
		public Funcionario deixarFuncionarioSemCargo(Integer ra_funcionario) {
			Funcionario funcionario = buscarUmFuncionario(ra_funcionario);
			funcionario.setCargo(null);
			return funcionarioRepository.save(funcionario);
		}
		public Funcionario inserirFuncionario(Funcionario funcionario) {
			funcionario.setRa_funcionario(null);
			return funcionarioRepository.save(funcionario);
		}
		
		
		
		

}
