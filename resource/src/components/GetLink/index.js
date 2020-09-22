import React, { useState, useCallback } from 'react';
import './index.scss';
import { useInput } from '../../hooks';
import config from '../../config';

const GetLink = (props) => {
  const { value, bind } = useInput('');
  const [error, setError] = useState(false);
  const [ newUrls, setNewUrls ] = useState([]);

  const useCallbackHandleShorten = useCallback(()=> {
    setError(!validLink(value));
    if (!validLink(value)) {
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ longUrl: value })
    };

    fetch(`${config.apiGateway.URL}shorten`, requestOptions)
      .then(response => response.json())
      .then(data => {
        const { shorten } = data;
        shorten && setNewUrls([shorten, ...newUrls]);
      }).catch(error=> {
        console.log('error');
      });
  }, [value, newUrls]);

  const validLink = str => {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }

  return (
    <div className="getlink">
      <div className="flexbox container full-width">
        <div className="m-r-md container--input flex-auto">
          <input className="input" type="text" {...bind} />
        </div>
        <div className="shorten">
          <button className="btn btn--primary btn--shorten" onClick={useCallbackHandleShorten} disabled={!value}>Shorten It!</button>
        </div>
      </div>
      <div className={error ? 'show text-danger m-t-xxs font-h4' : 'hidden'}>
        Your link is Invalid
      </div>
      {newUrls.map((item, index)=> {
          return (
            <div className="item m-tb-md" key={item?.id}>
              <span className="text-sub">{item?.shortUrl}</span>
            </div>
          );
        })}
    </div>
  )
};

export default GetLink;
