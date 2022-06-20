import './BottomBar.scss';

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/andris-zuravlovs-838860242/"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/locuskuren">
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default BottomBar;
