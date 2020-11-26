import { atom, atomFamily } from "recoil"

export const pokemonListUrlAtom = atom({
  key: "pokemonListUrlAtom",
  default: `${process.env.REACT_APP_BASE_URL}?limit=30&offset=0`,
})

export const pokemonIdAtom = atomFamily({
  key: "pokemonIdAtom",
  default: (id) => id,
})
