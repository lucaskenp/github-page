import React from 'react';
import wave from '../../img/Emoji.png';
import me from '../../img/me.jpg';

function Content() {
  return (
    <section id="home" className="main-bg section">
      <div className="intro-content main-content">
        <div className="intro-text-content">
          <h1>
            Olá
            <img width={50} src={wave} alt="Mão fazendo gesto de cumprimento" />
          </h1>
          <h1>Me Chamo João Lucas</h1>
          <h1>Full Stack Developer</h1>
          <p>
            Eu sou estudante de Engenharia de Computação. Atualmente trabalho
            com desenvolvimento de sistemas embarcados e estou migrando para
            Web. Estou estudando React, Nodejs, Express, MongoDB, MySQL e API
            Rest.
          </p>
        </div>
        <figure>
          <img width={350} src={me} className="img-me" alt="João Lucas" />
          <div className="img-black" />
        </figure>
      </div>
    </section>
  );
}

export default Content;
