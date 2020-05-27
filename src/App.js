import React, {Component, Fragment} from 'react';
import './App.css';
import * as placeholder from "./assets/placeholder-vault-boy.png";
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
          <LayoutSupervisor usuario={this.state.usuario} />
      </Fragment>
    );
  }
}

export default App;
