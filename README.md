# Pedro Henrique — Portfólio Pessoal

Portfólio pessoal com identidade visual cyberpunk/robótica, desenvolvido em **HTML5, CSS3, Bootstrap 5.3 e JavaScript puro (Vanilla JS)**.

🔗 **Demo publicada:** https://claude.ai/artifact/48DtX8KEbQs7Ke1drJftd8

## ✨ Funcionalidades

- Sidebar de navegação vertical com destaque automático da seção visível (scroll-spy)
- Dark / Light mode (padrão: dark)
- Seletor de cor de destaque (`--accent`, padrão vermelho)
- Alternância de idioma Português / Inglês
- Efeito glitch no título e nos hovers
- Cursor customizado (desabilitado automaticamente em telas touch)
- Loading inicial ("INITIALIZING SYSTEM...") e loading rápido ao navegar entre seções
- Seções: Home, Sobre, Projetos, Projeto Destaque, Momentos/Robótica e Contato
- Totalmente responsivo (desktop, tablet e mobile)
- Acessibilidade: HTML semântico, `aria-label`, foco visível e suporte a `prefers-reduced-motion`

## 📁 Estrutura de arquivos

```
portfolio/
├── index.html          # Estrutura da página
├── css/
│   └── style.css        # Estilos, tema e animações
├── script/
│   └── script.js         # Interatividade, i18n e dados dos cards
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
- CSS3 (custom properties, grid, flexbox, glassmorphism)
- Bootstrap 5.3 (grid e utilitários, via CDN)
- Bootstrap Icons (via CDN)
- JavaScript puro (sem frameworks)
- Google Fonts: Orbitron, Share Tech Mono, Inter

## ✏️ Personalização rápida

| O que mudar | Onde |
|---|---|
| Textos e traduções (PT/EN) | objeto `T` no início do `script.js` |
| Lista de projetos | array `PROJ` no `script.js` |
| Galeria de robótica | array `ROBO` no `script.js` |
| Skills exibidas | array `SKILLS` no `script.js` |
| Cor de destaque padrão | variável `--accent` no `style.css` (também ajustável pelo seletor de cor na sidebar) |
| Fotos reais (projetos e robótica) | trocar os placeholders `.imgph` por `<img>` no `index.html` |

## 📬 Contato

- E-mail: pedroh.mendes472@gmail.com
- GitHub: [github.com/PedroHenriMende](https://github.com/PedroHenriMende)
- LinkedIn: [linkedin.com/in/pedro-jesus-aa4018383](https://www.linkedin.com/in/pedro-jesus-aa4018383/)
- Instagram: [@pedro_mjay](https://www.instagram.com/pedro_mjay)
