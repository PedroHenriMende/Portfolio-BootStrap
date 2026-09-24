const $ = (id) => document.getElementById(id);

/* Textos PT/EN */
const T = {
  pt: { navHome:"Home", navAbout:"Sobre", navProjects:"Projetos", navFeatured:"Destaque", navRobotics:"Robótica", navContact:"Contato",
    heroEyebrow:"SISTEMA INICIALIZADO", heroRole:"Desenvolvedor | Robótica | Tecnologia",
    heroDesc:"Estudante de Análise e Desenvolvimento de Sistemas, 6 anos de robótica competitiva e paixão por construir coisas com código.",
    heroCta:"Vamos conversar", aboutTitle:"Sobre",
    aboutBio:"Tenho 18 anos, sou natural de Sertãozinho/SP, já concluí o Ensino Médio no SESI CE-241 e o técnico em Desenvolvimento de Sistemas no SENAI, e estou atualmente no 2º semestre de Análise e Desenvolvimento de Sistemas na Faculdade SENAI Ribeirão Preto. Por 3 anos integrei a equipe de robótica FRC Steel Bulls 9460, ajudando a construir o Project Bull AI, e venho me aprofundando em JavaScript, TypeScript, Java, C# e Python. Nas horas livres, jogo basquete, games com os amigos e crio sites por diversão.",
    eduTitle:"Formação", projTitle:"Projetos", featTitle:"Project Bull AI",
    featTagline:"Mais do que robôs.",
    featDesc:"Robô de competição com integração de Inteligência Artificial, desenvolvido e pilotado ao longo de 3 anos na equipe Steel Bulls 9460, competindo na Regional FRC de São Paulo e no Nacional FRC em Brasília.",
    roboTitle:"Momentos / Robótica", roboTagline:"Mais que robôs: uma equipe.", contTitle:"Contato", view:"Ver projeto" },
  en: { navHome:"Home", navAbout:"About", navProjects:"Projects", navFeatured:"Flagship", navRobotics:"Robotics", navContact:"Contact",
    heroEyebrow:"SYSTEM ONLINE", heroRole:"Developer | Robotics | Technology",
    heroDesc:"Systems Analysis & Development student, 6 years of competitive robotics, and a passion for building things with code.",
    heroCta:"Let's talk", aboutTitle:"About",
    aboutBio:"I'm 18, from Sertãozinho/SP, I've already finished high school at SESI CE-241 and a technical degree in Systems Development at SENAI, and I'm currently in my 2nd semester of Systems Analysis and Development at Faculdade SENAI Ribeirão Preto. For 3 years I was part of the FRC Steel Bulls 9460 robotics team, helping build Project Bull AI, and I've been diving into JavaScript, TypeScript, Java, C# and Python. In my free time I play basketball, game with friends, and build websites for fun.",
    eduTitle:"Education", projTitle:"Projects", featTitle:"Project Bull AI",
    featTagline:"It's more than robots.",
    featDesc:"Competition robot with integrated Artificial Intelligence, built and piloted over 3 years with team Steel Bulls 9460, competing at the FRC São Paulo Regional and the FRC Brasília Nationals.",
    roboTitle:"Moments / Robotics", roboTagline:"More than robots: a team.", contTitle:"Contact", view:"View project" },
};

/* Dados */
const SKILLS = ["Java","JavaScript","TypeScript","Python","C#","HTML5","CSS3","Git","GitHub","SQL"];
const GH = "https://github.com/";
const PROJ = [
  { n:"ALT F4 — Backend", pt:"API REST em TypeScript com autenticação e persistência de dados.", en:"REST API in TypeScript with auth and data persistence.", t:["TypeScript","Node.js"], u:GH+"jmr230584/backeend-ALTF4" },
  { n:"ALT F4 — Frontend", pt:"Interface web em TypeScript integrada à API do projeto ALTF4.", en:"Web interface in TypeScript integrated with the ALTF4 API.", t:["TypeScript"], u:GH+"jmr230584/fronteend-ALTF4" },
  { n:"AgroIntel — Backend", pt:"Backend desenvolvido durante o desafio Mundo SENAI 2025.", en:"Backend built during the Mundo SENAI 2025 challenge.", t:["TypeScript"], u:GH+"agrointel-mundo-senai-2025/backend-agrointel-ms-2025" },
  { n:"Substituição de Docentes — API", pt:"API em Java/Spring Boot para gestão de substituição de professores.", en:"Java/Spring Boot API to manage teacher substitutions.", t:["Java","Spring Boot"], u:GH+"project-integrador/project-integrador-backend-java-in-coming" },
  { n:"Substituição de Docentes — Web", pt:"Interface para automatizar a substituição de professores em escolas.", en:"Interface to automate teacher substitutions in schools.", t:["TypeScript"], u:GH+"project-integrador/project-integrador-frontend-in-coming" },
  { n:"Portfólio Pessoal", pt:"Este site: trajetória, habilidades e projetos.", en:"This site: journey, skills and projects.", t:["HTML","CSS","JS"], u:GH+"PedroHenriMende/My-Portfolio" },
];
const ROBO = [
  { img:"foto-equipe-jacarei-pretreino", pt:"Pré-treino da equipe em Jacareí", en:"Team pre-training in Jacareí" },
  { img:"partida-em-sp", pt:"Partida na Regional FRC — São Paulo", en:"Match at the FRC Regional — São Paulo" },
  { img:"ganhando-premio-em-sp", pt:"Premiação na Regional de São Paulo", en:"Award ceremony at the São Paulo Regional" },
  { img:"foto-durante-partida-dos-playoffs", pt:"Durante a partida dos playoffs", en:"During a playoff match" },
  { img:"partida", pt:"Em competição", en:"In competition" },
  { img:"programando-o-robo", pt:"Programando o robô", en:"Programming the robot" },
  { img:"progamando-robo-2", pt:"Ajustes de código nos bastidores", en:"Code tweaks behind the scenes" },
  { img:"Foto-Final-O-que-foi-a-frc-pra-mim", pt:"O que foi a FRC pra mim", en:"What FRC meant to me" },
];
const AWARDS = [
  { i:"bi-trophy", pt:"Regional FRC — São Paulo", en:"FRC Regional — São Paulo" },
  { i:"bi-flag", pt:"Nacional FRC — Brasília", en:"FRC Nationals — Brasília" },
  { i:"bi-award", pt:"Rookie Inspiration Award", en:"Rookie Inspiration Award" },
  { i:"bi-gem", pt:"Quality Award — Reefscape", en:"Quality Award — Reefscape" },
];

/* Preenche a página no idioma escolhido */
let lang = localStorage.getItem("lang") || "pt";
function applyLang() {
  document.querySelectorAll("[data-i]").forEach((e) => (e.textContent = T[lang][e.dataset.i]));

  $("projGrid").innerHTML = PROJ.map((p) => `<div class="col-md-6 col-lg-4"><div class="card h-100">
      <div class="card-body"><h3 class="h6">${p.n}</h3><p class="small text-body-secondary" style="min-height:3.2em">${p[lang]}</p>
      <div class="d-flex flex-wrap gap-2 mb-2">${p.t.map((x) => `<span class="badge text-bg-secondary">${x}</span>`).join("")}</div>
      <a href="${p.u}" target="_blank" class="btn btn-danger btn-sm">${T[lang].view} <i class="bi bi-box-arrow-up-right"></i></a></div></div></div>`).join("");

  $("roboGrid").innerHTML = ROBO.map((r) => `<div class="col-6 col-lg-3"><div class="card h-100">
      <div class="ratio ratio-4x3"><img src="assets/${r.img}.png" class="object-fit-cover rounded-top" alt="${r[lang]}" loading="lazy" onerror="this.closest('.card').style.display='none'"></div>
      <div class="card-body p-2"><p class="small text-body-secondary mb-0">${r[lang]}</p></div></div></div>`).join("");

  $("awardGrid").innerHTML = AWARDS.map((a) => `<div class="col-6 col-lg-3"><div class="card text-center h-100">
      <div class="card-body"><i class="bi ${a.i} fs-4 text-warning"></i><p class="small mt-2 mb-0">${a[lang]}</p></div></div></div>`).join("");

  $("skillsBox").innerHTML = SKILLS.map((s) => `<span class="badge text-bg-danger">${s}</span>`).join("");
  document.querySelectorAll(".lang-btn").forEach((b) => (b.textContent = lang === "pt" ? "EN" : "PT"));
}
document.querySelectorAll(".lang-btn").forEach((b) => b.addEventListener("click", () => {
  lang = lang === "pt" ? "en" : "pt";
  localStorage.setItem("lang", lang);
  applyLang();
}));

/* Tema claro e escuro nativo do Bootstrap 5.3 (data-bs-theme) */
function setTheme(t) {
  document.documentElement.setAttribute("data-bs-theme", t);
  localStorage.setItem("theme", t);
  document.querySelectorAll(".theme-btn").forEach((b) => (b.innerHTML = `<i class="bi bi-${t === "light" ? "sun" : "moon-stars"}"></i>`));
}
setTheme(localStorage.getItem("theme") || "dark");
document.querySelectorAll(".theme-btn").forEach((b) => b.addEventListener("click", () =>
  setTheme(document.documentElement.getAttribute("data-bs-theme") === "light" ? "dark" : "light")));

/* Easter egg isolado: o botão "não clica aqui" leva pro novo portfólio */
$("glitchBtn")?.addEventListener("click", () => {
  window.location.href = "https://pedrohenrimende.github.io/My-Portfolio/";
});

applyLang();
