package com.wsu.ordermasterservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//SpringBootApplication(scanBasePackages = {"controller","service","model", "repository"})
@SpringBootApplication
public class OrderMasterServiceApplication {

	/**
	 * SpringBoot Starter method on embedded tomcat server
	 * @param args - Allow to pass String array JVM arguments to set value dynamically during runtime
	 */
	public static void main(String[] args) {
		SpringApplication.run(OrderMasterServiceApplication.class, args);
	}
}