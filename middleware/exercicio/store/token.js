import getLocalStorage from './helper/getLocalStorage.js';

const user = {
  username: 'dog',
  password: 'dog',
};
const FETCH_STARTED = 'token/FETCH_STARTED';
const FETCH_SUCCESS = 'token/FETCH_SUCCESS';
const FETCH_ERROR = 'token/FETCH_ERROR';

export const tkApi = async () => {
  const response = await fetch(
    'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  );
  const { token } = await response.json();
  return token;
};

export const tkFetchStarted = () => ({ type: FETCH_STARTED });
export const tkFetchSuccess = () => ({ type: FETCH_SUCCESS });
export const tkFetchError = () => ({ type: FETCH_ERROR });

const initialState = {
  loading: false,
  data: getLocalStorage('data', null),
  error: null,
};

function token(state = initialState, action) {
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

export default token;
