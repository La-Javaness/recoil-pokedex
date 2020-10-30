import React from "react"
import { useRecoilValue } from "recoil"
import { pokemonListLengthSelector } from "../state/selectors"
import { pokemonListAtom } from "../state/atoms"

import "./Home.css"

const Home = () => {
  const pokemonList = useRecoilValue(pokemonListAtom)
  const pokemonListLength = useRecoilValue(pokemonListLengthSelector)

  return (
    <div className="home">
      <h1>Hello World ! I'm the Home page.</h1>
      <p>
        {`You have actually ${pokemonListLength} pokemons in your Pokedex: ${pokemonList
          .map(({ name }) => name)
          .join(", ")}`}
        .
      </p>
    </div>
  )
}

export default Home
