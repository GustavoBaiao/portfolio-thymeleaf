# Portfólio com Spring Boot e Thymeleaf

Portfólio de **Gustavo Gonçalves Baião**, Desenvolvedor Back-end Java, desenvolvido para a disciplina de Programação para Internet.

O projeto utiliza Spring Boot e Thymeleaf para apresentar informações pessoais, tecnologias e projetos. O Controller recebe a requisição, consulta o serviço e envia os dados para o template HTML.

## Tecnologias

- Java 25
- Spring Boot 4.1.2 e Spring MVC
- Thymeleaf
- Lombok
- HTML5, CSS3 e JavaScript
- Maven Wrapper

## Funcionalidades

- Apresentação com nome e profissão enviados pelo backend.
- Seções de apresentação, sobre mim, tecnologias, projetos e contato.
- Listagem dinâmica dos projetos ProvaSmart e LoginSeguro com `th:each`.
- Exibição dos dados com `th:text`.
- Layout responsivo com destaques em roxo.
- Cabeçalho visível durante a rolagem e destaque da seção atual no menu.
- Alternância entre tema claro e escuro, com preferência salva no navegador.
- Animações ao rolar, respeitando a preferência por movimento reduzido.
- Menu mobile com abertura e fechamento por botão.

Os projetos são definidos em memória no `ProjetoService`. A aplicação não utiliza banco de dados.

## Organização

| Local | Responsabilidade |
| --- | --- |
| `src/main/java/portfolio_thymeleaf/controller/HomeController.java` | Atende a rota `/` e envia os dados ao template. |
| `src/main/java/portfolio_thymeleaf/model/Projeto.java` | Representa nome, descrição, tecnologias e link do GitHub de um projeto. |
| `src/main/java/portfolio_thymeleaf/service/ProjetoService.java` | Fornece a lista de projetos. |
| `src/main/resources/templates/index.html` | Estrutura da página e expressões Thymeleaf. |
| `src/main/resources/static/css/style.css` | Estilos, temas e responsividade. |
| `src/main/resources/static/js/script.js` | Interações da página. |
| `src/main/resources/application.yaml` | Configuração da aplicação. |

## Como executar

É necessário ter o **JDK 25** instalado e configurado no `JAVA_HOME`. Na primeira execução, o Maven Wrapper precisa de acesso à internet para baixar o Maven e as dependências.

Na pasta do projeto, execute:

**Windows (PowerShell):**

```powershell
.\mvnw.cmd spring-boot:run
```

**Linux ou macOS:**

```bash
./mvnw spring-boot:run
```

Também é possível abrir o projeto no IntelliJ IDEA, importar as dependências Maven e executar a classe `PortfolioThymeleafApplication`.

Após iniciar a aplicação, acesse [http://localhost:8080](http://localhost:8080).

Abra a página pelo servidor para que o Thymeleaf processe os dados e os arquivos estáticos sejam carregados.

## Testes

Para executar os testes existentes:

```powershell
.\mvnw.cmd test
```

Em Linux ou macOS, utilize `./mvnw test`.

## Personalização

- **Nome e profissão:** altere os atributos enviados pela `HomeController`.
- **Projetos:** atualize a lista no método `listarProjetos()` de `ProjetoService`.
- **Textos e links de contato:** edite `templates/index.html`.
- **Visual e cores:** edite `static/css/style.css`.
- **Interações:** edite `static/js/script.js`.

## Autor

**Gustavo Gonçalves Baião** — Desenvolvedor Back-end Java

[GitHub](https://github.com/GustavoBaiao)