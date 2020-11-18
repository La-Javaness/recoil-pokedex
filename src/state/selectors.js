import { selectorFamily } from "recoil"
import { pokemonListUrl } from "./atoms"

export const fetchPokemonListSelector = selectorFamily({
  key: "fetchPokemonListSelector",
  get: () => async ({ get }) => {
    try {
      const url = get(pokemonListUrl)

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
