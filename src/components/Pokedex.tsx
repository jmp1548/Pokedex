import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchPokemon } from "../store/actions";
import { selectPokemon, selectPokemonFlavorText } from "../store/selectors";
import "./styles/pokedex.scss";

import { Screen } from "./Screen";
import { Search } from "./Search";
import { StatsList } from "./StatsList";
import { Description } from "./Description";

const Pokedex: React.FC = () => {
    const dispatch = useAppDispatch();
    const [selectedPokemon, setselectedPokemon] = useState<string>("");

    const pokemon = useAppSelector((state) =>
        selectPokemon(state, selectedPokemon)
    );

    const flavorText = useAppSelector((state) =>
        selectPokemonFlavorText(state, selectedPokemon)
    );

    const handleSearch = (pokemon: string) => {
        setselectedPokemon(pokemon);

        if (pokemon !== "") {
            dispatch(fetchPokemon(pokemon));
        }
    };

    return (
        <div className="pokedex">
            <div className="pokedex__left">
                <div className="pokedex__left-top">
                    <div className="pokedex__left-top-dot pokedex__left-top-dot--big">
                        <div className="pokedex__left-top-dot pokedex__left-top-dot--big-inner" />
                    </div>
                    <div className="pokedex__left-top-dot pokedex__left-top-dot--red" />
                    <div className="pokedex__left-top-dot pokedex__left-top-dot--yellow" />
                    <div className="pokedex__left-top-dot pokedex__left-top-dot--green" />
                </div>
                <Screen image={pokemon?.pokemon.sprites.front_default} />
                <StatsList stats={pokemon?.pokemon.stats} />
                <Search handleSearch={handleSearch} />
            </div>
            <div className="pokedex__binding">
                <div className="pokedex__binding-top">
                    <svg
                        width="50"
                        height="50"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 0 10 Q 25 0 50 10"
                            stroke="black"
                            fill="transparent"
                        />
                    </svg>
                    <svg
                        width="50"
                        height="50"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 0 10 Q 25 0 50 10"
                            stroke="black"
                            fill="transparent"
                        />
                    </svg>
                </div>
                <div className="pokedex__binding-bottom">
                    <svg
                        width="50"
                        height="50"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 0 10 Q 25 0 50 10"
                            stroke="black"
                            fill="transparent"
                        />
                    </svg>
                    <svg
                        width="50"
                        height="50"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 0 10 Q 25 0 50 10"
                            stroke="black"
                            fill="transparent"
                        />
                    </svg>
                </div>
            </div>
            <div className="pokedex__right">
                <Description flavorText={flavorText} />
            </div>
        </div>
    );
};

export default Pokedex;
