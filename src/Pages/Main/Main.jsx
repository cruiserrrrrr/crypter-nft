import React from "react";
import { Routes, Route } from "react-router";
import './Main.scss';

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Home from "../Home/Home";
import Upload from "../Upload/Upload";
import Notfound from "../Notfound/Notfound";
import UploadSingl from "../Upload/UploadSingl/UploadSingl";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import Faq from "../Faq/Faq";
import ViewItemPage from "../ViewItemPage/ViewItemPage";


const Main = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <Routes path="/home">
                <Route path="/" element={<Home/>}/>
                <Route path="/upload" element={<Upload/>}/>
                <Route path="/upload-singl" element={<UploadSingl/>}/>
                <Route path="/connect-waller" element={<ConnectWallet/>}/>
                <Route path="/FAQ" element={<Faq/>}/>
                <Route path="/viewitem" element={<ViewItemPage/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default Main;