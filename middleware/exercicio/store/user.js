// user/FETCH_STARTED, user/FETCH_SUCCESS, user/FETCH_ERROR
const FETCH_STARTED = 'user/FETCH_STARTED';
const FETCH_SUCCESS = 'user/FETCH_SUCCESS';
const FETCH_ERROR = 'user/FETCH_ERROR';

export const userApi = async (token) => {
  const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  const data = await response.json();
  return data;
};
export const userFetchStarted = () => ({ type: FETCH_STARTED });
export const userFetchSuccess = () => ({ type: FETCH_SUCCESS });
export const userFetchError = () => ({ type: FETCH_ERROR });

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function user(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case FETCH_ERROR:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
}

export default user;
