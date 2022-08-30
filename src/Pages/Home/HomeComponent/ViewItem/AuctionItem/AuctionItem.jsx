import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../../Components/Button/Button";
import Timer from "../../../../../Components/Timer/Timer";
import './AuctionItem.scss';

const AuctionItem = (props) => {
    const { data = {
        id: 0,
        img: '',
        creatorimg:'',
        creatorname:'',
        price:'',
        timeH: '',
        timeM: ''
    } } = props;

    return (
        <div className="item-wrapper"
            id={data.id}
        >
            <div className="item-img">
                <img className="item-img" src={data.img} alt="" />
            </div>
            <div className="item-info">
                <div className="item-header">
                    <p>the creator network®</p>
                    <div className="item-info__creator">
                        <div className="creator-info">
                            <img src={data.creatorimg} alt="" />
                            <div className="creator">
                                <p>Creator</p>
                                <p>{data.creatorname}</p>
                            </div>
                        </div>
                        <div className="creator-price">
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/price-autcion.png?raw=true" alt="" />
                            <div className="price">
                                <p>Instant price</p>
                                <p>{data.price} ETH</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <div className="timer-info">
                        <div className="info-header">
                            <p>Current Bid</p>
                            <p>{data.price} ETH</p>
                            <p>1.00 ETH</p>
                        </div>
                        <p>Auction ending in</p>
                    </div>
                    <Timer hours={data.timeH} minutes={data.timeM} />
                </div>
                <div className="btns-wrapper">
                    <Button onClick={data.price + 1} size="all-width" value="Place a bid" color="blue" />
                    <Button href="/viewitem" size="all-width" color="white"><Link to="/viewitem">View item</Link></Button>
                </div>
            </div>
        </div>
    )
}

export default AuctionItem;