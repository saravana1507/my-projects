package com.library.book.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.library.book.service.Book_Service;
import com.library.book.service.Bookdto;

@Controller
@RequestMapping("/projectbook")
public class Book_Customer_controller {
	
	@Autowired
	Book_Service book;
	
 @RequestMapping("/loginpage") 
 public ModelAndView initial() 
{ 
	 ModelAndView a=new ModelAndView();
	 a.setViewName("Login"); 
	System.out.println("code running");
	 return a; 
}
	 
@RequestMapping("/start")
public ModelAndView First()
{ 
	ModelAndView a=new ModelAndView();
	a.setViewName("Frontpage");
	return a;
}

@RequestMapping("/mainpage")
public ModelAndView second()
{ 
	ModelAndView a=new ModelAndView();
	a.setViewName("Insert");
	return a;
}

@RequestMapping("/insertpage")
public ModelAndView third(Bookdto b)
{ 
	ModelAndView a=new ModelAndView();
	a.addObject("Books",b);
	String in=book.insert(b);
	a.setViewName("Insertsuccessfully");
	return a;
}

@RequestMapping("/deletepage")
public ModelAndView fourth()
{ 
	ModelAndView a=new ModelAndView();
	a.setViewName("Delete");
	return a;
}

@RequestMapping("/deletesuccess")
public ModelAndView fifth()
{ 
	ModelAndView a=new ModelAndView();
	a.setViewName("Deletesuccessfully");
	return a;
}

@RequestMapping("/updatepage")
public ModelAndView sixth()
{ 
	ModelAndView a=new ModelAndView();
	a.setViewName("Update");
	return a;
}

@RequestMapping("/updatesuccess")
public ModelAndView seventh()
{ 
	ModelAndView a=new ModelAndView();
	a.setViewName("Updatesuccessfully");
	return a;
}

@RequestMapping("/displaypage")
public ModelAndView eight()
{ 
	ModelAndView a=new ModelAndView();
	a.setViewName("Display");
	return a;
}


}
