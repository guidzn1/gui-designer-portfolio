import React, { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  // Estado para identificar se é mobile ou não
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize(); // faz a checagem inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Se for mobile, usa a imagem back-hero-mobile.png, senão background.png
  const bgImage = isMobile
    ? 'url("/back-hero-mobile.png")'
    : 'url("/background.png")';

  return (
    <section
      className="hero"
      style={{
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para escurecer o fundo */}
      <div className="hero-overlay"></div>

      {/* Retângulo com efeito glass (desfoque) */}
      <div className="hero-blur-box">
        {/* Ícone giratório no canto superior direito do retângulo */}
        <img src="/selo-icon.png" alt="Selo Icon" className="selo-icon" />

        <div className="hero-content">
          <h1>
            Olá, me chamo <span className="hero-name">Guilherme Lima</span>
          </h1>
          <p>
            Designer Gráfico, Motion Designer, VideoMaker e Desenvolvedor Web &amp; Mobile.
            Transformo ideias em experiências visuais incríveis.
          </p>

          <button className="cta animated-border">
            {/* Texto do botão */}
            <span>QUERO UM ORÇAMENTO!</span>
            {/* Ícone da seta */}
            <span>
              <img src="/seta-icone.png" alt="Seta" />
            </span>
            {/* 4 spans para as bordas animadas */}
            <span className="border-span border-span1"></span>
            <span className="border-span border-span2"></span>
            <span className="border-span border-span3"></span>
            <span className="border-span border-span4"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
