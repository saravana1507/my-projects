package com.library.book.service;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import jakarta.transaction.Transactional;

public interface Book_repository extends CrudRepository<book_details,Integer>
		{
		
		// @Transactional represent the method and class should be executed 
		//it is maintain both class and method level 
	@Transactional			
		
		//@modifying @query annotation used for we put the use define query for the database so  
		//@Query is user defined query for communicate the database 
		// we call with "Alise".column name 

	@Modifying 				
	@Query("update books elies set elies.book_id = ?1 where book_name = ?2") 
																			
	  void update ( Integer book_id , String book_name);
		}




