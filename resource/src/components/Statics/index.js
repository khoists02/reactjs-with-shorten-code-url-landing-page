import React, { useState } from 'react';
import config from '../../config';
import { useFetch } from '../../hooks';
import './index.scss';

const Statics = () => {
  const [pagination, setPagination] = useState({page: 0, pageSize: 10});

  const { data, loading } = useFetch(`${config.apiGateway.URL}shortens?page=${pagination?.page}&pageSize=${pagination?.pageSize}`);

  const onPagination =()=> {
    setPagination({ ...pagination, pageSize: pagination.pageSize + 10 });
  }

  const next =()=> {
    setPagination({ ...pagination, page: pagination.page + 1});
  }

  return (
    <div className="statics block-site m-b-lg">
      {loading ? 'Loading ...' : (
        <>
          <div className="font-h1 m-b-md">Your histories</div>
          {data?.map((item, index) => {
            return (
              <div className="statics--item flex-center-between" key={item?.id}>
                <div className='font-h5 overflow-ellipsis'>{item?.longUrl}</div>
                {/* <div>mark</div> */}
              </div>
            );
          })}
        </>
      )}

      <div className='btn-groups flex-center-between'>
        <button className="btn btn--primary" onClick={onPagination}>More</button>
        <button className="btn btn--primary m-l-md" onClick={next}>Next</button>
        <button className="btn btn--primary m-l-md" onClick={()=> setPagination({page: 0, pageSize: 10})}>Reset</button>
      </div>
    </div>
  )
};

export default Statics;