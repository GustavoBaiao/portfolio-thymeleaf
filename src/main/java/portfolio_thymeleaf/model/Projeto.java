package portfolio_thymeleaf.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Projeto {

    private String nome;
    private String descricao;
    private String tecnologias;
    private String linkGithub;
}
