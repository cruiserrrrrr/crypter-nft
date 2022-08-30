import React, {useState} from "react";
import WalletSvg from '../../Components/SvgSprite/IconsSvg/wallet.svg';
import Chek from '../../Components/SvgSprite/IconsSvg/check.svg';
import './ConnectWallet.scss';
import Arrow from '../../Components/SvgSprite/IconsSvg/arrowShare.svg'

const items = [
    {
        title:'',
        img:'',
        content:'',
    }
]


const ConnectWallet = () => {

    

    const [ active, setActive ] = useState('');

    const activeTab = (index) =>{
        setActive(index)
    }

    return (
        <div className="connectwallet-wrapper">
            <div className="connectwallet-container">
                <div className="connectwallet-header">
                    <p>Connect your wallet</p>
                </div>
                <div className="connectwallet-content">
                    <div className="tab-btns">
                        <div className={active === 1 ? "tab-btn active" : "tab-btn"} onClick={() => activeTab(1)}>
                            <img className={active === 1 ? "tab-img1 tab-img active" : " tab-img tab-img1"} src={WalletSvg} alt="" />
                            <img  className={active === 1 ? "tab-chek active" : "tab-chek"} src={Chek} alt="" />
                            <p>Formatic</p>
                        </div>
                        <div className={active === 2 ? "tab-btn active" : "tab-btn"} onClick={() => activeTab(2)}>
                            <img className={active === 2 ? "tab-img2 tab-img active" : " tab-img tab-img2"} src={WalletSvg} alt="" />
                            <img  className={active === 2 ? "tab-chek active" : "tab-chek"} src={Chek} alt="" />
                            <p>Coinbase Wallet</p>
                        </div>
                        <div className={active === 3 ? "tab-btn active" : "tab-btn"} onClick={() => activeTab(3)}>
                            <img className={active === 3 ? "tab-img3 tab-img active" : " tab-img tab-img3"} src={WalletSvg} alt="" />
                            <img className={active === 3 ? "tab-chek active" : "tab-chek"} src={Chek} alt="" />
                            <p>MyEtherWallet</p>
                        </div>
                        <div className={active === 4 ? "tab-btn active" : "tab-btn"} onClick={() => activeTab(4)}>
                            <img className={active === 4 ? "tab-img4 tab-img active" : " tab-img tab-img4"} src={WalletSvg} alt="" />
                            <img  className={active === 4 ? "tab-chek active" : "tab-chek"} src={Chek} alt="" />
                            <p>Wallet Connect</p>
                        </div>
                    </div>
                    <div className="tab-content__wrapper">
                        <div className="tab-item__main">
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/connectW/connectW1.png?raw=true" alt="" />
                        </div>
                        <div className={active === 1 ? "tab-item active" : "tab-item"}>
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/connectW/connectW3.png?raw=true" alt="" />
                        </div>
                        <div className={active === 2 ? "tab-item active" : "tab-item"}>
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/connectW/connectW2.png?raw=true" alt="" />
                        </div>
                        <div className={active === 3 ? "tab-item active" : "tab-item"}>
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/connectW/connectW4.png?raw=true" alt="" />
                        </div>
                        <div className={active === 4 ? "tab-item active" : "tab-item"}>
                            <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/connectW/connectW5.png?raw=true" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectWallet;