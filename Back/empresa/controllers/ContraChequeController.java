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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import soulCode.empresa.model.ContraCheque;
import soulCode.empresa.services.ContraChequeService;

@CrossOrigin @RestController @RequestMapping("empresa")
public class ContraChequeController {
	
	//vamos fazer injeção de dependência
	@Autowired
	private ContraChequeService contraChequeService;
	
	@GetMapping("/funcionario/contraCheque")
	public List<ContraCheque> BuscarTodosContraCheques(){
		List<ContraCheque> contraCheque = contraChequeService.buscarTodosContraCheques();
		return contraCheque;
	}
	
	@GetMapping("/funcionario/contraCheque/{codigo}")
	public ResponseEntity<ContraCheque> buscarUmContraCheque(@PathVariable Integer codigo){
		ContraCheque contraCheque  = contraChequeService.buscarUmContraCheque(codigo);
		return ResponseEntity.ok().body(contraCheque);
		
	}
	
	@GetMapping("/funcionario/contraChequeDoFuncionario/{ra_funcionario}")
	public List<ContraCheque> buscarContraChequeDoFuncionario(@PathVariable Integer ra_funcionario){
		List<ContraCheque> contraCheque = contraChequeService.buscarContraChequeDoFuncionario(ra_funcionario);
		return contraCheque;
	}
	
	@PostMapping("/funcionario/contraCheque/{ra_funcionario}")
	public ResponseEntity<ContraCheque> inserirContraCheque(@Valid @RequestBody ContraCheque contraCheque , @PathVariable Integer ra_funcionario){
		contraCheque = contraChequeService.inserirContraCheque(contraCheque,ra_funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(contraCheque.getCodigo()).toUri();
		return ResponseEntity.created(uri).build();
		
	}
	@DeleteMapping("/funcionario/contraCheque/{codigo}")
	public ResponseEntity<Void> deletarUmContraCheque(@PathVariable Integer codigo){
		contraChequeService.deletarUmContraCheque(codigo);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/contraCheque/{codigo}/{ra_funcionario}")
	public ResponseEntity<ContraCheque> editarContraCheque(@PathVariable Integer codigo,@PathVariable Integer ra_funcionario, @RequestBody ContraCheque contraCheque){
		contraCheque.setCodigo(codigo);
		contraCheque = contraChequeService.editarContraCheque(contraCheque,ra_funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("funcionario/cancelarContraCheque/{codigo}")
	public ResponseEntity<ContraCheque> cancelarContraCheque(@PathVariable Integer codigo){
		contraChequeService.cancelarContraCheque(codigo);
		return ResponseEntity.noContent().build();
	}


}
