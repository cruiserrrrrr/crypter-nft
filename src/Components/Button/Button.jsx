import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = (props) => {

    const {color, size, value, starleft, starright, children, href} = props;

    return (
        <div>
            <button href={href} className={`default-btn btn_${size} btn_${color}`}>{starleft}{value}{children}{starright}</button>
        </div>    
    )
}

export default Button;