package com.skyexchange.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

	@RequestMapping("/")
	public String admin(Model model) {
		model.addAttribute("title", "Login - Sky Exchange");
		return "index";
	}
	
	@RequestMapping("/home")
	public String home(Model model) {
		model.addAttribute("title", "Home - Sky Exchange");
		return "home";
	}

	@RequestMapping("/account")
	public String account() {
		return "myaccount";
	}

	@RequestMapping("/profitdownline")
	public String profitdownline() { 
		return "profit-downline";
	}

	@RequestMapping("/profitmarket")
	public String profitmarket() { 
		return "profit-market";
	}

	@RequestMapping("/betlist")
	public String betlist() { 
		return "betlist";
	}

	@RequestMapping("/riskmanagement")
	public String riskmanagement() { 
		return "risk-management";
	}

	@RequestMapping("/banking")
	public String banking() { 
		return "banking";
	}

	@RequestMapping("/profile")
	public String profile() { 
		return "profile";
	}

	@RequestMapping("/activitylog")
	public String activitylog() { 
		return "activity-log";
	}

	@RequestMapping("/accountstatement")
	public String accountstatement() { 
		return "account-statement";
	}

}
