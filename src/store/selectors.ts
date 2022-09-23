import { RootState } from '../app/store';

export const selectPokemon = (state: RootState, pokemonName: string) => state.pokedex.pokemon[pokemonName];
export const selectHistory = (state: RootState) => state.pokedex.history;


