import { evolutionResponse } from "./mockEvolutionResponse";
import { pokemonResponse } from "./mockPokemonResponse";
import { speciesResponse } from "./mockSpeciesResponse";

export const mockStoreResponse = {
    pokedex: {
        entries: {
            pichu: {
                pokemon: { ...pokemonResponse },
                species: { ...speciesResponse },
                evolution: { ...evolutionResponse },
            },
        },
        history: ["pichu"],
        isLoading: false,
    },
};
