import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchPokemon } from "../store/actions";
import {
    selectPokemon,
    selectPokemonFlavorText,
    selectPokemonAbilities,
    selectPokemonTypes,
    selectPokemonEvolutionChain,
    selectHistory,
} from "../store/selectors";
import { pushHistory } from "../store/reducers";
import "./styles/pokedex.scss";

import { Screen } from "./Screen";
import { Search } from "./Search";
import { StatsList } from "./StatsList";
import { Description } from "./Description";
import { AbilitiesList } from "./AbilitiesList";
import { TypeList } from "./TypeList";
import { Evolutions } from "./Evolutions";
import { HistoryList } from "./HistoryList";

const Pokedex: React.FC = () => {
    const dispatch = useAppDispatch();
    const [selectedPokemon, setSelectedPokemon] = useState<string>("");

    const currentPokemon = useAppSelector((state) =>
        selectPokemon(state, selectedPokemon)
    );
    const flavorText = useAppSelector((state) =>
        selectPokemonFlavorText(state, selectedPokemon)
    );
    const abilities = useAppSelector((state) =>
        selectPokemonAbilities(state, selectedPokemon)
    );
    const types = useAppSelector((state) =>
        selectPokemonTypes(state, selectedPokemon)
    );
    const evolutions = useAppSelector((state) =>
        selectPokemonEvolutionChain(state, selectedPokemon)
    );
    const history = useAppSelector(selectHistory);

    useEffect(() => {
        if (currentPokemon === undefined && selectedPokemon !== "") {
            dispatch(fetchPokemon(selectedPokemon));
        } else {
            dispatch(pushHistory(selectedPokemon));
        }
    }, [selectedPokemon]);

    const handleSearch = (pokemon: string) => {
        setSelectedPokemon(pokemon);
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
                <TypeList types={types} />
                <Screen image={currentPokemon?.pokemon.sprites.front_default} />
                <StatsList stats={currentPokemon?.pokemon.stats} />
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
                <HistoryList history={history} />
                <Evolutions
                    evolutions={evolutions}
                    currentPokemon={selectedPokemon}
                    handleSearch={handleSearch}
                />
                <AbilitiesList abilities={abilities} />
            </div>
        </div>
    );
};

export default Pokedex;
