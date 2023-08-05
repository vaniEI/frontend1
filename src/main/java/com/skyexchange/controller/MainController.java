package com.skyexchange.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {

	@RequestMapping(value ="/",  method=RequestMethod.GET)
	public String admin() {
		return "index";
	}
	
	@RequestMapping(value = "/home",  method=RequestMethod.GET)
	public String home() {
		return "home";
	}

	@RequestMapping(value = "/account",  method=RequestMethod.GET)
	public String account() {
		return "myaccount";
	}

	@RequestMapping(value = "/profitdownline",  method=RequestMethod.GET)
	public String profitdownline() { 
		return "profit-downline";
	}

	@RequestMapping(value = "/profitmarket",  method=RequestMethod.GET)
	public String profitmarket() { 
		return "profit-market";
	}

	@RequestMapping(value = "/betlist",  method=RequestMethod.GET)
	public String betlist() { 
		return "betlist";
	}

	@RequestMapping(value = "/riskmanagement",  method=RequestMethod.GET)
	public String riskmanagement() { 
		return "risk-management";
	}

	@RequestMapping(value = "/banking",  method=RequestMethod.GET)
	public String banking() { 
		return "banking";
	}

	@RequestMapping(value = "/profile",  method=RequestMethod.GET)
	public String profile() { 
		return "profile";
	}

	@RequestMapping(value = "/activitylog",  method=RequestMethod.GET)
	public String activitylog() { 
		return "activity-log";
	}

	@RequestMapping(value = "/accountstatement",  method=RequestMethod.GET)
	public String accountstatement() { 
		return "account-statement";
	}

}
