import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import './Notfound.scss';

const Notfound = () =>{
    return(
        <div className="notfound-wrapper">
            <div className="notfound-container">
                <p>Not Found</p>
                <Button color="white" size="medium"><Link to="/">Back to home</Link></Button>
            </div>
        </div>
    )
}

export default Notfound;