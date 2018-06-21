import { createStore } from 'redux'
import reducer from './reducers/'

export default function configureStore() {
  const store = createStore(reducer);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('./reducers/');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}