import React, {Component, Fragment} from 'react';
import './App.css';
import * as placeholder from "./assets/placeholder-vault-boy.png";
import Login from "./containers/Login/Login";
import LayoutSupervisor from './containers/LayoutSupervisor/LayoutSupervisor';

class App extends Component{
  state = {
    usuario:
    {
      nombre: "Juan Pérez",
      imagen: placeholder,
    }
  }

  render() {
    return (
      <Fragment>
          <Login />
          {/* <LayoutSupervisor usuario={this.state.usuario} /> */}
      </Fragment>
    );
  }
}

export default App;
