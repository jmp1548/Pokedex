import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchPokemon } from "../store/actions";
import { selectPokemon } from "../store/selectors";
import "./styles/pokedex.scss";

import Evolution from "./Evolution";
import { PokedexScreen } from "./PokedexScreen";

const Pokedex: React.FC = () => {
    const dispatch = useAppDispatch();
    const [pokemonName, setPokemonName] = useState<string>("");

    const pokemon = useAppSelector((state) =>
        selectPokemon(state, pokemonName)
    );

    return (
        <div className="pokedex">
            <input
                type="text"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
            />
            <button
                onClick={() => {
                    if (!pokemon) dispatch(fetchPokemon(pokemonName));
                }}
            >
                Go
            </button>
            {pokemon && (
                <>
                    <PokedexScreen
                        image={pokemon.pokemon.sprites.front_default}
                        name={pokemonName}
                    />
                    <Evolution pokemonName={pokemonName} />
                </>
            )}
        </div>
    );
};

export default Pokedex;
