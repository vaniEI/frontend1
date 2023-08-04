package com.skyexchange.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class MainController {

	@GetMapping("/")
	public String admin() {
		return "index";
	}
	
	@GetMapping(value = "/home")
	public String home() {
		return "home";
	}

	@GetMapping(value = "/account")
	public String account() {
		return "myaccount";
	}

	@GetMapping(value = "/profitdownline")
	public String profitdownline() { 
		return "profit-downline";
	}

	@GetMapping(value = "/profitmarket")
	public String profitmarket() { 
		return "profit-market";
	}

	@GetMapping(value = "/betlist")
	public String betlist() { 
		return "betlist";
	}

	@GetMapping(value = "/riskmanagement")
	public String riskmanagement() { 
		return "risk-management";
	}

	@GetMapping(value = "/banking")
	public String banking() { 
		return "banking";
	}

	@GetMapping(value = "/profile")
	public String profile() { 
		return "profile";
	}

	@GetMapping(value = "/activitylog")
	public String activitylog() { 
		return "activity-log";
	}

	@GetMapping(value = "/accountstatement")
	public String accountstatement() { 
		return "account-statement";
	}

}
