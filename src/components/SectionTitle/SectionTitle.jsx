import './SectionTitle.scss';

const SectionTitle = ({ span, h2, dashWidth }) => {
  return (
    <div className="section-title">
      <div className="title">
        <div className="dash" style={{ width: dashWidth }}></div>
        <span style={{ color: dashWidth !== '4rem' ? 'white' : '#d1d5e8' }}>
          {span}
        </span>
      </div>
      {h2 && <h2>{h2}</h2>}
    </div>
  );
};

export default SectionTitle;
