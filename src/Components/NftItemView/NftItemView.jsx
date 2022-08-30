import React from "react";
import './NftItemView.scss';
import Highest from '../SvgSprite/IconsSvg/Highest.svg'
import Button from "../Button/Button";
import Heart from '../SvgSprite/IconsSvg/heart.svg'


const NftItemView = (props) => {

    const { name, price, bid, img, stock } = props;
    // {`background-image: ${img}`}
    return (
        <li className="nft-item">
            <div className="nft-item__product">
                <div className="product-nav">
                    <div className="product-nav__haeder">
                        <p>purchasing !</p>
                        <Button value="❤" color="dark" size="small"/>
                    </div>
                    <Button value="Place a bid" color="blue" size="medium" />
                </div>
                <img className="product-img" src={img} alt="" />
            </div>
            <div className="item-content">
                <div className="item-content__price">
                    <p className="item-content__price-name">{name}</p>
                    <p className="item-content__price-price">{price} ETH</p>
                </div>
                <div className="item-content__collection">
                    <div className="item-content__collection-profile">
                        <img className="profile-item" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true" alt="" />
                        <img className="profile-item" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/04.png?raw=true" alt="" />
                        <img className="profile-item" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/05.png?raw=true" alt="" />
                    </div>
                    <p className="item-content__collection-stock">{stock} in stock</p>
                </div>
                <div className="item-content__bid">
                    <div className="item-content__bid-content">
                        <img className="content-img" src={Highest} alt="" />
                        <p className="content-highest">Highest bid</p>
                        <p className="content-bid">{bid}ETH</p>
                    </div>
                    <p className="item-content__bid-new">New bid 🔥</p>
                </div>
            </div>
        </li>
    )
}

export default NftItemView;