import './Welcome.scss';

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="introduction">
        <h1>
          Hey, I am <span className="highlight">Andris</span>
        </h1>
        <br />
        <h2>
          a <span className="highlight">self-thaught</span> front-end developer
        </h2>
        <br />
        <p>Stick around to see some of my work.</p>
        <br />
        <a href="#work">
          <button>See my work</button>
        </a>
      </div>
      <div className="image">
        <img
          src="https://res.cloudinary.com/locuskuren/image/upload/v1654855156/myChat/hero-graphic_m6ulhb.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Welcome;
