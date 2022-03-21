package soulCode.empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.empresa.model.ContraCheque;
import soulCode.empresa.model.Funcionario;
import soulCode.empresa.model.StatusCh;
import soulCode.empresa.repository.ContraChequeRepository;

@Service
public class ContraChequeService {
	
	@Autowired
	private ContraChequeRepository contraChequeRepository;
	
	@Autowired
	private FuncionarioService funcionarioService;
	
	//vamos implementar um  serviço para buscar todos os contra cheques
	
	public List<ContraCheque> buscarTodosContraCheques(){
		return contraChequeRepository.findAll();
	}
	
	public ContraCheque buscarUmContraCheque(Integer codigo) {
		Optional<ContraCheque> contraCheque = contraChequeRepository.findById(codigo);
		return contraCheque.orElseThrow();
	}
	public List<ContraCheque> buscarContraChequeDoFuncionario(Integer ra_funcionario){
		List<ContraCheque> contraCheque = contraChequeRepository.buscarContraChequeDoFuncionario(ra_funcionario);
		return contraCheque;
	}
	
	public ContraCheque inserirContraCheque(ContraCheque contraCheque, Integer ra_funcionario) {
		contraCheque.setCodigo(null);
		Funcionario funcionario = funcionarioService.buscarUmFuncionario(ra_funcionario);
		contraCheque.setFuncionario(funcionario);
		return contraChequeRepository.save(contraCheque);}
		
		
		
		public void deletarUmContraCheque(Integer codigo) {
			contraChequeRepository.deleteById(codigo);
		}
		
		public ContraCheque editarContraCheque(ContraCheque contraCheque, Integer ra_funcionario) {
			buscarUmContraCheque(contraCheque.getCodigo());
			Funcionario funcionario = funcionarioService.buscarUmFuncionario(ra_funcionario);
			contraCheque.setFuncionario(funcionario);
			return contraChequeRepository.save(contraCheque);
		}
		
		public ContraCheque cancelarContraCheque(Integer codigo) {
			ContraCheque contraCheque = buscarUmContraCheque(codigo);
			StatusCh st1 = StatusCh.CANCELADO;
			contraCheque.setCh_status(st1);
			return contraChequeRepository.save(contraCheque);
		}

		
	}


