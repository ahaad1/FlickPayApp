package com.flickpay.FlickPay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class FlickPayApplication {
	public static void main(String[] args) {
		SpringApplication.run(FlickPayApplication.class, args);
	}
}
