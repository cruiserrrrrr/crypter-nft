import React from "react";
import './LatestCreator.scss';

const LatestCreator = (props) =>{
    const{creatorimg, value, name, border} = props;

    return(
        <div className={`latestCreator-item ${border}`}>
            <img className="item-img" src={creatorimg} alt="" />
            <div className="item-content">
                <p className="item__name">{name}</p>
                <p className="item__value">{value}<span>ETH</span></p>
            </div>
        </div>
    )
}

export default LatestCreator;