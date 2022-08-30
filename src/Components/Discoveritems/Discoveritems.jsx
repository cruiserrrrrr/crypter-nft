import React from "react";
import './Discoveritems.scss';
import Highest from '../SvgSprite/IconsSvg/Highest.svg'
import Button from "../Button/Button";

const Discoveritems = (props) => {

    const { data = [] } = props;

    return (
        data.map((obj, index) => (
            <li className="nft-item" type={obj.type}>
                <div className="nft-item__product">
                    <div className="product-nav">
                        <div className="product-nav__haeder">
                            <p>purchasing !</p>
                            <Button value="❤" color="dark" size="small" />
                        </div>
                        <Button value="Place a bid" color="blue" size="medium" />
                    </div>
                    <img className="product-img" src={obj.img} alt="" />
                </div>
                <div className="item-content">
                    <div className="item-content__price">
                        <p className="item-content__price-name">{obj.name}</p>
                        <p className="item-content__price-price">{obj.price} ETH</p>
                    </div>
                    <div className="item-content__collection">
                        <div className="item-content__collection-profile">
                            <img className="profile-item" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true" alt="" />
                            <img className="profile-item" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/04.png?raw=true" alt="" />
                            <img className="profile-item" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/05.png?raw=true" alt="" />
                        </div>
                        <p className="item-content__collection-stock">{obj.stock} in stock</p>
                    </div>
                    <div className="item-content__bid">
                        <div className="item-content__bid-content">
                            <img className="content-img" src={Highest} alt="" />
                            <p className="content-highest">Highest bid</p>
                            <p className="content-bid">0.00001 ETH</p>
                        </div>
                        <p className="item-content__bid-new">New bid 🔥</p>
                    </div>
                </div>
            </li>
        ))
    )
}

export default Discoveritems;