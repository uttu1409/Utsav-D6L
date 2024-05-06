// abc.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './action'; 

const CounterThunkAPI = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h2>API Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      { data.results? (
        <ol >
          {data.results.map(item => (
            <li  style={{border:"4px solid black", margin:"10px", padding:"5px", width:"80%"}}>
              <p> Title: {item.title}</p>
              <p>Episode_id: {item.episode_id}</p>
              <p>Director {item.director}</p>
              <p>Producer {item.producer}</p>
              <p>Release date : {item.release_date}</p>
              <p>Url: {item.url}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default CounterThunkAPI;
