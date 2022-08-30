import React from "react";
import './DefoultSearch.scss';


const DefoultSearch = (props) =>{

    const{placeholder, onChange} = props;

    return(
        <>
            <input onChange={onChange} className="defoult-search" type="text" placeholder={placeholder} />
        </>
    )
}

export default DefoultSearch;