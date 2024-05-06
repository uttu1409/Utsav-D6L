export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://swapi.dev/api/films/?format=json');
      if (!response.ok) throw new Error('failed to fetch data');

      const data = await response.json();
      console.log(typeof data);
      dispatch(fetchDataSuccess(data));    
    } catch(error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
