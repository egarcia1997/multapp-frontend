import React from "react";
import * as multappLogo from "../../assets/multapp-logo.png";

const Logo = (props) => {
    return (
        <img src={multappLogo} alt="Logo de MultApp" width={props.width} height={props.height} />
    )
}

export default Logo;