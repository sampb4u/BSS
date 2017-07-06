package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
/**
 * @author Naidu
 *
 */
@Entity
public class Stage {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Integer id;
	
	@Column(nullable = false)
	private Integer stage;
	
	@Column(nullable = false)
	private String stagecode;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getStage() {
		return stage;
	}

	public void setStage(Integer stage) {
		this.stage = stage;
	}

	public String getStagecode() {
		return stagecode;
	}

	public void setStagecode(String stagecode) {
		this.stagecode = stagecode;
	}
	
}
