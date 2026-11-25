package com.atelier.store.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuration class to enable CORS for the Atelier Store API.
 * Allows requests from the frontend development environment (http://localhost:4200)
 * to access all API endpoints under /api/**.
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                // Allow origins from the Angular development server
                .allowedOrigins("http://localhost:4200")
                // Specify allowed HTTP methods
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                // Allow credentials (like cookies, authorization headers)
                .allowCredentials(true);
    }
}