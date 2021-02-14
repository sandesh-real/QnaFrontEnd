import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import QuestionReducer from './store/reducers/Question';
import AuthReducer from './store/reducers/auth';
import viewedAnswerReducer from './store/reducers/viewedAnswer';
import commentReducer from './store/reducers/Comment';
import profileReducer from './store/reducers/Profile';
import notificationReducer from './store/reducers/notification';
import friedRequestReducer from './store/reducers/friendRequest';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
  Question:QuestionReducer,
  auth:AuthReducer,
  viewAnswer:viewedAnswerReducer,
  comment:commentReducer,
  profile:profileReducer,
  notification:notificationReducer,
  friendRequest:friedRequestReducer

})
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <BrowserRouter>
    <App  />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
