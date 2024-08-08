package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/drawingWebApp")
public class HomeController {
	
	@GetMapping("")
	public ModelAndView index(ModelAndView mav) {
		
		mav.addObject("message", "Hello,SpringBoot!");
		
		mav.setViewName("index");
		
		return mav;
	}

}
