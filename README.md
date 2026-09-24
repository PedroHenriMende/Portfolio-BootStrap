# Pedro Henrique — Portfólio Pessoal

Portfólio pessoal construído com **HTML5, Bootstrap 5.3 e JavaScript puro (Vanilla JS)**. O CSS próprio é mínimo de propósito: praticamente tudo do layout, componentes e tema (claro/escuro) vem direto do Bootstrap.

## ✨ Funcionalidades

- Sidebar de navegação vertical (desktop) com destaque automático da seção visível, via **Scrollspy** do Bootstrap
- No mobile, a sidebar vira uma barra fixa no topo que abre o menu em uma gaveta lateral (**Offcanvas** do Bootstrap)
- Dark / Light mode nativo do Bootstrap (`data-bs-theme`), padrão: dark
- Alternância de idioma Português / Inglês
- Efeitos sutis de hover e transição (cards, links e botões) e fade de entrada nas seções
- Seções: Home, Sobre, Projetos, Projeto Destaque, Momentos/Robótica e Contato
- Totalmente responsivo (desktop, tablet e mobile)

## 📁 Estrutura de arquivos

```
portfolio/
├── index.html          # Estrutura da página (componentes Bootstrap)
├── css/
│   └── style.css        # Só o que o Bootstrap não cobre: offsets e efeitos
├── script/
│   └── script.js         # i18n, dados dos cards e tema claro/escuro
├── assets/               # Fotos (equipe, robótica)
└── README.md
```

## 🚀 Como rodar

Não há build nem dependências para instalar. Basta abrir o `index.html` no navegador, ou servir a pasta com um servidor local:

```bash
# Python
python -m http.server 5500

# ou usando a extensão Live Server do VS Code
```

Depois acesse `http://localhost:5500/index.html`.

## 🛠️ Tecnologias

- HTML5 semântico
- Bootstrap 5.3 (grid, Navbar, Offcanvas, Scrollspy, Cards, Badges, Color Modes — via CDN)
- Bootstrap Icons (via CDN)
- JavaScript puro (sem frameworks), responsável só pelo conteúdo dinâmico (textos, projetos, fotos) e pelo tema
- CSS próprio reduzido a poucas linhas: offsets de layout e pequenos efeitos de hover/transição

## ✏️ Personalização rápida

| O que mudar | Onde |
|---|---|
| Textos e traduções (PT/EN) | objeto `T` no início do `script.js` |
| Itens do menu | array `NAV` no `script.js` |
| Lista de projetos | array `PROJ` no `script.js` |
| Galeria de robótica | array `ROBO` no `script.js` |
| Prêmios/conquistas | array `AWARDS` no `script.js` |
| Skills exibidas | array `SKILLS` no `script.js` |
| Cor de destaque | classes utilitárias do Bootstrap no `index.html` (ex.: `text-danger`, `btn-danger`) |
| Tema claro/escuro padrão | atributo `data-bs-theme` na tag `<html>` do `index.html` |

## 📬 Contato

- E-mail: pedroh.mendes472@gmail.com
- GitHub: [github.com/PedroHenriMende](https://github.com/PedroHenriMende)
- LinkedIn: [linkedin.com/in/pedro-jesus-aa4018383](https://www.linkedin.com/in/pedro-jesus-aa4018383/)
- Instagram: [@pedro_mjay](https://www.instagram.com/pedro_mjay)
