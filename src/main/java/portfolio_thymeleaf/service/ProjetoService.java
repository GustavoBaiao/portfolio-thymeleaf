package portfolio_thymeleaf.service;

import org.springframework.stereotype.Service;
import portfolio_thymeleaf.model.Projeto;

import java.util.List;

@Service
public class ProjetoService {

    public List<Projeto> listarProjetos() {
        return List.of(
                new Projeto(
                        "ProvaSmart",
                        "Plataforma de preparação para o ENEM com banco de questões, simulados e análise de desempenho.",
                        "Java, Spring Boot, Spring Security, JPA/Hibernate, PostgreSQL, Flyway e React",
                        "https://github.com/provasmart2026/provasmart-backend"
                ),
                new Projeto(
                        "LoginSeguro",
                        "Sistema de cadastro e autenticação de usuários com controle de acesso por perfis.",
                        "Java, Spring Boot, Thymeleaf, Spring Security, MongoDB Atlas e JWT",
                        "https://github.com/GustavoBaiao/LoginSeguro"
                )
        );
    }
}
