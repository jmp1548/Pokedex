import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectPokemonEvolutionChain } from "../store/selectors";

const Evolution: React.FC<any> = ({ pokemonName }) => {
    const pokemonEvolutions = useAppSelector((state) =>
        selectPokemonEvolutionChain(state, pokemonName)
    );

    console.log(pokemonEvolutions);
    return null;
};

export default Evolution;
