import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemon } from "./actions";

export interface Pokedex {
    entries: { [name: string]: Pokemon };
    history: string[];
    isLoading: boolean;
}

export interface Pokemon {
    pokemon: PokemonInfo;
    species: SpeciesInfo;
    evolution: Evolution;
}

export interface PokemonInfo {
    name: string;
    sprites: { front_default: string };
    abilities: Abilities[];
    types: Types[];
    stats: Stats[];
}

export interface Abilities {
    ability: { name: string };
}

export interface Types {
    type: { name: string };
}

export enum Stat {
    hp = "HP",
    attack = "ATTACK",
    defense = "DEFENSE",
    "special-attack" = "S. ATTACK",
    "special-defense" = "S. DEFENSE",
    speed = "SPEED",
}

export interface Stats {
    base_stat: number;
    stat: { name: keyof typeof Stat };
}

export interface SpeciesInfo {
    flavor_text_entries: { flavor_text: string }[];
}

export interface Evolution {
    chain: EvolutionInfo;
}

export interface EvolutionInfo {
    evolves_to: EvolutionEvolvesTo[];
    species: EvolutionSpecies;
}

export interface EvolutionEvolvesTo {
    evolves_to: EvolutionEvolvesTo[];
    species: EvolutionSpecies;
}

export interface EvolutionSpecies {
    name: string;
    url: string;
}

export const initialState: Pokedex = {
    entries: {},
    history: [],
    isLoading: false,
};

export const PokedexSlice = createSlice({
    name: "pokedex",
    initialState,
    reducers: {
        pushHistory: (state, action: PayloadAction<string>) => {
            state.history.unshift(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action?.payload?.pokemon !== undefined) {
                    state.entries[action.payload.pokemon.name] = action.payload;
                }
            })
            .addCase(fetchPokemon.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { pushHistory } = PokedexSlice.actions;

export default PokedexSlice.reducer;
