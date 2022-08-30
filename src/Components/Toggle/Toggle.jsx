import React from "react";
import './Toggle.scss';

const Toggle = (props) =>{

    const {isToggled, onToggled, click} = props;

    return(
        <label className="toggle-wrapper" onClick={click}>
            <input className="toggle-checkbox" type="checkbox" checked={isToggled} onChange={onToggled}/>
            <span className="toggle-slider"/>
        </label>
    )
}

export default Toggle;