import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import './Home.scss';
import CallToAction from "./HomeComponent/CallToAction/CallToAction";
import Collection from "./HomeComponent/Collection/Collection";
import Discover from "./HomeComponent/Discover/Discover";
import Feed from "./HomeComponent/Feed/Feed";
import HomeHeader from "./HomeComponent/HomeHeader/HomeHeader";
import HotBid from "./HomeComponent/HotBid/HotBid";
import PopularSellers from "./HomeComponent/PopularSellers/PopularSellers";
import ViewItem from "./HomeComponent/ViewItem/ViewItem";


const Home = () =>{
    return(
        <div className="home-container">
            <HomeHeader/>
            <ViewItem/>
            <Feed/>
            <PopularSellers/>
            <HotBid/>
            <Collection/>
            <Discover/>
            <CallToAction/>
        </div>
    )
}

export default Home;