import React from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import multasReducer from "./store/reducers/multas";
import usuariosReducer from "./store/reducers/usuarios";

Axios.defaults.baseURL = "https://multa-app.herokuapp.com"; // esto es para usar la misma url en todas las peticiones http sin tener que andar escribiendo

const reducers = combineReducers(multasReducer, usuariosReducer);
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
