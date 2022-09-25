import { createAsyncThunk } from "@reduxjs/toolkit";
import { pushHistory } from "./reducers";

export const fetchPokemon = createAsyncThunk(
    "pokedex/fetchPokemon",
    async (name: string, thunkAPI) => {
        try {
            const pokemonResponse = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            const pokemon = await pokemonResponse.json();

            thunkAPI.dispatch(pushHistory(pokemon.name));

            const speciesResponse = await fetch(pokemon.species.url);
            const species = await speciesResponse.json();

            const evolutionResponse = await fetch(species.evolution_chain.url);
            const evolution = await evolutionResponse.json();

            return {
                pokemon: { ...pokemon },
                species: { ...species },
                evolution: { ...evolution },
            };
        } catch (err) {
            console.log("Error:", err);
        }
    }
);
