package com.skyexchange;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.skyexchange.controller")
public class SkyExchangeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkyExchangeApplication.class, args);
	}

}
