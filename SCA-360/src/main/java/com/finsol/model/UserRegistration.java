package com.finsol.model;

import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author Rama Krishna
 *
 */
@Entity
public class UserRegistration {

	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue
    protected Long id;

    @Column(unique = true, nullable = false, updatable = false, length = 36)
    protected String uuid = UUID.randomUUID().toString();

    @Column
    private String name;
    
    @Column
    private Integer age;
    
    
    public Long getId()
    {
        return id;
    }

    public void setId(Long databaseId)
    {
        this.id = databaseId;
    }

    public String getUuid()
    {
        return uuid;
    }

    public void setUuid(String uuid)
    {
        this.uuid = UUID.fromString(uuid).toString();
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	/**
     * The current implementation makes a loose check for class equivalence. We cannot make a simple class equality check as CGLIB creates a proxy
     * class with a difference name. Because of the proxy class, we need to prevent referring directly to non final fields from final methods and use
     * getters instead.
     */
    @Override
    public final boolean equals(Object other)
    {
        if (other instanceof BaseEntity)
        {
            return (other != null && getUuid().equals(((BaseEntity) other).getUuid()))
                    && ((other.getClass().isAssignableFrom(this.getClass()))
                            || (this.getClass().isAssignableFrom(other.getClass())));
        }

        return false;
    }

    @Override
    public final int hashCode()
    {
        return getUuid().hashCode();
    }

    @Override
    public String toString()
    {
        return new StringBuffer().append('[').append(getClass().getName()).append(' ').append(getUuid()).append(']').toString();
    }
}
