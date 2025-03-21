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

  // useInView para disparar a animação quando a seção ficar visível
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !showCards) {
      setShowCards(true);
    }
  }, [inView, showCards]);

  // Carrega o particles.js se estiver disponível (script no index.html)
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load("particles-js", "/particles.json", () => {
        console.log("particles.js config loaded");
      });
    }
  }, []);

  return (
    <section className="particles-section">
      {/* Container para as partículas */}
      <div id="particles-js"></div>

      {/* Conteúdo principal da seção */}
      <div className="skills-wrapper">
        <h2 className= "titulo-degrade">MINHAS HABILIDADES:</h2>
        <div className="skills-container" ref={ref}>
          {skillsData.map((skill, index) => (
            <div
              key={skill.title}
              className={`skill-card ${showCards ? "visible" : "hidden"}`}
             
            >
              <div className="icon-wrapper">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="skill-icon"
                />
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ParticlesSection;
