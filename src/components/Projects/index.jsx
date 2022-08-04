import React from 'react';
import landingPage from '../../img/landing-page.png';
import { ContainerProjects } from './styled';

function Projects() {
  return (
    <ContainerProjects id="projects" className="main-bg section">
      <div className="main-content">
        <div className="portfolio-text">
          <h1>Projetos</h1>
        </div>
        <div className="potfolio-content">
          <figure className="img landing-page">
            <div className="white-bg bg">
              <h5>Landing Page</h5>
              <a
                href="https://landingpagecursofullstack.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img src={landingPage} alt="" />
              </a>

              <p>CSS + HTML</p>
            </div>
          </figure>
          <figure className="img">
            <div className="white-bg bg">Teste2</div>
          </figure>
          <figure className="img">
            <div className="white-bg bg">Teste3</div>
          </figure>
          <figure className="img">
            <div className="white-bg bg">Teste4</div>
          </figure>
          <figure className="img">
            <div className="white-bg bg">Teste5</div>
          </figure>
          <figure className="img">
            <div className="white-bg bg">Teste6</div>
          </figure>
        </div>
      </div>
    </ContainerProjects>
  );
}

export default Projects;
