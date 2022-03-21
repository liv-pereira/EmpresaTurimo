package soulCode.empresa.model;

public enum StatusCh {
	
	//colocar o formato que deve aparecer para o usuário ()
	PENDENTE ("Pendente"),
	EMITIDO ("Emitido"),
	CANCELADO ("Cancelado");
	
	private String descricao;
	
	StatusCh(String descricao){
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}
	

}
