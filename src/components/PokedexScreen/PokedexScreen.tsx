import React from "react";

import "./styles.scss";

interface PokedexScreenProps {
    name: string;
    image: string;
}

export const PokedexScreen: React.FC<PokedexScreenProps> = ({
    name,
    image,
}) => {
    return (
        <div className="pokedex-screen">
            <div className="pokedex-screen__top">
                <div className="pokedex-screen__top-dot" />
                <div className="pokedex-screen__top-dot" />
            </div>
            <div className="pokedex-screen__container">
                <div className="pokedex-screen__image">
                    <img src={image} alt={name} />
                </div>
            </div>
            <div className="pokedex-screen__bottom">
                <div className="pokedex-screen__bottom-dot" />
                <div className="pokedex-screen__bottom-vent">
                    <div className="pokedex-screen__bottom-vent-line" />
                    <div className="pokedex-screen__bottom-vent-line" />
                    <div className="pokedex-screen__bottom-vent-line" />
                    <div className="pokedex-screen__bottom-vent-line" />
                </div>
            </div>
        </div>
    );
};
