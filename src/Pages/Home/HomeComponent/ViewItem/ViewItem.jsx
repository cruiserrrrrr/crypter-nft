import React, { useEffect, useState } from "react";
import AuctionItem from "./AuctionItem/AuctionItem";
import './ViewItem.scss';
import NextStep from '../../../../Components/SvgSprite/IconsSvg/nextstep.svg';

const data = [
    {
        id: 1,
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/bluedots.png?raw=true',
        creatorimg: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true',
        creatorname: 'Payton Harris',
        price: 2.51,
        timeH: '24',
        timeM: '12',
    },
    {
        id: 2,
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/bluegirl.png?raw=true',
        creatorimg: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/03.png?raw=true',
        creatorname: 'Anita Bins',
        price: 5.61,
    },
    {
        id: 3,
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/cactus.png?raw=true',
        creatorimg: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/04.png?raw=true',
        creatorname: 'Joana Wuckert',
        price: 1.28,
    },
    {
        id: 4,
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/corridor.png?raw=true',
        creatorimg: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/05.png?raw=true',
        creatorname: 'Lorena Ledner',
        price: 9.02,
    },
    {
        id: 5,
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/doublefox.png?raw=true',
        creatorimg: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/03.png?raw=true',
        creatorname: 'Anita Bins',
        price: 1.78,
    },
    {
        id: 6,
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/mandots.png?raw=true',
        creatorimg: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true',
        creatorname: 'Payton Harris',
        price: 2.67,
    },
    {
        id: 7,
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/mous.png?raw=true',
        creatorimg: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/08.png?raw=true',
        creatorname: 'Joana Wuckert',
        price: 1.23,
    },
    {
        id: 8,
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/polygon.png?raw=true',
        creatorimg: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/04.png?raw=true',
        creatorname: 'Lorena Ledner',
        price: 8.02,
    },
]



const ViewItem = () => {

    const [itemId, setId] = useState(0);
    // const [filtredData, setFiltredData] = useState();

    // useEffect(() => {
    //     if ( data.length) setFiltredData(data.filter((item) => itemId === item.id)[0])
    // }, [itemId]);

    const nextStep = () => {
        if (itemId < data.length - 1) {
            setId(itemId + 1)
        } else setId(0)
    }
    const prevStep = () => {
        if (itemId === 0) {
            setId(data.length - 1)
        } else setId(itemId - 1)
    }


    return (
        <div className="viewitem-container">
            <div>
                <AuctionItem data={data[itemId]} />
            </div>
            <div className="btn-step__wrapper">
                <button className="btn-step" onClick={prevStep}><img src={NextStep} alt="" /></button>
                <button className="btn-step" onClick={nextStep}><img src={NextStep} alt="" /></button>
            </div>
        </div>
    )
}

export default ViewItem;