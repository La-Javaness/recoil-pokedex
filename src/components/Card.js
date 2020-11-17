import React from "react"
import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { fetchPokemonDetailsSelector } from "../state/selectors"

import "./Card.css"

const Card = ({ pokemon }) => {
  console.log(pokemon)
  const id = pokemon.url.split("/")[6]

  const pokemonDetails = useRecoilValue(fetchPokemonDetailsSelector(id))

  return (
    <div className="card" key={pokemon.name}>
      <img
        className="card-image"
        src={pokemonDetails.sprites.back_default}
        alt={pokemonDetails.name}
      />
      <Link to={`/details/${id}`}>{pokemon.name}'s Page</Link>
      <span>{pokemon.name}</span>
    </div>
  )
}

export default Card
