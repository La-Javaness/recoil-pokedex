import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useRecoilValue } from "recoil"
import Ability from "../components/Ability"
import {
  fetchPokemonDetailsSelector,
  fetchPokemonListSelector,
} from "../state/selectors"

const PokemonDetails = () => {
  let { id } = useParams()
  const [currentId, setCurrentId] = useState(id)
  const pokemonDetails = useRecoilValue(fetchPokemonDetailsSelector(currentId))
  const { count } = useRecoilValue(fetchPokemonListSelector())
  console.log(id, pokemonDetails)

  useEffect(() => {
    setCurrentId(id)
  }, [id])

  return (
    <div>
      <h3>ID: {id}</h3>
      <img
        src={pokemonDetails.sprites.back_default}
        alt={pokemonDetails.name}
      />
      <div>
        {pokemonDetails.abilities.map(({ ability }, index) => {
          return <Ability key={index} ability={ability} />
        })}
      </div>
      <div>
        {id !== 1 && <Link to={`/details/${parseInt(id) - 1}`}>Prev.</Link>}
        {id !== count && <Link to={`/details/${parseInt(id) + 1}`}>Next</Link>}
      </div>
    </div>
  )
}

export default PokemonDetails
