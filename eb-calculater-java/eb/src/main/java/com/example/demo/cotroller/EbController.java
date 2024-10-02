package com.example.demo.cotroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.service.EbService;

@Controller
@RequestMapping("/calc")
public class EbController {
	 @Autowired
	 EbService dto;
	 
	 @RequestMapping("/welcome")
	 public ModelAndView start()
	 {
		 ModelAndView ob= new ModelAndView();
		 ob.setViewName("login");
		 System.out.println("completed");
		 return ob;
	 }
	 
	 @RequestMapping("/result")
	 public void calculator(@RequestParam int unit)
	 {
		 dto.ebCalculater(unit);
		 ModelAndView ob= new ModelAndView();
		 ob.addObject("eb",dto);
		 ob.setViewName(null);
	 }

}
