import React from 'react';
import wave from '../img/Emoji.png';
import me from '../img/me.jpg';

function Content() {
  return (
    <div className="content">
      <main>
        <div>
          <h1>
            Hi
            <img src={wave} width={50} alt="Mão fazendo gesto de cumprimento" />
          </h1>
          <h1>Me chamo João Lucas</h1>
          <h1>Full stack developer</h1>
          <p>
            Eu sou estudante de Engenharia de Computação. Atualmente trabalho
            com desenvolvimento de sistemas embarcados e estou migrando para
            Web. Estou estudando HTLM5, CSS3, JavaScript, React, Nodejs,
            MongoDB, MySQL.
          </p>
        </div>
        <div className="buttons">
          <button type="submit" className="cta hire">
            Hire me
          </button>
          <button type="submit" className="cta project">
            Veja meu portfólio
          </button>
        </div>
      </main>
      <figure>
        <img src={me} alt="João Lucas" width={350} className="me-img" />
        <div className="img-bg" />
      </figure>
    </div>
  );
}

export default Content;
