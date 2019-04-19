import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom" // # 模式
// import {BrowserRouter} from "react-router-dom" // 普通模式
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { Provider } from 'react-redux';
import reducer from "./reducers/index";

const store = createStore(reducer,applyMiddleware(thunk))

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root'));


serviceWorker.unregister();
