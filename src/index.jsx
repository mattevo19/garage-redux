import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import '../assets/stylesheets/application.scss';

// state and reducers
const garageName = promt('What is your garage?');
const initialState = {
  garage: garageName,
  cars: []
}

const reducers = combineReducers({
  // key: reducer
  garage: (state = null, action) => state,
  cars: carsReducer

});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          TODO
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
