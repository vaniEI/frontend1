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
	public String account(Model model) {
		model.addAttribute("title", "Account - Sky Exchange");
		return "myaccount";
	}

	@RequestMapping("/profitdownline")
	public String profitdownline(Model model) {
		model.addAttribute("title", "Profit Downline - Sky Exchange");
		return "profit-downline";
	}

	@RequestMapping("/profitmarket")
	public String profitmarket(Model model) {
		model.addAttribute("title", "Profit Market - Sky Exchange");
		return "profit-market";
	}

	@RequestMapping("/betlist")
	public String betlist(Model model) {
		model.addAttribute("title", "Betlist - Sky Exchange");
		return "betlist";
	}

	@RequestMapping("/riskmanagement")
	public String riskmanagement(Model model) {
		model.addAttribute("title", "Risk Management - Sky Exchange");
		return "risk-management";
	}

	@RequestMapping("/banking")
	public String banking(Model model) {
		model.addAttribute("title", "Banking - Sky Exchange");
		return "banking";
	}

	@RequestMapping("/profile")
	public String profile(Model model) {
		model.addAttribute("title", "Profile - Sky Exchange");
		return "profile";
	}

	@RequestMapping("/activitylog")
	public String activitylog(Model model) {
		model.addAttribute("title", "Activity Log - Sky Exchange");
		return "activity-log";
	}

	@RequestMapping("/accountstatement")
	public String accountstatement(Model model) {
		model.addAttribute("title", "Account Statement - Sky Exchange");
		return "account-statement";
	}

}
