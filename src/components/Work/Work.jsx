import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Work.scss';

const works = [
  {
    id: 0,
    name: 'myChat',
    shortDesc: 'React Apollo Chat (Telegram lookalike)',
    desc: 'myChat is front-end application for GraphQL backend. It uses Apollo Client for both local and remote data with GraphQL. Design was mostly made according to how Telegram looks. To start using the application you need to register and afterwards just click on any user and start chatting. Thanks to webscockets you and recipient will receive messages instantly.',
    link: 'https://locuskuren-mychat.netlify.app/',
    preview:
      'https://res.cloudinary.com/locuskuren/image/upload/v1655285897/myChat/localhost_3002__hhx5jb.png',
    github: 'https://github.com/locuskuren/myChat',
  },
  {
    id: 1,
    name: 'mySocial',
    shortDesc: 'React Redux Social Network (Instragram lookalike)',
    desc: 'mySocial is front-end app for REST API backend. It uses Redux for managing both local and remote data. Design was mostly made according to how Instagram looks, with few deviations. To start using the application you need to register and afterwards you can create your posts with pictures, like posts, comment posts and subscribe to other users.',
    link: 'https://locuskuren-mysocial.herokuapp.com/',
    preview:
      'https://res.cloudinary.com/locuskuren/image/upload/v1655294178/myChat/locuskuren-mysocial.herokuapp.com_explore_2_wfegvd.png',
    github: 'https://github.com/locuskuren/mySocial',
  },
  {
    id: 2,
    name: 'myShop',
    shortDesc: 'React Redux Online Shop',
    desc: 'myShop is front-end app for REST API backend. It uses Redux for managing both local and remote data. To start using the application visit the website and just scroll to one of the categories and items to your cart, if you want to try check-out you will need to register.',
    link: 'https://locuskuren-myshop.netlify.app/',
    preview:
      'https://res.cloudinary.com/locuskuren/image/upload/c_scale,h_1208,w_1844/v1655293484/myChat/locuskuren-myshop.netlify.app__1_ugxbft.png',
    github: 'https://github.com/locuskuren/myShop',
  },
];

const Work = () => {
  const [selectedWorkId, setSelectedWorkId] = useState(0);
  const [selectedWork, setSelectedWork] = useState(works[selectedWorkId]);

  useEffect(() => {
    setSelectedWork(works[selectedWorkId]);
  }, [selectedWorkId]);

  return (
    <section id="work">
      <SectionTitle
        h2="Hand-picked projects for you to see."
        span="Work"
        dashWidth="4rem"
      />
      <div className="works">
        <div className="info">
          <div className="buttons">
            <button
              onClick={() =>
                setSelectedWorkId((prev) =>
                  prev - 1 >= 0 ? prev - 1 : works.length - 1
                )
              }
            >
              <i className="fa-solid fa-arrow-left-long"></i>
            </button>
            <span className="counter">
              0{selectedWorkId + 1} / 0{works.length}
            </span>
            <button
              onClick={() =>
                setSelectedWorkId((prev) =>
                  prev + 1 < works.length ? prev + 1 : 0
                )
              }
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <h2 className="work-name">{selectedWork.name}</h2>
          <p className="work-short-desc">{selectedWork.shortDesc}</p>
          <p className="work-description">{selectedWork.desc}</p>
          <div className="link-buttons">
            <a href={selectedWork.link} target="_blank" rel="noreferrer">
              <button className="website-link">
                Visit {selectedWork.name}{' '}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </a>
            <a href={selectedWork.github} target="_blank" rel="noreferrer">
              <button className="github-link">
                {selectedWork.name} GitHub{' '}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: 'black' }}
                ></i>
              </button>
            </a>
          </div>
        </div>
        <div className="preview">
          <img
            src={selectedWork.preview}
            alt={`${selectedWork.name} preview`}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
