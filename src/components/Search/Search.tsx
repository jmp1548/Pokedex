import React, { useEffect, useState } from "react";

import "./styles.scss";

interface SearchProps {
    handleSearch: (pokemon: string) => void;
    currentPokemon: string;
}

export const Search: React.FC<SearchProps> = ({
    handleSearch,
    currentPokemon,
}) => {
    const [pokemonName, setPokemonName] = useState<string>("");

    useEffect(() => {
        setPokemonName(currentPokemon);
    }, [currentPokemon]);

    return (
        <div className="search">
            <input
                type="text"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
            />
            <button
                className="search__button"
                onClick={() => handleSearch(pokemonName.toLowerCase())}
            >
                Go
            </button>
        </div>
    );
};
