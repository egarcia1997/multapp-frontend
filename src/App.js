import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as placeholder from "./assets/placeholder-vault-boy.png";
import Login from "./containers/Login/Login";
import LayoutSupervisor from './containers/LayoutSupervisor/LayoutSupervisor';

class App extends Component{
    state = {
        usuario: {
            nombre: "Juan Pérez",
            imagen: placeholder,
        }
    }

    render() {
        return (
            <BrowserRouter>
                {/* <Login /> */}
                <LayoutSupervisor usuario={this.state.usuario} />
            </BrowserRouter>
        );
    }
}

export default App;
