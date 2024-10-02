package com.library.book.service;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Book_Service {

	@Autowired
	private  Book_repository br;
	
	public String insert(Bookdto b)
	{
		book_details o = new book_details();
		
		o.setBook_id(b.getBook_id());
		o.setBook_name(b.getBook_name());
		o.setAuthor_name(b.getAuthor_name());
		o.setPublication(b.getPublication());
		o.setPublished_year(b.getPublished_year());
		o.setBook_cost(b.getBook_cost());
		
		book_details z= br.save(o);
		         
		         if(z.equals(null))
		         {
		        	 return "unsuccess";
		         }
		         else
		         {
		        	 return "success";
		         }
	}

	public Bookdto getBook(Integer id) 
	{
		Optional <book_details> opt= br.findById(id);
		
		book_details b = opt.orElseThrow();
		
		Bookdto bs =new Bookdto();  
		
		// we create the obj for the DTO object and ENTITY object 
		// The ENTITY object ( set into the DTO object ) return the value to the DTO object 
	
		bs.setBook_id(b.getBook_id());
		bs.setBook_name(b.getBook_name());
		bs.setAuthor_name(b.getAuthor_name());
		bs.setPublication(b.getPublication());
		bs.setPublished_year(b.getPublished_year());
		bs.setBook_cost(b.getBook_cost());
		
		return bs ;	 
	}
	
	public String deleteBook(Integer book_id)
	{
		
		System.out.println("Delete service reached");
		
		Optional<book_details> dl = br.findById(book_id);
		
        br.deleteById(book_id);        
		
        if(dl.isEmpty())
        {
        	return"NOT-delete";
        }
        else
        {
        	return"Deleted";
        }
        
	}    
        public List<Bookdto> findallservice()
        {
        	System.out.println("findall service reached");
        	Iterable<book_details> itr2 = br.findAll();
        	
        	Iterator<book_details> iterator = itr2.iterator();
        	
        	List<Bookdto> booklist = new ArrayList<>();
        	
        	while(iterator.hasNext())
        	{
        		book_details  e = iterator.next();
        		
        		Bookdto b1 = new Bookdto();
        		
        		b1.setBook_id(e.getBook_id());
        		b1.setBook_name(e.getBook_name());
        		b1.setAuthor_name(e.getAuthor_name());
        		b1.setPublication(e.getPublication());
        		b1.setPublished_year(e.getPublished_year());
        		b1.setBook_cost(e.getBook_cost());
        		
        		booklist.add(b1);	
        	}
        	
        	return  booklist;
        }
        
        public String updatedetailservice(Integer id, String book_name)
        {
        	br.update(id, book_name);
        	
        	return "update";
        }
}
