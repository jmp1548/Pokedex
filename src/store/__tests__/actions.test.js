import { configureStore } from "@reduxjs/toolkit";
import { evolutionResponse } from "./mockData/mockEvolutionResponse";
import { pokemonResponse } from "./mockData/mockPokemonResponse";
import { speciesResponse } from "./mockData/mockSpeciesResponse";
import { PokedexSlice } from "../reducers";

import { fetchPokemon } from "../actions";

/*
    Some of these tests overlap with the reducer tests,
    so I left the reducer test file sparce
*/

describe("actions", () => {
    describe("fetchPokemon", () => {
        afterEach(() => {
            jest.restoreAllMocks();
        });

        it("should return expected response", async () => {
            const mockStoreResult = {
                entries: {
                    pichu: {
                        pokemon: { ...pokemonResponse },
                        species: { ...speciesResponse },
                        evolution: { ...evolutionResponse },
                    },
                },
                history: ["pichu"],
                isLoading: false,
            };
            const spy = jest.spyOn(global, "fetch").mockResolvedValueOnce(
                Promise.resolve({
                    json: () => Promise.resolve({ ...pokemonResponse }),
                }),
                Promise.resolve({
                    json: () => Promise.resolve({ ...speciesResponse }),
                }),
                Promise.resolve({
                    json: () => Promise.resolve({ ...evolutionResponse }),
                })
            );

            const store = configureStore({ reducer: PokedexSlice.reducer });

            await store.dispatch(fetchPokemon("pichu"));
            expect(spy).toHaveBeenCalledTimes(3);
            expect(store.getState()).toEqual(mockStoreResult);
        });
    });
    describe("pushHistory", () => {
        it("should push history to the top of the array", () => {
            const store = configureStore({ reducer: PokedexSlice.reducer });

            store.dispatch(PokedexSlice.actions.pushHistory("pikachu"));

            expect(store.getState().history).toEqual(["pikachu"]);

            store.dispatch(PokedexSlice.actions.pushHistory("onix"));
            expect(store.getState().history).toEqual(["onix", "pikachu"]);
        });
    });
});
