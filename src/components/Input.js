import React, { useState } from "react"
import { useSetRecoilState } from "recoil"

import { addPokemonInListSelector } from "../state/selectors"

const Input = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    element: null,
    image: null,
  })
  const setPokemonList = useSetRecoilState(addPokemonInListSelector)

  const onSubmit = (e) => {
    e.preventDefault()

    setPokemon({ name: "", element: null, image: null })
    setPokemonList(pokemon)
  }

  const onUploadChange = (e) => {
    e.preventDefault()

    const file = e.target.files[0]

    const reader = new FileReader()
    reader.onloadend = () => setPokemon({ ...pokemon, image: reader.result })
    reader.readAsDataURL(file)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={pokemon.name}
        placeholder="Enter a pokemon name"
        onChange={(e) => setPokemon({ ...pokemon, name: e.target.value })}
      />
      <select
        value={pokemon.element !== null ? pokemon.element : ""}
        onChange={(e) => setPokemon({ ...pokemon, element: e.target.value })}
      >
        <option value="">Choose an element</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="plant">Plant</option>
      </select>
      <input type="file" onChange={onUploadChange} />
      <button>Add to Pokedex</button>
    </form>
  )
}

export default Input
