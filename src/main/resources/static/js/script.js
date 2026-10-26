(() => {
    const root = document.documentElement;
    const themeButton = document.querySelector('.tema-toggle');
    const menuButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const links = [...document.querySelectorAll('.menu__link')];
    const sections = [...document.querySelectorAll('main .secao[id]')];
    const mobile = window.matchMedia('(max-width: 800px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function applyTheme(theme) {
        root.dataset.tema = theme;
        themeButton.textContent = theme === 'claro' ? 'Tema escuro' : 'Tema claro';
        themeButton.setAttribute('aria-pressed', String(theme === 'claro'));
        themeButton.setAttribute('aria-label', `Ativar ${themeButton.textContent.toLowerCase()}`);
    }

    let savedTheme;
    try { savedTheme = localStorage.getItem('portfolio-tema'); } catch { /* Storage may be unavailable. */ }
    applyTheme(savedTheme === 'claro' ? 'claro' : 'escuro');
    themeButton.hidden = false;
    themeButton.addEventListener('click', () => {
        const theme = root.dataset.tema === 'claro' ? 'escuro' : 'claro';
        applyTheme(theme);
        try { localStorage.setItem('portfolio-tema', theme); } catch { /* Theme still works without storage. */ }
    });

    function closeMenu(returnFocus = false) {
        menu.classList.remove('menu--aberto');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = 'Menu';
        if (returnFocus) menuButton.focus();
    }
    menuButton.addEventListener('click', () => {
        const open = menu.classList.toggle('menu--aberto');
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.textContent = open ? 'Fechar' : 'Menu';
    });
    links.forEach(link => link.addEventListener('click', () => closeMenu()));
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menu.classList.contains('menu--aberto')) closeMenu(true);
    });
    document.addEventListener('click', event => {
        if (!menu.contains(event.target)) closeMenu();
    });
    menu.addEventListener('focusout', event => {
        if (!menu.contains(event.relatedTarget)) closeMenu();
    });
    mobile.addEventListener('change', () => closeMenu());
    menuButton.hidden = false;
    root.classList.add('js');

    // Use section positions so short sections and the end of the page also work.
    function updateActiveSection() {
        const offset = document.querySelector('.cabecalho').offsetHeight + 32;
        let active = sections[0];
        for (const section of sections) {
            if (section.getBoundingClientRect().top <= offset) active = section;
        }
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
            active = sections[sections.length - 1];
        }
        links.forEach(link => {
            const selected = link.hash === `#${active.id}`;
            link.classList.toggle('menu__link--ativo', selected);
            if (selected) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
    }
    let scheduled = false;
    window.addEventListener('scroll', () => {
        if (!scheduled) {
            scheduled = true;
            requestAnimationFrame(() => { updateActiveSection(); scheduled = false; });
        }
    }, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();

    if ('IntersectionObserver' in window && !reducedMotion.matches) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('revelar');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
        sections.filter(section => section.getBoundingClientRect().top >= window.innerHeight)
            .forEach(section => { section.classList.add('revelar'); observer.observe(section); });
        reducedMotion.addEventListener('change', () => {
            if (reducedMotion.matches) {
                sections.forEach(section => section.classList.remove('revelar'));
                observer.disconnect();
            }
        });
    }
})();