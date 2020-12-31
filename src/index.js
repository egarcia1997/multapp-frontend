import React from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { SnackbarProvider } from "notistack";
import App from './App';
import * as serviceWorker from './serviceWorker';
import notifierReducer from "./components/Notifier/reducer";
import loginReducer from "./containers/Login/reducer";
import cambiarContrasenaReducer from "./components/CambiarContrasena/reducer";
import perfilReducer from "./components/Perfil/reducer";
import multasReducer from "./components/Multas/reducer";
import filtroReducer from "./components/Filtro/reducer";
import multaReducer from "./components/Multa/reducer";
import resolverMultaReducer from "./components/ResolverMulta/reducer";
import usuariosReducer from "./components/Usuarios/reducer";
import editarUsuarioReducer from "./components/EditarUsuario/reducer";
import eliminarUsuarioReducer from "./components/EliminarUsuario/reducer";
import usuarioReducer from "./components/Usuario/reducer";
import vehiculosReducer from "./components/Vehiculos/reducer";
import agregarMarcaReducer from "./components/AgregarMarca/reducer";
import eliminarMarcaReducer from "./components/EliminarMarca/reducer";

Axios.defaults.baseURL = "http://localhost:8000/api"; // esto es para usar la misma url en todas las peticiones http sin tener que andar escribiendo

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    notifier: notifierReducer,
    login: loginReducer,
    cambiarContrasena: cambiarContrasenaReducer,
    perfil: perfilReducer,
    multas: multasReducer,
    filtro: filtroReducer,
    multa: multaReducer,
    resolverMulta: resolverMultaReducer,
    usuarios: usuariosReducer,
    editarUsuario: editarUsuarioReducer,
    eliminarUsuario: eliminarUsuarioReducer,
    usuario: usuarioReducer,
    vehiculos: vehiculosReducer,
    agregarMarca: agregarMarcaReducer,
    eliminarMarca: eliminarMarcaReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SnackbarProvider>
                <App />
            </SnackbarProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
