import React from 'react';
import { Nav } from './styled';

export default function Header() {
  return (
    <aside className="menu white-bg">
      <div className="main-content menu-content">
        <h1>
          <a href="#home">LOGO</a>
        </h1>
        <Nav>
          <ul>
            <li>
              <a href="#intro">intro</a>
            </li>
            <li>
              <a href="#grid-one">grid-one</a>
            </li>
            <li>
              <a href="#gallery">gallery</a>
            </li>
            <li>
              <a href="#grid-two">grid-two</a>
            </li>
            <li>
              <a href="#pricing">pricing</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </Nav>
      </div>
    </aside>
  );
}
