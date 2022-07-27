import React from 'react';
// import { Nav } from './styled';

function Header() {
  return (
    <aside className="menu white-bg">
      <div className="main-content menu-content">
        <h1>
          <a href="#home">Portfólio</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#about-me">Sobre mim</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contatos</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Header;
