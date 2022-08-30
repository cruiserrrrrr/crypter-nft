import React from "react";
import './FeedItemList.scss';
import Button from "../../../../Components/Button/Button"


const FeedItemList = (props) => {

    const { img, itemname, profile, price, amount } = props;

    return (
        <div className="feed-itemlist">
            <img className="itemlist__img" src={img} alt="" />
            <div className="item-content">
                <p className="item__name">{itemname}</p>
                <div className="item-profile">
                    <img className="item-profile__img" src={profile} alt="" />
                    <p className="item-profile__price">{price} ETH</p>
                    <p className="item-profile__amount">{amount} of 12</p>
                </div>
                <Button color="white" size="small" value="Place a bid"/>
            </div>
        </div>
    )
}

export default FeedItemList;