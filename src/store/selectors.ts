import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

//TODO - Add Types
export const selectPokemon = (state: RootState, pokemonName: string) => state.pokedex.entries[pokemonName];
export const selectHistory = (state: RootState) => state.pokedex.history;

export const selectPokemonEvolution = createSelector(selectPokemon, pokemon => pokemon.evolution)

export const selectPokemonEvolutionChain = createSelector(selectPokemonEvolution, evolution => {
    let evolutionChain = []

    let currentEvolution = evolution.chain;
    while (currentEvolution !== null) {
        evolutionChain.push(currentEvolution.species.name)
        currentEvolution = currentEvolution.evolves_to[0] || null;
    }

    return evolutionChain;
})
