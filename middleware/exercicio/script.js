import store from './store/configureStore.js';
import {
  tkFetchStarted,
  tkFetchSuccess,
  tkFetchError,
  tkApi,
} from './store/token.js';
import {
  userFetchStarted,
  userFetchSuccess,
  userFetchError,
} from './store/user.js';

function render() {
  console.log(tkApi);
  store.dispatch(tkApi);
}
render();

store.subscribe(render);
