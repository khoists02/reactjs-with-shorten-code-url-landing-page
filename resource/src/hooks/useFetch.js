import { useState, useEffect } from 'react';

export const useFetch =(url)=> {
  const [ state, setState ] = useState({data: null, loading: true});

  useEffect(() => {
    setState({data: null, loading: true});

    fetch(url)
      .then(x=> x.json())
      .then(data=> setState({ data: data.shortens, loading: false }))
      .catch(()=> setState({ data: null, loading: false }));
  }, [url]);

  return state;
}