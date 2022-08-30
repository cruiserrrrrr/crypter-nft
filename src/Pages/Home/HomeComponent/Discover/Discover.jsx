import React, { useState, useEffect } from "react";
import Button from "../../../../Components/Button/Button";
import Discoveritems from "../../../../Components/Discoveritems/Discoveritems";
import Dropdown from "../../../../Components/Dropdown/Dropdown";
import './Discover.scss';




const discoverData = [
    {
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/bluedots.png?raw=true',
        type: 'game',
        price: '2.51',
        name: 'Amazing digital art',
        stock: '5',
    },
    {
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/bluegirl.png?raw=true',
        type: 'art',
        price: '1.61',
        name: 'Amazing digital art',
        stock: '2',
    },
    {
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/cactus.png?raw=true',
        type: 'photography',
        price: '6.25',
        name: 'Amazing digital art',
        stock: '1',
    },
    {
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/corridor.png?raw=true',
        type: 'music',
        price: '3.95',
        name: 'Amazing digital art',
        stock: '1',
    },
    {
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/doublefox.png?raw=true',
        type: 'video',
        price: '8.16',
        name: 'Amazing digital art',
        stock: '2',
    },
    {
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/fox.png?raw=true',
        type: 'game',
        price: '5.62',
        name: 'Amazing digital art',
        stock: '1',
    },
    {
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/foxprofile.png?raw=true',
        type: 'art',
        price: '1.98',
        name: 'Amazing digital art',
        stock: '1',
    },
    {
        img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/girlflag.png?raw=true',
        type: 'photography',
        price: '7.26',
        name: 'Amazing digital art',
        stock: '8',
    },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/girllist.png?raw=true',
    //     type: 'music',
    //     price: '6.12',
    //     name: 'Amazing digital art',
    //     stock: '1',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/girlwrapper.png?raw=true',
    //     type: 'video',
    //     price: '10.1',
    //     name: 'Amazing digital art',
    //     stock: '2',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/hexagon.png?raw=true',
    //     type: 'art',
    //     price: '1.75',
    //     name: 'Amazing digital art',
    //     stock: '2',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/ice.png?raw=true',
    //     type: 'photography',
    //     price: '0.97',
    //     name: 'Amazing digital art',
    //     stock: '3',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/mandots.png?raw=true',
    //     type: 'video',
    //     price: '8.81',
    //     name: 'Amazing digital art',
    //     stock: '1',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/mans.png?raw=true',
    //     type: 'music',
    //     price: '26.1',
    //     name: 'Amazing digital art',
    //     stock: '4',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/metall.png?raw=true',
    //     type: 'photography',
    //     price: '3.14',
    //     name: 'Amazing digital art',
    //     stock: '7',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/mous.png?raw=true',
    //     type: 'game',
    //     price: '9.67',
    //     name: 'Amazing digital art',
    //     stock: '1',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/orangespot.png?raw=true',
    //     type: 'art',
    //     price: '3.67',
    //     name: 'Amazing digital art',
    //     stock: '3',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/polygon.png?raw=true',
    //     type: 'music',
    //     price: '1.54',
    //     name: 'Amazing digital art',
    //     stock: '2',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/post.png?raw=true',
    //     type: 'video',
    //     price: '1.78',
    //     name: 'Amazing digital art',
    //     stock: '8',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/prismaParts.png?raw=true',
    //     type: 'photography',
    //     price: '7.89',
    //     name: 'Amazing digital art',
    //     stock: '5',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/purpulespot.png?raw=true',
    //     type: 'video',
    //     price: '8.61',
    //     name: 'Amazing digital art',
    //     stock: '6',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/redgirl.png?raw=true',
    //     type: 'art',
    //     price: '7.31',
    //     name: 'Amazing digital art',
    //     stock: '3',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/girllist.png?raw=true',
    //     type: 'game',
    //     price: '2.51',
    //     name: 'Amazing digital art',
    //     stock: '2',
    // },
    // {
    //     img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/mandots.png?raw=true',
    //     type: 'video',
    //     price: '8.81',
    //     name: 'Amazing digital art',
    //     stock: '1',
    // }

]
const selectData = [
    { value: 'test' },
    { value: 'testt' },
    { value: 'testtt' }
]

const Discover = () => {

    const [type, setType] = useState('all');
    const [filtredData, setFiltredData] = useState(discoverData);

    useEffect(() => {
        if (type !== 'all') {
            setFiltredData(discoverData.filter((item) => {
                return item.type === type;
            }))
        } else {
            setFiltredData(discoverData)
        }
    }, [type]);


    const [itemsDiscover, setCount] = useState(1);
    const [counter, setCounter] = useState([]);

    
    useEffect(() => {

    })


    return (
        <div className="discover-container">
            <div className="discover-wrapper">
                <div className="discover-header">
                    <h2>Discover</h2>
                </div>
                <div className="discover-content">
                    <div className="discover-filter">
                        <div className="filter-header">
                            <Dropdown background='zindex' placeholder='Recently added' list={selectData} noneTittle="noneTittle" />
                            <div className="filter_nav">
                                <button onClick={() => setType('all')} className="btn_filter" >All items</button>
                                <button onClick={() => setType('art')} className="btn_filter">Art</button>
                                <button onClick={() => setType('game')} className="btn_filter">Game</button>
                                <button onClick={() => setType('photography')} className="btn_filter">Photography</button>
                                <button onClick={() => setType('music')} className="btn_filter">Music</button>
                                <button onClick={() => setType('video')} className="btn_filter">Video</button>
                            </div>
                            <div><Button onClick={() => setType('all')} color="blue" size="medium" value="Cancel" /></div>
                        </div>
                        <div className="filter-footer">
                            <Dropdown background='zindex' placeholder='Recently added' list={selectData} selectTittle="Price" />
                            <Dropdown background='zindex' placeholder='Recently added' list={selectData} selectTittle="Likes" />
                            <Dropdown background='zindex' placeholder='Recently added' list={selectData} selectTittle="Creator" />
                            <Dropdown background='zindex' placeholder='Recently added' list={selectData} selectTittle="" />
                        </div>
                    </div>
                    <div className="discover-content__items">
                        {filtredData.slice(0, itemsDiscover).map(() => {
                            return (
                                <Discoveritems data={discoverData} />
                            )
                        })}
                    </div>
                </div>
                <button className="loadmore-btn" onClick={() => setCount(itemsDiscover + 1)}>Load more</button>
            </div>
        </div>
    )
}
export default Discover;