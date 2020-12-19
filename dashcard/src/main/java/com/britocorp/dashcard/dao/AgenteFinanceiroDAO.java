package com.britocorp.dashcard.dao;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import com.britocorp.dashcard.model.AgenteFinanceiro;

public interface AgenteFinanceiroDAO extends CrudRepository<AgenteFinanceiro, Integer> {

	public ArrayList<AgenteFinanceiro> findAllByOrderByVolumeDesc();
	// public ArrayList<AgenteFinanceiro> findAllByOrderByVolume();
}
