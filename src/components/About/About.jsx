import SectionTitle from '../SectionTitle/SectionTitle';
import './About.scss';

const About = () => {
  return (
    <section id="about">
      <SectionTitle
        span="About"
        h2={'Get a closer look at who I am.'}
        dashWidth="4rem"
      />
      <div className="content">
        <SectionTitle span="Who am I" dashWidth="2rem" />
        <p>
          I'm Andris, 27 years old, from Latvia. Front-end development has been
          an interest of mine for some time, and I want to switch it from my
          interest to profession. I learned everything about programming and
          specifically front-end by self-studying and I am still keen to learn
          more and gain experience in professional environment.
        </p>
        <SectionTitle span={`Skills`} dashWidth="2rem" />
        <p>
          JavaScript/TypeScript, HTML, CSS/SCSS, React, Redux, Apollo Client
        </p>
        <a href="#connect">
          <button>Get in touch</button>
        </a>
      </div>
    </section>
  );
};

export default About;
