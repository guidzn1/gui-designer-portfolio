import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./ParticlesSection.css";

const skillsData = [
  {
    title: "Designer",
    desc: "Criação de identidades visuais, layouts e peças gráficas impactantes que comunicam sua marca de forma clara e atrativa.",
    icon: "/design-icone.svg",
  },
  {
    title: "Motion Design",
    desc: "Animações dinâmicas que transformam conceitos em experiências visuais envolventes e memoráveis.",
    icon: "/adobe-after-effects.svg",
  },
  {
    title: "Videomaker",
    desc: "Produção e edição de vídeos criativos que contam histórias e reforçam a mensagem da sua marca.",
    icon: "/video-icone.svg",
  },
  {
    title: "Desenvolvedor",
    desc: "Desenvolvimento de soluções web e mobile modernas, focadas em performance e excelente experiência do usuário.",
    icon: "/dev-icone.svg",
  },
];

function ParticlesSection() {
  const [showCards, setShowCards] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !showCards) {
      setShowCards(true);
    }
  }, [inView, showCards]);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load("particles-js", "/particles.json", () => {
        console.log("particles.js config loaded");
      });
    }
  }, []);

  return (
    <section className="particles-section">
      <div id="particles-js"></div>

      <div className="skills-wrapper">
        <h2 className="titulo-degrade" ref={ref}>MINHAS HABILIDADES:</h2>
        <div className="skills-container">
          {skillsData.map((skill) => (
            <div
              key={skill.title}
              className={`skill-card ${showCards ? "visible" : "hidden"}`}
            >
              <div className="icon-wrapper">
                <img src={skill.icon} alt={skill.title} className="skill-icon" />
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>

<button
  className="cta animated-border cta-skills"
  onClick={() => window.open("https://wa.link/1hvt54", "_blank")}
>
  <span>QUERO UM ORÇAMENTO!</span>
  <span>
    <img src="/seta-icone.png" alt="Seta" />
  </span>
  <span className="border-span border-span1"></span>
  <span className="border-span border-span2"></span>
  <span className="border-span border-span3"></span>
  <span className="border-span border-span4"></span>
</button>

      </div>
    </section>
  );
}

export default ParticlesSection;
