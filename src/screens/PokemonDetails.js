import React from "react"
import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { fetchPokemonDetailsSelector } from "../state/selectors"

const PokemonDetails = () => {
  let { id } = useParams()
  const pokemonDetails = useRecoilValue(fetchPokemonDetailsSelector(id))
  console.log(pokemonDetails)
  return (
    <div>
      <h3>ID: {id}</h3>
      <img
        src={pokemonDetails.sprites.back_default}
        alt={pokemonDetails.name}
      />
    </div>
  )
}

export default PokemonDetails
