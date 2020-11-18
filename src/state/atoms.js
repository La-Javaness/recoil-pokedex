import { atom } from "recoil"

export const pokemonListUrl = atom({
  key: "pokemonListUrl",
  default: `${process.env.REACT_APP_BASE_URL}?limit=30&offset=0`,
})
