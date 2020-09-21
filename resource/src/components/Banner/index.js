import React from 'react';
import './index.scss';
import bannerImg from '../../images/illustration-working.svg';

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="block-site p-tb-xl body flexbox">
        <div className="banner__left">
          <div className="banner--title m-b-lg">
            More than just shorter links
        </div>

          <div className="banner--sub-title sub m-b-lg">
            Build your brand's recognition and get detailed insight on how your links are performing.
        </div>

          <div className="banner--get-started">
            <button className="btn btn--primary btn--circle">
              Get Started
          </button>
          </div>
        </div>

        <div className="banner__right">
          <img src={bannerImg} alt="Banner Image" />
        </div>
      </div>
    </div>
  )
};

export default Banner;