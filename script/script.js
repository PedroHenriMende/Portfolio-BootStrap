const $ = (id) => document.getElementById(id);

/* ===== TEXTOS (PT / EN) ===== */
const T = {
  pt: {
    heroEyebrow: "SISTEMA INICIALIZADO",
    heroRole: "Desenvolvedor Jr. | Robótica | Tecnologia",
    heroDesc: "Estudante de Análise e Desenvolvimento de Sistemas, 6 anos de robótica competitiva e paixão por construir coisas com código.",
    heroCta: "Vamos conversar",
    aboutEyebrow: "QUEM SOU EU",
    aboutTitle: "Sobre",
    aboutBio: "Tenho 18 anos, sou natural de Sertãozinho/SP e estou cursando Análise e Desenvolvimento de Sistemas na Faculdade SENAI Ribeirão Preto, após concluir o técnico em Desenvolvimento de Sistemas no SENAI e o Ensino Médio no SESI CE-241. Por 3 anos integrei a equipe de robótica FRC Steel Bulls 9460, ajudando a construir o Project Bull AI, e venho me aprofundando em JavaScript, TypeScript, Java, C# e Python. Nas horas livres, jogo basquete, games com os amigos e crio sites por diversão.",
    eduTitle: "Formação",
    projEyebrow: "CÓDIGO EM AÇÃO",
    projTitle: "Projetos",
    featEyebrow: "PROJETO PRINCIPAL",
    featTitle: "Project Bull AI",
    featDesc: "Robô de competição com integração de Inteligência Artificial, desenvolvido e pilotado ao longo de 3 anos na equipe Steel Bulls 9460, competindo na Regional FRC de São Paulo e no Nacional FRC em Brasília.",
    roboEyebrow: "TRAJETÓRIA",
    roboTitle: "Momentos / Robótica",
    contEyebrow: "FALE COMIGO",
    contTitle: "Contato",
    nav: ["Home", "Sobre", "Projetos", "Destaque", "Robótica", "Contato"],
    view: "Ver projeto",
  },
  en: {
    heroEyebrow: "SYSTEM ONLINE",
    heroRole: "Jr. Developer | Robotics | Technology",
    heroDesc: "Systems Analysis & Development student, 6 years of competitive robotics, and a passion for building things with code.",
    heroCta: "Let's talk",
    aboutEyebrow: "WHO I AM",
    aboutTitle: "About",
    aboutBio: "I'm 18, from Sertãozinho/SP, currently studying Systems Analysis and Development at Faculdade SENAI Ribeirão Preto, after finishing a technical degree in Systems Development at SENAI and high school at SESI CE-241. For 3 years I was part of the FRC Steel Bulls 9460 robotics team, helping build Project Bull AI, and I've been diving into JavaScript, TypeScript, Java, C# and Python. In my free time I play basketball, game with friends, and build websites for fun.",
    eduTitle: "Education",
    projEyebrow: "CODE IN ACTION",
    projTitle: "Projects",
    featEyebrow: "FLAGSHIP PROJECT",
    featTitle: "Project Bull AI",
    featDesc: "Competition robot with integrated Artificial Intelligence, built and piloted over 3 years with team Steel Bulls 9460, competing at the FRC São Paulo Regional and the FRC Brasília Nationals.",
    roboEyebrow: "JOURNEY",
    roboTitle: "Moments / Robotics",
    contEyebrow: "GET IN TOUCH",
    contTitle: "Contact",
    nav: ["Home", "About", "Projects", "Flagship", "Robotics", "Contact"],
    view: "View project",
  },
};

/* ===== DADOS ===== */
const SKILLS = ["Java", "JavaScript", "TypeScript", "Python", "C#", "HTML5", "CSS3", "Git", "GitHub", "SQL"];
const NAV = [["home", "bi-house"], ["about", "bi-person"], ["projects", "bi-kanban"], ["featured", "bi-star"], ["robotics", "bi-robot"], ["contact", "bi-envelope"]];
const GH = "https://github.com/";
const PROJ = [
  { n: "ALT F4 — Backend", pt: "API REST em TypeScript com autenticação e persistência de dados.", en: "REST API in TypeScript with auth and data persistence.", t: ["TypeScript", "Node.js"], u: GH + "jmr230584/backeend-ALTF4" },
  { n: "ALT F4 — Frontend", pt: "Interface web em TypeScript integrada à API do projeto ALTF4.", en: "Web interface in TypeScript integrated with the ALTF4 API.", t: ["TypeScript"], u: GH + "jmr230584/fronteend-ALTF4" },
  { n: "AgroIntel — Backend", pt: "Backend desenvolvido durante o desafio Mundo SENAI 2025.", en: "Backend built during the Mundo SENAI 2025 challenge.", t: ["TypeScript"], u: GH + "agrointel-mundo-senai-2025/backend-agrointel-ms-2025" },
  { n: "Substituição de Docentes — API", pt: "API em Java/Spring Boot para gestão de substituição de professores.", en: "Java/Spring Boot API to manage teacher substitutions.", t: ["Java", "Spring Boot"], u: GH + "project-integrador/project-integrador-backend-java-in-coming" },
  { n: "Substituição de Docentes — Web", pt: "Interface para automatizar a substituição de professores em escolas.", en: "Interface to automate teacher substitutions in schools.", t: ["TypeScript"], u: GH + "project-integrador/project-integrador-frontend-in-coming" },
  { n: "Portfólio Pessoal", pt: "Este site: trajetória, habilidades e projetos.", en: "This site: journey, skills and projects.", t: ["HTML", "CSS", "JS"], u: GH + "PedroHenriMende/My-Portfolio" },
];
const ROBO = [
  { img: "foto-equipe-jacarei-pretreino", pt: "Pré-treino da equipe em Jacareí", en: "Team pre-training in Jacareí" },
  { img: "partida-em-sp", pt: "Partida na Regional FRC — São Paulo", en: "Match at the FRC Regional — São Paulo" },
  { img: "ganhando-premio-em-sp", pt: "Premiação na Regional de São Paulo", en: "Award ceremony at the São Paulo Regional" },
  { img: "foto-durante-partida-dos-playoffs", pt: "Durante a partida dos playoffs", en: "During a playoff match" },
  { img: "partida", pt: "Em competição", en: "In competition" },
  { img: "programando-o-robo", pt: "Programando o robô", en: "Programming the robot" },
  { img: "progamando-robo-2", pt: "Ajustes de código nos bastidores", en: "Code tweaks behind the scenes" },
  { img: "Foto-Final-O-que-foi-a-frc-pra-mim", pt: "O que foi a FRC pra mim", en: "What FRC meant to me" },
];
const AWARDS = [
  { i: "bi-trophy", pt: "Regional FRC — São Paulo", en: "FRC Regional — São Paulo" },
  { i: "bi-flag", pt: "Nacional FRC — Brasília", en: "FRC Nationals — Brasília" },
  { i: "bi-award", pt: "Rookie Inspiration Award", en: "Rookie Inspiration Award" },
  { i: "bi-gem", pt: "Quality Award — Reefscape", en: "Quality Award — Reefscape" },
];

/* ===== MONTA A PÁGINA NO IDIOMA ESCOLHIDO ===== */
let lang = localStorage.getItem("lang") || "pt";
function applyLang() {
  document.querySelectorAll("[data-i]").forEach((e) => (e.textContent = T[lang][e.dataset.i]));
  $("sideNav").innerHTML = NAV.map(([id, icon], i) =>
    `<a href="#${id}" title="${T[lang].nav[i]}" data-id="${id}" class="${i ? "" : "active"}"><i class="bi ${icon}"></i></a>`).join("");
  $("projGrid").innerHTML = PROJ.map((p) =>
    `<div class="col-md-6 col-lg-4"><div class="card-tech p-3">
      <h3 style="font-size:1.05rem">${p.n}</h3>
      <p style="color:var(--muted);font-size:.88rem;min-height:3.2em">${p[lang]}</p>
      <div class="badge-wrap">${p.t.map((x) => `<span class="badge-tech">${x}</span>`).join("")}</div>
      <a href="${p.u}" target="_blank" class="btn-accent d-inline-block mt-2" style="padding:.4rem 1rem;font-size:.85rem">${T[lang].view} <i class="bi bi-box-arrow-up-right"></i></a>
    </div></div>`).join("");
  $("roboGrid").innerHTML = ROBO.map((r) =>
    `<div class="col-6 col-lg-3"><figure class="card-tech moment m-0">
      <img class="card-img" src="assets/${r.img}.png" alt="${r[lang]}" loading="lazy" onerror="this.style.display='none'">
      <figcaption class="mono">${r[lang]}</figcaption></figure></div>`).join("");
  $("awardGrid").innerHTML = AWARDS.map((a) =>
    `<div class="col-6 col-lg-3"><div class="card-tech text-center p-3"><i class="bi ${a.i}" style="font-size:1.6rem;color:var(--gold)"></i><p class="mono mt-2 mb-0" style="font-size:.8rem">${a[lang]}</p></div></div>`).join("");
  $("skillsBox").innerHTML = `<div class="card-tech p-3"><strong class="mono" style="color:var(--gold)">Skills</strong><div class="mt-2 badge-wrap">${SKILLS.map((s) => `<span class="skill-badge">${s}</span>`).join("")}</div></div>`;
  $("langBtn").textContent = lang === "pt" ? "EN" : "PT";
}
$("langBtn").onclick = () => {
  lang = lang === "pt" ? "en" : "pt";
  localStorage.setItem("lang", lang);
  applyLang();
};

/* ===== BARRA DE PROGRESSO AO CLICAR NO MENU ===== */
document.addEventListener("click", (e) => {
  if (!e.target.closest('a[href^="#"]')) return;
  $("navload").style.width = "100%";
  setTimeout(() => ($("navload").style.width = "0"), 400);
});

/* ===== TEMA CLARO / ESCURO ===== */
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  localStorage.setItem("theme", t);
  $("themeBtn").innerHTML = `<i class="bi bi-${t === "light" ? "sun" : "moon-stars"}"></i>`;
}
setTheme(localStorage.getItem("theme") || "dark");
$("themeBtn").onclick = () => setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");

/* ===== COR DE DESTAQUE ===== */
function setAccent(c) {
  document.documentElement.style.setProperty("--accent", c);
  localStorage.setItem("accent", c);
}
const saved = localStorage.getItem("accent");
if (saved) { setAccent(saved); $("colorpick").value = saved; }
$("colorpick").oninput = (e) => setAccent(e.target.value);

/* ===== CURSOR ===== */
document.addEventListener("mousemove", (e) => {
  $("cursor").style.left = e.clientX + "px";
  $("cursor").style.top = e.clientY + "px";
});
if (matchMedia("(pointer: coarse)").matches) $("cursor").style.display = "none";

/* ===== TELA DE CARREGAMENTO ===== */
window.addEventListener("load", () => setTimeout(() => {
  $("loader").style.opacity = "0";
  setTimeout(() => $("loader").remove(), 650);
}, 1200));

/* ===== MENU ACOMPANHA A SEÇÃO VISÍVEL ===== */
const spy = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting)
    document.querySelectorAll(".side-nav a").forEach((a) => a.classList.toggle("active", a.dataset.id === en.target.id));
}), { rootMargin: "-45% 0px -45% 0px" });

applyLang();
NAV.forEach(([id]) => spy.observe($(id)));