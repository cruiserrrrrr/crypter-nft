import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import NftItemView from "../../../../Components/NftItemView/NftItemView";
import './HotBid.scss';

const HotBid = () => {
    return (
        <div className="hotbid-wrapper">
            <div className="hotbid__header">
                <h2>Hot Bid</h2>
            </div>
            <div>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    swipe={true}
                    dots={false}
                    sidesOpacity={1}
                    showSides={true}
                    sideSize={.5}
                    autoCycle={false}
                    slidesToScroll={1}
                    slidesToShow={3}
                    scrollOnDevice={true}
                >
                    <div>
                        <NftItemView
                            bid="0.0001"
                            name="Amazing digital art"
                            price="1.845"
                            img="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/bluegirl.png?raw=true"
                            stock="2" />
                    </div>
                    <div>
                        <NftItemView
                            bid="0.0051"
                            name="Amazing digital art"
                            price="1.152"
                            img="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/corridor.png?raw=true"
                            stock="1" />
                    </div>
                    <div>
                        <NftItemView
                            bid="0.0001"
                            name="Amazing digital art"
                            price="2.972"
                            img="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/doublefox.png?raw=true"
                            stock="5" />
                    </div>
                    <div>
                        <NftItemView
                            bid="0.0141"
                            name="Amazing digital art"
                            price="2.723"
                            img="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/foxprofile.png?raw=true"
                            stock="1" />
                    </div>
                    <div>
                        <NftItemView
                            bid="0.002"
                            name="Amazing digital art"
                            price="1.125"
                            img="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/girlwrapper.png?raw=true"
                            stock="2" />
                    </div>
                    <div>
                        <NftItemView
                            bid="0.0001"
                            name="Amazing digital art"
                            price="2.115"
                            img="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/hexagon.png?raw=true"
                            stock="1" />
                    </div>
                    <div>
                        <NftItemView
                            bid="0.0612"
                            name="Amazing digital art"
                            price="2.515"
                            img="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/metall.png?raw=true"
                            stock="1" />
                    </div>
                </InfiniteCarousel>
            </div>
        </div>
    )
}

export default HotBid;