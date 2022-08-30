import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import './Upload.scss';

const Upload = () => {
    return (
        <div className="upload-wrapper">
            <div className="upload-container">
                <div className="upload-header">
                    <div className="upload-header__container">
                        <Button color="white" size="medium">
                            <Link to="/">Back to home</Link>
                        </Button>
                        <Button color="white" size="medium">
                            <Link to="/">Upload Item</Link>
                        </Button>
                    </div>
                </div>
                <div className="upload-content">
                    <div className="upload-info">
                        <h2>Upload item</h2>
                        <p>Choose <span>“Single”</span> if you want your collectible to be one of a kind or <span>“Multiple”</span> if you want to sell one collectible multiple times</p>
                    </div>
                    <div className="upload-item__wrapper">
                        <div className="upload-items">
                            <div className="upload-item">
                                <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/upload/upload1.png?raw=true" alt="" />
                                <Button color="white" size="medium">
                                    <Link to="/upload-singl">Create Single</Link>
                                </Button>
                            </div>
                            <div className="upload-item">
                                <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/upload/upload2.png?raw=true" alt="" />
                                <Button color="blue" size="medium">
                                    <Link to="/">Create Multiple</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="upload-info">
                            <p>We do not own your private keys and cannot access your funds without your confirmation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload;