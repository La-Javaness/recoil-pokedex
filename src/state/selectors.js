import { selectorFamily, selector } from "recoil"
import { pokemonListUrlAtom } from "./atoms"

export const fetchPokemonListSelector = selector({
  key: "fetchPokemonListSelector",
  get: async ({ get }) => {
    try {
      const url = get(pokemonListUrlAtom)

      const response = await fetch(url)
      const { count, next, previous, results } = await response.json()

      return { count, next, previous, results }
    } catch (error) {
      throw error
    }
  },
})

export const fetchPokemonDetailsSelector = selectorFamily({
  key: "fetchPokemonDetailsSelector",
  get: (id) => async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${id}`)
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  },
})

export const fetchPokemonAbilitySelector = selectorFamily({
  key: "fetchPokemonAbilitySelector",
  get: (url) => async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  },
})
