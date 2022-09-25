import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import {
    Pokemon,
    Evolution,
    SpeciesInfo,
    Abilities,
    Types,
    Stats,
} from "./reducers";

export const selectPokemon = (state: RootState, pokemonName: string): Pokemon =>
    state.pokedex.entries[pokemonName];
export const selectHistory = (state: RootState) => state.pokedex.history;

export const selectPokemonEvolution = createSelector(
    selectPokemon,
    (pokemon): Evolution => pokemon?.evolution
);

export const selectPokemonEvolutionChain = createSelector(
    selectPokemonEvolution,
    (evolution): string[] => {
        let evolutionChain = [];

        let currentEvolution = evolution?.chain;
        while (currentEvolution !== null) {
            evolutionChain.push(currentEvolution?.species.name);
            currentEvolution = currentEvolution?.evolves_to[0] || null;
        }

        return evolutionChain;
    }
);

export const selectPokemonSpecies = createSelector(
    selectPokemon,
    (pokemon): SpeciesInfo => pokemon?.species
);

export const selectPokemonFlavorText = createSelector(
    selectPokemonSpecies,
    (species): string => species?.flavor_text_entries[0].flavor_text
);

export const selectPokemonAbilities = createSelector(
    selectPokemon,
    (pokemon): Abilities[] => pokemon?.pokemon.abilities
);

export const selectPokemonStats = createSelector(
    selectPokemon,
    (pokemon): Stats[] => pokemon?.pokemon.stats
);

export const selectPokemonTypes = createSelector(
    selectPokemon,
    (pokemon): Types[] => pokemon?.pokemon.types
);
