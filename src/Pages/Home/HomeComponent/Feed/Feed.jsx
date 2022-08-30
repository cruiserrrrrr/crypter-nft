import React from "react";
import Button from "../../../../Components/Button/Button";
import FeedItemList from "../FeedItemList/FeedItemList";
import LatestCreator from "../LatestCreator/LatestCreator";
import './Feed.scss';



const Feed = () => {
    return (
        <div className="feed-wrapper">
            <div className="future-items">
                <div className="main__item">
                    <div className="main__item_img"></div>
                    <div className="main__item_info">
                        <div className="main__info-left">
                            <img className="main__profile_img" src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true" alt="" />
                            <div className="profile__info">
                                <p>The future of ETH®</p>
                                <p>18 in stock</p>
                            </div>
                        </div>
                        <div className="main__item_price"><p>1.254 ETH</p></div>
                    </div>
                </div>
                <div className="second__items">
                    <FeedItemList img="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/cactus.png?raw=true"
                        itemname="ETH never die"
                        profile="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true"
                        price="1.24"
                        amount="2"
                    />
                    <FeedItemList img="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/foxprofile.png?raw=true"
                        itemname="Future coming soon"
                        profile="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/03.png?raw=true"
                        price="0.25"
                        amount="1"
                    />
                    <FeedItemList img="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/girlflag.png?raw=true"
                        itemname="Elon Musk silver coin 3d print"
                        profile="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/05.png?raw=true"
                        price="0.19"
                        amount="5"
                    /> 
                </div>
            </div>
            <div className="feed-upload">
                <p className="feed-upload__header">Latest upload from creators 🔥</p>
                <LatestCreator creatorimg="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/08.png?raw=true" value="2.515" name="Payton Harris" border="bottom"/>
                <LatestCreator creatorimg="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/01.png?raw=true" value="2.417" name="Anita Bins" border="bottom"/>
                <LatestCreator creatorimg="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/04.png?raw=true" value="2.312" name="Joana Wuckert" border="bottom"/>
                <LatestCreator creatorimg="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/PopularCrypterItems/05.png?raw=true" value="1.951" name="Lorena Ledner" border=""/>
                <Button value="Discover more" size="medium" color="white"/>
            </div>
        </div>
    )
}

export default Feed;