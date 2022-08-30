import React from "react";
import './Collection.scss';
import CollectionItems from "./CollectionItems/CollectionItems";


const dataCollection = [
    {
        "itemName": "Awesome ",
        "profileImg": "Future",
        "name": "Payton Harris",
        "amount": "18",
        "contentImg1": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/mandots.png?raw=true",
        "contentImg2": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/hexagon.png?raw=true",
        "contentImg3": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/girlflag.png?raw=true",
        "contentImg4": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/foxprofile.png?raw=true"
    },
    {
        "itemName": "Awesome ",
        "profileImg": "Awesome",
        "name": "Anita Bins",
        "amount": "25",
        "contentImg1": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/bluedots.png?raw=true",
        "contentImg2": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/bluegirl.png?raw=true",
        "contentImg3": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/corridor.png?raw=true",
        "contentImg4": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/cactus.png?raw=true"
    },
    {
        "itemName": "Awesome ",
        "profileImg": "Limited",
        "name": "Joana Wuckert",
        "amount": "15",
        "contentImg1": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/girllist.png?raw=true",
        "contentImg2": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/girlwrapper.png?raw=true",
        "contentImg3": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/orangespot.png?raw=true",
        "contentImg4": "https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/post.png?raw=true"
    }
];



const Collection = () => {
    return (
        <div className="collection-wrapper">
            <div className="collection-container">
                <div className="collection-haeder">
                    <h2>Hot collections</h2>
                </div>
                <div className="collectoin-content">
                    <CollectionItems CollectionList={dataCollection} />
                </div>
            </div>
        </div>
    )
}

export default Collection;