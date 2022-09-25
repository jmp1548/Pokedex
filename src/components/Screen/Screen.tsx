import React from "react";

import "./styles.scss";

interface ScreenProps {
    image: string | undefined;
}

export const Screen: React.FC<ScreenProps> = ({ image }) => {
    return (
        <div className="screen">
            <div className="screen__top">
                <div className="screen__top-dot" />
                <div className="screen__top-dot" />
            </div>
            <div className="screen__container">
                <div className="screen__image">
                    {image && <img src={image} />}
                </div>
            </div>
            <div className="screen__bottom">
                <div className="screen__bottom-dot" />
                <div className="screen__bottom-vent">
                    <div className="screen__bottom-vent-line" />
                    <div className="screen__bottom-vent-line" />
                    <div className="screen__bottom-vent-line" />
                    <div className="screen__bottom-vent-line" />
                </div>
            </div>
        </div>
    );
};
