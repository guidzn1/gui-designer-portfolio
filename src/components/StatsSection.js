import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./StatsSection.css";

function StatsSection() {
  // Se quisermos garantir que a animação ocorra apenas uma vez:
  const [animated, setAnimated] = useState(false);

  // useInView retorna um ref e um boolean "inView"
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,  // só fica true quando 100% do elemento está na tela
  });
  
  // Se "inView" for true, setAnimated(true)
  if (inView && !animated) {
    setAnimated(true);
  }

  return (
    <section className="stats-section">
      <div className="stats-content" ref={ref}>
        <div className="stat-item">
          <h2>
          {animated ? <CountUp end={3000} duration={2} prefix="+" /> : "+0"}
          </h2>
          <p>PROJETOS</p>
        </div>

        <div className="stat-item">
          <h2>
          {animated ? <CountUp end={250} duration={2} prefix="+" /> : "+0"}
          </h2>
          <p>CLIENTES ATENDIDOS</p>
        </div>

        <div className="stat-item">
          <h2>
          {animated ? <CountUp end={7} duration={2} prefix="+" /> : "+0"}
          </h2>
          <p>ANOS DE EXPERIÊNCIA</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
