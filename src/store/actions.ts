import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemon = createAsyncThunk(
    'pokedex/fetchPokemon',
    async (name: string) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return await response.json();
    }
  );