package portfolio_thymeleaf.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import portfolio_thymeleaf.service.ProjetoService;

@Controller
@RequiredArgsConstructor
public class HomeController {

    private final ProjetoService projetoService;

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("nome", "Gustavo Gonçalves Baião");
        model.addAttribute("profissão", "Desenvolvedor Back-end Java");
        model.addAttribute("projetos", projetoService.listarProjetos());
        return "index";
    }
}
