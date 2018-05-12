package com.project.portfoliomanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class PortfoliomanagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortfoliomanagerApplication.class, args);
	}
}
