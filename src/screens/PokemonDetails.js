import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useRecoilCallback, useRecoilValue } from "recoil"

import Ability from "../components/Ability"
import { fetchPokemonDetailsSelector } from "../state/selectors"

import "./PokemonDetails.css"

const PokemonDetails = () => {
  let { id } = useParams()
  const [currentId, setCurrentId] = useState(parseInt(id))
  const pokemonDetails = useRecoilValue(fetchPokemonDetailsSelector(currentId))

  useEffect(() => {
    setCurrentId(parseInt(id))
  }, [id])

  const handlePrefetch = useRecoilCallback(
    ({ snapshot }) => async (direction) => {
      const id = direction === "next" ? currentId + 1 : currentId - 1
      await snapshot.getPromise(fetchPokemonDetailsSelector(id))

      setCurrentId(id)
    }
  )

  const officialArtwork = "official-artwork"
  const frontDefault = "front_default"
  const image = pokemonDetails.sprites.other[officialArtwork][frontDefault]

  return (
    <>
      <div className="pokemon-details-navigation">
        {currentId !== 1 && (
          <Link
            to={`/details/${parseInt(id) - 1}`}
            onClick={() => handlePrefetch("prev")}
          >
            <div className="pokemon-details-navigation-button">
              <span aria-label="previous page" role="img">
                👈
              </span>
            </div>
          </Link>
        )}
        <Link
          to={`/details/${parseInt(id) + 1}`}
          onClick={() => handlePrefetch("next")}
        >
          <div className="pokemon-details-navigation-button">
            <span aria-label="next page" role="img">
              👉
            </span>
          </div>
        </Link>
      </div>
      <div className="pokemon-details">
        <div className="pokemon-details-left">
          <img
            className="pokemon-details-image"
            src={image}
            alt={pokemonDetails.name}
          />
        </div>
        <div>
          <ul>
            <li>Height: {pokemonDetails.height}</li>
            <li>Weight: {pokemonDetails.weight}</li>
          </ul>
          <ul>
            {pokemonDetails.stats.map(
              ({ base_stat: baseState, stat }, index) => {
                return (
                  <li key={index}>
                    {stat.name} : {baseState}
                  </li>
                )
              }
            )}
          </ul>
          <div>
            {pokemonDetails.abilities.map(({ ability }, index) => {
              return <Ability key={index} ability={ability} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonDetails
