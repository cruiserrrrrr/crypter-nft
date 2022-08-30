import React from "react";
import './CollectionItems.scss';

const CollectionItems = (props) => {
    const { CollectionList = [] } = props;
    return (
        <>
            {
                CollectionList.map((obj) => {
                    return (
                        <li className="collection-item">
                            <div className="item-content">
                                <div className="content-top">
                                    <img src={obj.contentImg1} alt="" />
                                </div>
                                <div className="content-bottom">
                                    <img src={obj.contentImg2} alt="" />
                                    <img src={obj.contentImg3} alt="" />
                                    <img src={obj.contentImg4} alt="" />
                                </div>
                            </div>
                            <div className="item-info">
                                <div className="item-info_header">
                                    <p>{obj.itemName} collection</p>
                                </div>
                                <div className="item-info_footer">
                                    <div className="item-info__footer-profile">
                                        <img src={obj.profileImg} alt="" />
                                        <p>By {obj.name}</p>
                                    </div>
                                    <p className="footer-amount">{obj.amount} items</p>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}
export default CollectionItems;