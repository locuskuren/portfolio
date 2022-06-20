import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo" onClick={() => window.scrollTo(0, 0)} />
      <nav>
        <ul>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
