import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPokemon } from './actions';

export interface Pokedex {
  pokemon: {[name: string]: { name: string, sprites: { 'front_default': string } }};
  history: string[];
  isLoading: boolean;
}

const initialState: Pokedex = {
  pokemon: {},
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
            console.log(action, action.payload)
            state.pokemon[action.payload.name] = {...action.payload}
        })
        .addCase(fetchPokemon.rejected, (state) => {
            state.isLoading = false
        });
    },
  });

export const { pushHistory } = PokedexSlice.actions;


export default PokedexSlice.reducer;

  