import React, { useState, useEffect } from 'react';
import config from '../../config';
import './index.scss';

const Statics =(props)=> {
  const [ listShorten, setListShorten ] = useState([]);

  useEffect(()=> {
    fetch(`${config.apiGateway.URL}shortens`)
      .then(response => response.json())
      .then(data => {
        const { shortens } = data;
          setListShorten([...listShorten, ...shortens]);
      });
  }, []);

  return (
    <div className="statics block-site">
      {/* <div className="font-h1 m-b-md">Your history</div>
      {listShorten.map((item, index)=> {
        return (
          <div className="statics--item flex-center-between" key={item?.id}>
            <div>{item?.shortUrl}</div>
            <div>mark</div>
          </div>
        );
      })} */}

      
    </div>
  )
};

export default Statics;