import React from "react"
import { useRecoilState, useSetRecoilState } from "recoil"

import { pokemonAtom } from "..//state/atoms"
import { addPokemonInListSelector } from "../state/selectors"

const Input = () => {
  const [pokemon, setPokemon] = useRecoilState(pokemonAtom)
  const setPokemonList = useSetRecoilState(addPokemonInListSelector)

  const onClick = () => {
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
    <div>
      <input
        value={pokemon.name}
        placeholder="Enter a pokemon name"
        onChange={(e) => setPokemon({ ...pokemon, name: e.target.value })}
      />
      <select
        onChange={(e) => setPokemon({ ...pokemon, element: e.target.value })}
      >
        <option value="">Choose an element</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="plant">Plant</option>
      </select>
      <input type="file" onChange={onUploadChange} />
      <button onClick={onClick}>Add to Pokedex</button>
    </div>
  )
}

export default Input
