import React, { Fragment, Component } from "react";
import estilos from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.mostrar !== this.props.mostrar || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Fragment>
                <Backdrop mostrar={this.props.mostrar} clicked={this.props.modalClosed} />
                <div className={estilos.Modal} style={{
                    transform: this.props.mostrar ? "translateY(0)" : "translateY(-100vh)",
                    opacity: this.props.mostrar ? "1" : "0"
                }}>
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default Modal;