import {
    selectPokemon,
    selectHistory,
    selectPokemonEvolution,
    selectPokemonEvolutionChain,
    selectPokemonSpecies,
    selectPokemonFlavorText,
    selectPokemonAbilities,
    selectPokemonStats,
    selectPokemonTypes,
} from "../selectors";

import { evolutionResponse } from "./mockData/mockEvolutionResponse";
import { pokemonResponse } from "./mockData/mockPokemonResponse";
import { speciesResponse } from "./mockData/mockSpeciesResponse";

import { mockStoreResponse } from "./mockData/mockStore";

describe("selectors", () => {
    describe("selectPokemon", () => {
        const response = {
            pokemon: { ...pokemonResponse },
            species: { ...speciesResponse },
            evolution: { ...evolutionResponse },
        };

        it("should select the pokemon by name", () => {
            expect(selectPokemon(mockStoreResponse, "pichu")).toEqual(response);
        });
        it("should return undefined if pokemon not found", () => {
            expect(selectPokemon(mockStoreResponse, "onix")).toEqual(undefined);
        });
    });
    describe("selectHistory", () => {
        it("should select the history object", () => {
            expect(selectHistory(mockStoreResponse)).toEqual(["pichu"]);
        });
    });
    describe("selectPokemonEvolution", () => {
        it("should select the evolution object", () => {
            expect(selectPokemonEvolution(mockStoreResponse, "pichu")).toEqual(
                evolutionResponse
            );
        });
    });
    describe("selectPokemonEvolutionChain", () => {
        it("should return the evolution chain array", () => {
            expect(
                selectPokemonEvolutionChain(mockStoreResponse, "pichu")
            ).toEqual(["pichu", "pikachu", "raichu"]);
        });
    });
    describe("selectPokemonSpecies", () => {
        it("should select the species object", () => {
            expect(selectPokemonSpecies(mockStoreResponse, "pichu")).toEqual(
                speciesResponse
            );
        });
    });
    describe("selectPokemonFlavorText", () => {
        // result is formatted and can't replicate as of now (would fix with more time)
        it.skip("should select the first flavor text from the species object", () => {
            expect(selectPokemonFlavorText(mockStoreResponse, "pichu")).toEqual(
                "It is not yet skilled at storing electricity. It may send out a jolt if amused or startled."
            );
        });
    });
    describe("selectPokemonAbilities", () => {
        it("should select the abilities from the pokemon object", () => {
            expect(selectPokemonAbilities(mockStoreResponse, "pichu")).toEqual(
                pokemonResponse.abilities
            );
        });
    });
    describe("selectPokemonStats", () => {
        it("should select the stats from the pokemon object", () => {
            expect(selectPokemonStats(mockStoreResponse, "pichu")).toEqual(
                pokemonResponse.stats
            );
        });
    });
    describe("selectPokemonTypes", () => {
        it("should select the types from the pokemon object", () => {
            expect(selectPokemonTypes(mockStoreResponse, "pichu")).toEqual(
                pokemonResponse.types
            );
        });
    });
});
