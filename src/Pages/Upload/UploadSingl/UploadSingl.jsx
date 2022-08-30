import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import DefoultSearch from "../../../Components/DefoultSearch/DefoultSearch";
import Dropdown from "../../../Components/Dropdown/Dropdown";
import Toggle from "../../../Components/Toggle/Toggle";
import './UploadSingl.scss';
import Highest from '../../../Components/SvgSprite/IconsSvg/Highest.svg';

// const discoverData = [
//     {
//         img: 'https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/bluedots.png?raw=true',
//         type: 'game',
//         price: '2.51',
//         name: 'Amazing digital art',
//         stock: '5',
//     }
// ]

const royaltiesData = [
    { value: '10%' },
    { value: '30%' },
    { value: '50%' }
]
const UploadSingl = () => {

    const [title, setTitle] = useState('');

    return (
        <div className="upload-singl__wrapper">
            <div className="upload-singl__container">
                <div className="singl-content__options">
                    <div className="options-header">
                        <p>Create single collectible</p>
                        <Button color="white" size="small"><Link to="/asd">Switch to Multiple</Link></Button>
                    </div>
                    <div className="options-content">
                        <div className="content-details">
                            <p>Item Details</p>
                            <div className="details-item">
                                <p>Item name</p>
                                <DefoultSearch onChange={event => setTitle(event.target.value)} placeholder="e. g. “Redeemable Bitcoin Card with logo“" />
                            </div>
                            <div className="details-item">
                                <p>Description</p>
                                <DefoultSearch placeholder="e. g. “After purchasing you will able to recived the logo...”" />
                            </div>
                            <div className="details-properties">
                                <Dropdown noneTittle="noneTittle" placeholder="%" list={royaltiesData} />
                                <DefoultSearch placeholder="e. g. Size" />
                                <DefoultSearch placeholder="e. g. Propertie" />
                            </div>
                        </div>
                        <div className="items-settings">
                            <div className="settings-item">
                                <div className="settings-item__info">
                                    <p>Put on sale</p>
                                    <p>You’ll receive bids on this item</p>
                                </div>
                                <Toggle />
                            </div>
                            <div className="settings-item">
                                <div className="settings-item__info">
                                    <p>Instant sale price</p>
                                    <p>Enter the price for which the item will be instantly sold</p>
                                </div>
                                <Toggle />
                            </div>
                            <div className="settings-item">
                                <div className="settings-item__info">
                                    <p>Unlock once purchased</p>
                                    <p>Content will be unlocked after successful transaction</p>
                                </div>
                                <Toggle />
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <Button value="Create item" size="medium" color="blue" />
                        </div>
                    </div>
                    <div className="options-footer">

                    </div>
                </div>
                <div className="singl-content__choice-item">
                    <p>Prewiew</p>
                    <li className="nft-item" >
                        <div className="nft-item__product">
                            <div className="product-nav">
                                <div className="product-nav__haeder">
                                    <p>purchasing !</p>
                                    <Button value="❤" color="dark" size="small" />
                                </div>
                                <Button value="Place a bid" color="blue" size="medium" />
                            </div>
                            <img className="product-img" src='https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/post.png?raw=true' alt="" />
                        </div>
                        <div className="item-content">
                            <div className="item-content__price">
                                <p className="item-content__price-name">{title}</p>
                                <p className="item-content__price-price">price ETH</p>
                            </div>
                            <div className="item-content__collection">
                                <div className="item-content__collection-profile">
                                    <img className="profile-item" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true" alt="" />
                                    <img className="profile-item" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/04.png?raw=true" alt="" />
                                    <img className="profile-item" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/05.png?raw=true" alt="" />
                                </div>
                                <p className="item-content__collection-stock">stock in stock</p>
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
                </div>
            </div>
        </div>
    )
}

export default UploadSingl;