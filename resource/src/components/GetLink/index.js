import React, { useState } from 'react';
import './index.scss';
import { useInput } from '../../hooks';

const GetLink = (props) => {
  const { value, bind, reset } = useInput('');
  const [error, setError] = useState(false);

  const shortenLink = () => {
    setError(!validLink(value));
    if (!validLink(value)) {
      return;
    }
    reset();
  }

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
          <button className="btn btn--primary btn--shorten" onClick={shortenLink}>Shorten It!</button>
        </div>
      </div>
      <div className={error ? 'show text-danger m-t-xxs font-h4' : 'hidden'}>
          Your link is Invalid
        </div>  
    </div>
  )
};

export default GetLink;
