package com.britocorp.dashcard.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.britocorp.dashcard.dao.AgenteFinanceiroDAO;
import com.britocorp.dashcard.model.AgenteFinanceiro;

@RestController	
@CrossOrigin("*")
public class AgenteFinanceiroController {

	@Autowired
	AgenteFinanceiroDAO dao;
	
	@GetMapping("/agentes")
	public ArrayList<AgenteFinanceiro> recuperaTodos(){
		ArrayList<AgenteFinanceiro> lista;
		lista = dao.findAllByOrderByVolumeDesc();
		// lista = dao.findAllByOrderByVolume();
		return lista;
	}
}
