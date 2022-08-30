import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import ArrowDrop from '../../../Components/SvgSprite/IconsSvg/arrowDrop.svg'
import './GaneralItems.scss';


const GaneralItems = (props) => {

    const { contentInfo, tittle, indexitem}  = props;

    const [ active, setActive ] = useState('');

    const activeTab = (index) => {
        setActive(index)
    }

    return (
        <li className="ganeral-items__wrapper" onClick={() => activeTab(indexitem)}>
            <div className="item-haeder">
                <p>{tittle}</p>
                <img src={ArrowDrop} alt="" />
            </div>
            <div className={active === indexitem ? "item-content active" : "item-content"}>
                <p>{contentInfo}</p>
                <Button color="white" size="small"><Link to="asd">Learn more</Link></Button>
            </div>
        </li>
    )
}

export default GaneralItems;