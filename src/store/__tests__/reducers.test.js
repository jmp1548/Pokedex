import pokedexReducer from "../reducers";

describe("reducers", () => {
    describe("pokedex reducer", () => {
        it("should handle initial state", () => {
            expect(pokedexReducer(undefined, { type: "unknown" })).toEqual({
                entries: {},
                history: [],
                isLoading: false,
            });
        });
    });
});
