import React from "react";
import './PopularItems.scss';
import ArrowShare from '../SvgSprite/IconsSvg/arrowShare.svg';
import PlusBorder from '../SvgSprite/IconsSvg/PlusBorder.svg';
import TopIceon from '../SvgSprite/IconsSvg/topIcon.svg';





const PopularItems = (props) => {

    const {posNumber, imgProfile, name, sum } = props;

    return (

        <li className="library-item">
            <div className="item-header">
                <div className="item-pos">
                    <img src={TopIceon} alt="" />
                    <p><span>#</span>{posNumber}</p>
                </div>
                <div className="item-nav">
                    <img src={PlusBorder} alt="" />
                    <img src={ArrowShare} alt="" />
                </div>
            </div>
            <div className="item-content">
                <img src={imgProfile} alt="" />
                <p>{name}</p>
                <p>{sum}<span>ETH</span></p>
            </div>
        </li>

    )
}


export default PopularItems;