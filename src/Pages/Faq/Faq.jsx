import React, { useState } from "react";
import HotBid from "../Home/HomeComponent/HotBid/HotBid";
import './Faq.scss';
import GaneralItems from "./GaneralItems/GaneralItems";
import ArrowDrop from '../../Components/SvgSprite/IconsSvg/arrowDrop.svg';
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import Toggle from "../../Components/Toggle/Toggle";
import { useTheme } from "../../Hooks/useTheme";

const Faq = () => {

    const [active, setActive] = useState('');

    const activeTab = (index) => {
        setActive(index)
    }

    const { theme , setTheme } = useTheme();

    const handleLightThemeClick = () => {
        setTheme('light');
    };

    const handleDarkThemeClick = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');;
    }

    // const handleDarkThemeClick = () => {
    //     setTheme('dark');
    // };

    return (
        <div className="faq-wrapper">
            <div className="faq-container">
                <div className="faq-header">
                    <p className="faq-header__subtittle">learn how to get started</p>
                    <p className="faq-header__tittle">Frequently asked questions</p>
                    <p className="faq-header__info">Join Stacks community now to get free updates and also alot of freebies are waiting for you or <a href="">Contact Support</a></p>
                </div>
                <div className="faq-content">
                    <div className="faq-content__nav">
                        <button>General</button>
                        <button >Support</button>
                        <button>Hosting</button>
                        <button>Product</button>
                        <Toggle  onToggled={handleDarkThemeClick}/>
                    </div>
                    <div className="content-item__wrapper">
                        <div>
                            <div className="ganeral-items__wrapper" onClick={() => activeTab(1)}>
                                <div className="item-haeder">
                                    <p>How does it work</p>
                                    <img src={ArrowDrop} alt="" />
                                </div>
                                <div className={active === 1 ? "item-content active" : "item-content"}>
                                    <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode." </p>
                                    <Button color="white" size="small"><Link to="asd">Learn more</Link></Button>
                                </div>
                            </div>

                            <div className="ganeral-items__wrapper" onClick={() => activeTab(2)}>
                                <div className="item-haeder">
                                    <p>How to start with Stacks</p>
                                    <img src={ArrowDrop} alt="" />
                                </div>
                                <div className={active === 2 ? "item-content active" : "item-content"}>
                                    <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode." </p>
                                    <Button color="white" size="small"><Link to="asd">Learn more</Link></Button>
                                </div>
                            </div>

                            <div className="ganeral-items__wrapper" onClick={() => activeTab(3)}>
                                <div className="item-haeder">
                                    <p>Dose it suppport Dark Mode</p>
                                    <img src={ArrowDrop} alt="" />
                                </div>
                                <div className={active === 3 ? "item-content active" : "item-content"}>
                                    <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode." </p>
                                    <Button color="white" size="small"><Link to="asd">Learn more</Link></Button>
                                </div>
                            </div>

                            <div className="ganeral-items__wrapper" onClick={() => activeTab(4)}>
                                <div className="item-haeder">
                                    <p>Does it support Auto-Layout</p>
                                    <img src={ArrowDrop} alt="" />
                                </div>
                                <div className={active === 4 ? "item-content active" : "item-content"}>
                                    <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode." </p>
                                    <Button color="white" size="small"><Link to="asd">Learn more</Link></Button>
                                </div>
                            </div>

                            <div className="ganeral-items__wrapper" onClick={() => activeTab(5)}>
                                <div className="item-haeder">
                                    <p>What is Stacks Design System</p>
                                    <img src={ArrowDrop} alt="" />
                                </div>
                                <div className={active === 5 ? "item-content active" : "item-content"}>
                                    <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode." </p>
                                    <Button color="white" size="small"><Link to="asd">Learn more</Link></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HotBid />
            </div>
        </div>
    )
}

export default Faq;