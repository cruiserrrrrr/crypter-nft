import React from "react";
import Button from "../../../../Components/Button/Button";
import './CallToAction.scss';

const CallToAction = () =>{
    return(
        <div className="cta-wrapper">
            <div className="cta-container">
                <div className="cta-info">
                    <div className="cta-actions">
                        <div className="actions-info">
                            <p>Save your time with Stacks</p>
                            <p>Earn free crypto with Crypter</p>
                        </div>
                        <p>A creative agency that lead and inspire</p>
                    </div>
                    <div className="cta-info__buttons">
                        <Button color="blue" size="medium" value="Earn now"/>
                        <Button color="white" size="medium" value="Discover more"/>
                    </div>
                </div>
                <div className="cta-image">
                    <img src="https://github.com/cruiserrrrrr/img/blob/cruiserrrrrr/cta.png?raw=true" alt="" />
                </div>
            </div>
        </div>
    )
}
export default CallToAction;