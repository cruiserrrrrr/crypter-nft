import React from "react";
import Button from "../../../../Components/Button/Button";
import './HomeHeader.scss';

const HomeHeader = () =>{
    return(
        <div className="homeheader-wrapper">
            <div className="homeheader-info">
                <p className="homeheader__subtittle">Create, explore, & collect digital art NFTs.</p>
                <p className="homeheader__tittle">The new creative economy.</p>
            </div>
            <Button value="Start your search" color="white" size="medium"/>
        </div>
    )
}

export default HomeHeader;