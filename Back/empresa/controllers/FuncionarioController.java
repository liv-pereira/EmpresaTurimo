package soulCode.empresa.controllers;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import soulCode.empresa.model.Cargo;
import soulCode.empresa.model.Funcionario;
import soulCode.empresa.repository.FuncionarioRepository;
import soulCode.empresa.services.FuncionarioService;


@CrossOrigin
@RestController
@RequestMapping("empresa")


public class FuncionarioController {
	
	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@Autowired
	private FuncionarioService funcionarioService;
	
	@GetMapping("/funcionario")
	public List<Funcionario> mostrarTodosFuncionarios(){
		//o controler tem que chamar o serviço
		List<Funcionario> funcionario = funcionarioService.mostrarTodosFuncionarios();
		return funcionario;
		
	}
	@GetMapping("/funcionario/{ra_funcionario}")
	public ResponseEntity<?> buscarUmFuncionario(@PathVariable Integer ra_funcionario){
		Funcionario funcionario = funcionarioService.buscarUmFuncionario(ra_funcionario);
		return ResponseEntity.ok().body(funcionario);
	}
	
	@GetMapping("/funcionario/busca-cargo/{id_cargo}")
	public List<Funcionario> buscarFuncionarioCargo(@PathVariable Integer id_cargo){
		List<Funcionario> funcionario = funcionarioService.buscarFuncionarioCargo(id_cargo);
		return funcionario;
	}
	
//	

//	 @PostMapping("/funcionario")
//		public ResponseEntity<Funcionario> InserirFuncionario(@RequestParam(value="cargo") Integer id_cargo, @RequestBody @Valid  Funcionario funcionario){
//			funcionario = funcionarioService.InserirFuncionario(id_cargo, funcionario);
//			URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/funcionario/{id}")
//					.buildAndExpand(funcionario.getRa_funcionario()).toUri();	
//			return ResponseEntity.created(uri).build();
//			
//		}

	
	@DeleteMapping("/funcionario/{ra_funcionario}")
	public ResponseEntity<Void> deletarUmFuncionario(@PathVariable Integer ra_funcionario){
		funcionarioService.deletarUmFuncionario(ra_funcionario);
		return ResponseEntity.noContent().build();
	}
	
//	@PutMapping("/funcionario/{ra_funcionario}")
//	public ResponseEntity <Void> editarFuncionario(@PathVariable Integer ra_funcionario, @RequestBody Funcionario funcionario){
//		funcionario.setRa_funcionario(ra_funcionario);
//		funcionario = funcionarioService.editarFuncionario(funcionario);
//		return 	ResponseEntity.noContent().build();
//		
//	}
//	//esse editar é vinculado ao valor do cargo
//	@PutMapping("/funcionario/{ra_funcionario}")
//	public ResponseEntity<Void> editarFuncionario(@RequestParam(value = "cargo")Cargo cargo, @PathVariable Integer ra_funcionario, @RequestBody Funcionario funcionario){
//		funcionario.setRa_funcionario(ra_funcionario);
//		funcionario.setCargo(cargo);
//		funcionario = funcionarioService.editarFuncionario(funcionario);
//	return 	ResponseEntity.noContent().build();
//	}
	
		
	@GetMapping("/funcionario-cargo")
	public List<List> funcionariosComCargo (){
		List <List> funcionarioCargo = funcionarioService.funcionariosComCargo();
		return funcionarioCargo;
	}
	
	//mudanças carnaval
	@PutMapping("/funcionario/inserircargo/{ra_funcionario}")
	public ResponseEntity<Funcionario> inserirFuncionarioNoCargo(@PathVariable Integer ra_funcionario, @RequestBody Cargo cargo){
		Funcionario funcionario = funcionarioService.inserirFuncionarioNoCargo(ra_funcionario, cargo);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/deixarSemCargo/{ra_funcionario}")
	public ResponseEntity<Funcionario> deixarFuncionarioSemCargo(@PathVariable Integer ra_funcionario){
		Funcionario funcionario = funcionarioService.deixarFuncionarioSemCargo(ra_funcionario);
		return ResponseEntity.noContent().build();
	}

	@PostMapping("/funcionario")
	public ResponseEntity<Funcionario> inserirFuncionario(@Valid @RequestBody Funcionario funcionario ){
		funcionario = funcionarioService.inserirFuncionario(funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(funcionario.getRa_funcionario()).toUri();
		return ResponseEntity.created(uri).build();
		
	}
	
//mudança do editar funcionario que não é vinculado ao Cargo
	@PutMapping("/funcionario/{ra_funcionario}")
	public ResponseEntity<Void> editarFuncionario(@PathVariable Integer ra_funcionario, @RequestBody Funcionario funcionario){
		funcionario.setRa_funcionario(ra_funcionario);
		funcionario = funcionarioService.editarFuncionario(funcionario);
		return ResponseEntity.noContent().build();
	}
	

}
