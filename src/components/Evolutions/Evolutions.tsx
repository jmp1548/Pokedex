import React from "react";

import "./styles.scss";

interface EvolutionsProps {
    evolutions: string[];
    currentPokemon: string;
    handleSearch: (pokemon: string) => void;
}

export const Evolutions: React.FC<EvolutionsProps> = ({
    evolutions,
    currentPokemon,
    handleSearch,
}) => {
    return (
        <div className="evolutions">
            {evolutions.length > 1 &&
                evolutions.map((pokemon, index) => {
                    return (
                        <div className="evolutions__evolution" key={pokemon}>
                            <div className="evolutions__evolution-number">
                                {pokemon === currentPokemon
                                    ? "Current"
                                    : index + 1}
                            </div>
                            <button
                                disabled={pokemon === currentPokemon && true}
                                className="evolutions__evolution-button"
                                key={pokemon}
                                onClick={() => handleSearch(pokemon)}
                            >
                                {pokemon}
                            </button>
                        </div>
                    );
                })}
        </div>
    );
};
