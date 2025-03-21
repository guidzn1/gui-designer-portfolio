import React, { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoArea}>
            <img src="/logo.png" alt="Logo" className={styles.logo} />
          </div>
          <nav className={styles.navDesktop}>
            <a href="#habilidades">Habilidades</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#sobre">Sobre mim</a>
            <a href="#contato">Contato</a>
          </nav>
          <div
            className={styles.navMobileIcon}
            onClick={() => setMenuOpen(true)}
          >
            <img src="/icon-menu.png" alt="Menu" />
          </div>
        </div>
      </header>

      {/* Mobile Drawer e Overlay */}
      {menuOpen && (
        <>
          <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
          <div className={styles.drawer}>
            <nav className={styles.navMobile}>
              <a href="#habilidades" onClick={() => setMenuOpen(false)}>
                Habilidades
              </a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                Portfólio
              </a>
              <a href="#sobre" onClick={() => setMenuOpen(false)}>
                Sobre mim
              </a>
              <a href="#contato" onClick={() => setMenuOpen(false)}>
                Contato
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
