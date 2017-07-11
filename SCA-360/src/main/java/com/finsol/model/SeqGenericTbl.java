package com.finsol.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class SeqGenericTbl {


	
	@Id
	private String seqname;
	
	@Column 
	private long seqno;



	public String getSeqname() {
		return seqname;
	}

	public void setSeqname(String seqname) {
		this.seqname = seqname;
	}

	public long getSeqno() {
		return seqno;
	}

	public void setSeqno(long seqno) {
		this.seqno = seqno;
	}

	
	
}
