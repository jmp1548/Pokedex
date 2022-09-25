import React, { useState } from "react";

import "./styles.scss";

interface SearchProps {
    handleSearch: (pokemon: string) => void;
}

export const Search: React.FC<SearchProps> = ({ handleSearch }) => {
    const [pokemonName, setPokemonName] = useState<string>("");

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
