import { atom } from "recoil"
import { SHOW_ALL } from "../enums"

export const pokemonAtom = atom({
  key: "pokemonAtom",
  default: {
    name: "",
    element: null,
    image: null,
  },
})

export const pokemonNameAtom = atom({
  key: "pokemonNameAtom",
  default: "",
})

export const editPokemonNameAtom = atom({
  key: "editPokemonNameAtom",
  default: { name: null, isActive: false },
})

export const pokemonListAtom = atom({
  key: "pokemonListAtom",
  default: [
    {
      name: "Salamèche",
      element: "fire",
      image: require("../assets/salameche.png"),
    },
    {
      name: "Reptincel",
      element: "fire",
      image: require("../assets/reptincel.png"),
    },
    {
      name: "Dracaufeu",
      element: "fire",
      image: require("../assets/dracofeu.png"),
    },
    {
      name: "Carapuce",
      element: "water",
      image: require("../assets/carapuce.png"),
    },
    {
      name: "Carabaffe",
      element: "water",
      image: require("../assets/carabaffe.png"),
    },
    {
      name: "Tortank",
      element: "water",
      image: require("../assets/tortank.png"),
    },
    {
      name: "Bulbizarre",
      element: "plant",
      image: require("../assets/bulbizarre.png"),
    },
    {
      name: "Herbizarre",
      element: "plant",
      image: require("../assets/herbizarre.png"),
    },
    {
      name: "Florizarre",
      element: "plant",
      image: require("../assets/florizarre.png"),
    },
  ],
})

export const pokemonListFiltersAtom = atom({
  key: "pokemonListFiltersAtom",
  default: SHOW_ALL,
})
