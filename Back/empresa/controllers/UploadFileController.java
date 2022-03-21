package soulCode.empresa.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import soulCode.empresa.services.SupervisorService;
import soulCode.empresa.utils.UploadFileUtil;

@RestController
@RequestMapping("empresa")
@CrossOrigin
public class UploadFileController {
	
	@Autowired
	SupervisorService supervisorService;
	
	
	@PostMapping("/envio/{id_supervisor}")
	public ResponseEntity<String> enviarDados(@PathVariable Integer id_supervisor,MultipartFile foto,@RequestParam(value="nome") String nome){
		
		String fileName = nome;
		
		
		String uploadDir = "/Users/Lívia/Desktop/bootcamp - BCW7/Java/frontEmpresa_3/frontEmpresa3/src/assets/Imagens_java";
		String nomeMaisCaminho =  "assets/Imagens_java/" + nome;
		
	supervisorService.salvarFoto(id_supervisor, nomeMaisCaminho);
		
		
		try {
			UploadFileUtil.salvarArquivo(uploadDir, fileName, foto);
			
		}catch(Exception e) {
			System.out.println("O arquivo não foi enviado" + e);
		}
		
		System.out.println("Deu certo:" + nomeMaisCaminho);
		return ResponseEntity.ok("Arquivo enviado");
		
	}

}
