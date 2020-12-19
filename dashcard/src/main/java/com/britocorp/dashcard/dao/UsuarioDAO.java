package com.britocorp.dashcard.dao;

import org.springframework.data.repository.CrudRepository;

import com.britocorp.dashcard.model.Usuario;

public interface UsuarioDAO extends CrudRepository <Usuario, Integer>{

	public Usuario findByEmailAndSenha(String email, String senha);
	
	public Usuario findByEmailOrRacf(String email, String racf);
}
