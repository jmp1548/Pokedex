import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPokemon } from './actions';

export interface Pokedex {
    entries: { [name: string]: Pokemon };
    history: string[];
    isLoading: boolean;
}

interface Pokemon {
    pokemon: PokemonInfo,
    species: SpeciesInfo,
    evolution: Evolution,
}

interface PokemonInfo {
    name: string,
    sprites: { front_default: string }
}

interface SpeciesInfo {
    flavor_text_entries: []
}

interface Evolution {
    chain: EvolutionInfo
}

interface EvolutionInfo {
    evolves_to: EvolutionEvolvesTo[],
    species: EvolutionSpecies
}

interface EvolutionEvolvesTo {
    evolves_to: EvolutionEvolvesTo[],
    species: EvolutionSpecies
}

interface EvolutionSpecies {
    name: string,
    url: string,
}

const initialState: Pokedex = {
    entries: {},
    history: [],
    isLoading: false,
};

export const PokedexSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {
        pushHistory: (state,  action: PayloadAction<string>) => {
            state.history.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPokemon.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchPokemon.fulfilled, (state, action) => {
            state.isLoading = false
            if (action?.payload?.pokemon !== undefined) {
                state.entries[action.payload.pokemon.name] = action.payload; 
            }
        })
        .addCase(fetchPokemon.rejected, (state) => {
            state.isLoading = false
        })
        .addDefaultCase((state, action) => {})
    },
    
  });

export const { pushHistory } = PokedexSlice.actions;


export default PokedexSlice.reducer;

  