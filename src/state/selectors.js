import { selector, selectorFamily } from "recoil"
import {
  pokemonListAtom,
  pokemonListFiltersAtom,
  pokemonListUrl,
} from "./atoms"
import { SHOW_FIRE, SHOW_PLANT, SHOW_WATER } from "../enums"
import { replaceItemAtIndex } from "../utils/arrayUtils"

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

export const pokemonListLengthSelector = selector({
  key: "pokemonListLengthSelector",
  get: ({ get }) => {
    const list = get(pokemonListAtom)
    return list.length
  },
})

export const pokemonListFilteredSelector = selector({
  key: "pokemonListFilteredSelector",
  get: ({ get }) => {
    const filter = get(pokemonListFiltersAtom)
    const list = get(pokemonListAtom)

    switch (filter) {
      case SHOW_FIRE:
        return list.filter(({ element }) => element === "fire")
      case SHOW_WATER:
        return list.filter(({ element }) => element === "water")
      case SHOW_PLANT:
        return list.filter(({ element }) => element === "plant")

      default:
        return list
    }
  },
})

export const editPokemonInListSelector = selector({
  key: "editPokemonInListSelector",
  set: ({ set, get }, newValue) => {
    const list = get(pokemonListAtom)

    const newList = replaceItemAtIndex(
      list,
      newValue.index,
      newValue.newPokemon
    )

    set(pokemonListAtom, newList)
  },
})

export const deletePokemonInListSelector = selector({
  key: "deletePokemonInListSelector",
  set: ({ set, get }, newValue) => {
    const list = get(pokemonListAtom)

    const newList = list.filter((item) => item.name !== newValue.name)

    set(pokemonListAtom, newList)
  },
})

export const addPokemonInListSelector = selector({
  key: "addPokemonInListSelector",
  set: ({ set, get }, newValue) => {
    const list = get(pokemonListAtom)

    const newList = [...list, newValue]

    set(pokemonListAtom, newList)
  },
})

export const pokemonListStatsSelector = selector({
  key: "pokemonListStatsSelector",
  get: ({ get }) => {
    const list = get(pokemonListAtom)

    return {
      length: list.length,
      fireLength: list.filter(({ element }) => element === "fire").length,
      waterLength: list.filter(({ element }) => element === "water").length,
      plantLength: list.filter(({ element }) => element === "plant").length,
    }
  },
})
