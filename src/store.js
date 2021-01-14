import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {watchFetchExchangeRates} from "./redux/ducks/sagas";
import reducer from "./redux/ducks/reducer";

const saga = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, composeEnhancer(applyMiddleware(saga))
  );

saga.run(watchFetchExchangeRates);

export default store;