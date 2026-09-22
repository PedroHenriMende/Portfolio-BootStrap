const T = {
  pt: {
    heroEyebrow: "SISTEMA INICIALIZADO",
    heroRole: "Desenvolvedor Jr. | Robótica | Tecnologia",
    heroDesc:
      "Estudante de Análise e Desenvolvimento de Sistemas, 6 anos de robótica competitiva e paixão por construir coisas com código.",
    heroCta: "Vamos conversar",
    aboutEyebrow: "QUEM SOU EU",
    aboutTitle: "Sobre",
    aboutBio:
      "Tenho 18 anos, sou natural de Sertãozinho/SP e estou cursando Análise e Desenvolvimento de Sistemas na Faculdade SENAI Ribeirão Preto, após concluir o técnico em Desenvolvimento de Sistemas no SENAI e o Ensino Médio no SESI CE-241. Por 3 anos integrei a equipe de robótica FRC Steel Bulls 9460, ajudando a construir o Project Bull AI, e venho me aprofundando em JavaScript, TypeScript, Java, C# e Python. Nas horas livres, jogo basquete, games com os amigos e crio sites por diversão.",
    eduTitle: "Formação",
    projEyebrow: "CÓDIGO EM AÇÃO",
    projTitle: "Projetos",
    featEyebrow: "PROJETO PRINCIPAL",
    featTitle: "Project Bull AI",
    featDesc:
      "Robô de competição com integração de Inteligência Artificial, desenvolvido e pilotado ao longo de 3 anos na equipe Steel Bulls 9460, competindo na Regional FRC de São Paulo e no Nacional FRC em Brasília.",
    roboEyebrow: "TRAJETÓRIA",
    roboTitle: "Momentos / Robótica",
    contEyebrow: "FALE COMIGO",
    contTitle: "Contato",
    nav: ["Home", "Sobre", "Projetos", "Destaque", "Robótica", "Contato"],
  },
  en: {
    heroEyebrow: "SYSTEM ONLINE",
    heroRole: "Jr. Developer | Robotics | Technology",
    heroDesc:
      "Systems Analysis & Development student, 6 years of competitive robotics, and a passion for building things with code.",
    heroCta: "Let's talk",
    aboutEyebrow: "WHO I AM",
    aboutTitle: "About",
    aboutBio:
      "I'm 18, from Sertãozinho/SP, currently studying Systems Analysis and Development at Faculdade SENAI Ribeirão Preto, after finishing a technical degree in Systems Development at SENAI and high school at SESI CE-241. For 3 years I was part of the FRC Steel Bulls 9460 robotics team, helping build Project Bull AI, and I've been diving into JavaScript, TypeScript, Java, C# and Python. In my free time I play basketball, game with friends, and build websites for fun.",
    eduTitle: "Education",
    projEyebrow: "CODE IN ACTION",
    projTitle: "Projects",
    featEyebrow: "FLAGSHIP PROJECT",
    featTitle: "Project Bull AI",
    featDesc:
      "Competition robot with integrated Artificial Intelligence, built and piloted over 3 years with team Steel Bulls 9460, competing at the FRC São Paulo Regional and the FRC Brasília Nationals.",
    roboEyebrow: "JOURNEY",
    roboTitle: "Moments / Robotics",
    contEyebrow: "GET IN TOUCH",
    contTitle: "Contact",
    nav: ["Home", "About", "Projects", "Flagship", "Robotics", "Contact"],
  },
};
const SKILLS = [
  "Java",
  "JavaScript",
  "TypeScript",
  "Python",
  "C#",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "SQL",
];
const NAVICON = [
  "bi-house",
  "bi-person",
  "bi-kanban",
  "bi-star",
  "bi-robot",
  "bi-envelope",
];
const NAVID = ["home", "about", "projects", "featured", "robotics", "contact"];
const PROJ = [
  {
    n: "ALT F4 — Backend",
    pt: "API REST em TypeScript com autenticação e persistência de dados.",
    en: "REST API in TypeScript with auth and data persistence.",
    t: ["TypeScript", "Node.js"],
    u: "https://github.com/jmr230584/backeend-ALTF4",
  },
  {
    n: "ALT F4 — Frontend",
    pt: "Interface web em TypeScript integrada à API do projeto ALTF4.",
    en: "Web interface in TypeScript integrated with the ALTF4 API.",
    t: ["TypeScript"],
    u: "https://github.com/jmr230584/fronteend-ALTF4",
  },
  {
    n: "AgroIntel — Backend",
    pt: "Backend desenvolvido durante o desafio Mundo SENAI 2025.",
    en: "Backend built during the Mundo SENAI 2025 challenge.",
    t: ["TypeScript"],
    u: "https://github.com/agrointel-mundo-senai-2025/backend-agrointel-ms-2025",
  },
  {
    n: "Substituição de Docentes — API",
    pt: "API em Java/Spring Boot para gestão de substituição de professores.",
    en: "Java/Spring Boot API to manage teacher substitutions.",
    t: ["Java", "Spring Boot"],
    u: "https://github.com/project-integrador/project-integrador-backend-java-in-coming",
  },
  {
    n: "Substituição de Docentes — Web",
    pt: "Interface para automatizar a substituição de professores em escolas.",
    en: "Interface to automate teacher substitutions in schools.",
    t: ["TypeScript"],
    u: "https://github.com/project-integrador/project-integrador-frontend-in-coming",
  },
  {
    n: "Portfólio Pessoal",
    pt: "Este site: trajetória, habilidades e projetos.",
    en: "This site: journey, skills and projects.",
    t: ["HTML", "CSS", "JS"],
    u: "https://github.com/PedroHenriMende/My-Portfolio",
  },
];
const ROBO = [
  {
    i: "bi-trophy",
    pt: "Regional FRC — São Paulo",
    en: "FRC Regional — São Paulo",
  },
  {
    i: "bi-flag",
    pt: "Nacional FRC — Brasília",
    en: "FRC Nationals — Brasília",
  },
  {
    i: "bi-people",
    pt: "Equipe Steel Bulls 9460",
    en: "Team Steel Bulls 9460",
  },
  { i: "bi-cpu", pt: "Project Bull AI", en: "Project Bull AI" },
  {
    i: "bi-award",
    pt: "Rookie Inspiration Award",
    en: "Rookie Inspiration Award",
  },
  {
    i: "bi-gem",
    pt: "Quality Award — Reefscape",
    en: "Quality Award — Reefscape",
  },
];
let lang = localStorage.getItem("lang") || "pt";
function applyLang() {
  document
    .querySelectorAll("[data-i]")
    .forEach((e) => (e.textContent = T[lang][e.dataset.i]));
  document.getElementById("sideNav").innerHTML = NAVID.map(
    (id, i) =>
      `<a href="#${id}" title="${T[lang].nav[i]}" data-id="${id}" class="${id === "home" ? "active" : ""}"><i class="bi ${NAVICON[i]}"></i></a>`,
  ).join("");
  document.getElementById("projGrid").innerHTML = PROJ.map(
    (p) =>
      `<div class="col-md-6 col-lg-4"><div class="card-tech"><div class="imgph">${lang === "pt" ? "IMAGEM DO PROJETO" : "PROJECT IMAGE"}</div><div class="p-3"><h3 style="font-size:1.05rem">${p.n}</h3><p style="color:var(--muted);font-size:.88rem;min-height:3.2em">${p[lang]}</p><div class="badge-wrap">${p.t.map((x) => `<span class="badge-tech">${x}</span>`).join("")}</div><a href="${p.u}" target="_blank" class="btn-accent d-inline-block mt-2" style="padding:.4rem 1rem;font-size:.85rem">${lang === "pt" ? "Ver projeto" : "View project"} <i class="bi bi-box-arrow-up-right"></i></a></div></div></div>`,
  ).join("");
  document.getElementById("roboGrid").innerHTML = ROBO.map(
    (r) =>
      `<div class="col-md-4"><div class="card-tech text-center p-4"><i class="bi ${r.i}" style="font-size:2rem;color:var(--gold)"></i><p class="mono mt-3 mb-0" style="font-size:.85rem">${r[lang]}</p></div></div>`,
  ).join("");
  document.getElementById("skillsBox").innerHTML =
    `<div class="card-tech p-3"><strong class="mono" style="color:var(--gold)">Skills</strong><div class="mt-2 badge-wrap">${SKILLS.map((s) => `<span class="skill-badge">${s}</span>`).join("")}</div></div>`;
  document.getElementById("langBtn").textContent = lang === "pt" ? "EN" : "PT";
  document
    .querySelectorAll(".side-nav a")
    .forEach((a) => (a.onclick = () => navLoad()));
}
function navLoad() {
  const b = document.getElementById("navload");
  b.style.width = "70%";
  setTimeout(() => {
    b.style.width = "100%";
    setTimeout(() => (b.style.width = "0"), 300);
  }, 150);
}
document.getElementById("langBtn").onclick = () => {
  lang = lang === "pt" ? "en" : "pt";
  localStorage.setItem("lang", lang);
  applyLang();
};
document.getElementById("projects") &&
  document
    .querySelectorAll('a[href^="#"]')
    .forEach((a) => a.addEventListener("click", navLoad));
/* theme */
function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
  document.getElementById("themeBtn").innerHTML =
    t === "light"
      ? '<i class="bi bi-sun"></i>'
      : '<i class="bi bi-moon-stars"></i>';
}
setTheme(localStorage.getItem("theme") || "dark");
document.getElementById("themeBtn").onclick = () =>
  setTheme(
    document.documentElement.getAttribute("data-theme") === "light"
      ? "dark"
      : "light",
  );
/* color */
const savedColor = localStorage.getItem("accent");
if (savedColor) {
  document.documentElement.style.setProperty("--accent", savedColor);
  document.getElementById("colorpick").value = savedColor;
}
document.getElementById("colorpick").oninput = (e) => {
  document.documentElement.style.setProperty("--accent", e.target.value);
  localStorage.setItem("accent", e.target.value);
};
/* cursor */
const cur = document.getElementById("cursor");
if (!matchMedia("(pointer: coarse)").matches) {
  document.addEventListener("mousemove", (e) => {
    cur.style.left = e.clientX + "px";
    cur.style.top = e.clientY + "px";
  });
} else {
  cur.style.display = "none";
}
/* loader */
window.addEventListener("load", () => {
  setTimeout(() => {
    const l = document.getElementById("loader");
    l.style.opacity = "0";
    setTimeout(() => l.remove(), 650);
  }, 1200);
});
/* scroll-spy: keep sidebar active state synced with visible section */
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        document
          .querySelectorAll(".side-nav a")
          .forEach((a) =>
            a.classList.toggle("active", a.dataset.id === en.target.id),
          );
      }
    });
  },
  { rootMargin: "-45% 0px -45% 0px" },
);
applyLang();
NAVID.forEach((id) => {
  const s = document.getElementById(id);
  if (s) spy.observe(s);
});
