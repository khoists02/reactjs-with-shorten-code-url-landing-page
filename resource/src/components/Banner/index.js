import React from 'react';
import './index.scss';
import bannerImg from '../../images/illustration-working.svg';

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="block-site body flex-center-between">
        <div className="banner__left">
          <div className="banner--title m-b-sm">
            More than just shorter links
        </div>

          <div className="banner--sub sub m-b-lg">
            Build your brand's recognition and get detailed insight on how your links are performing.
        </div>

          <div className="banner--started">
            <button className="btn btn--primary btn--circle">
              Get Started
          </button>
          </div>
        </div>

        <div className="banner__right">
          <img src={bannerImg} alt={"Banner"} />
        </div>
      </div>
    </div>
  )
};

export default Banner;