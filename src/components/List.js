import React from "react"
import { useRecoilValue } from "recoil"
import { fetchPokemonListSelector } from "../state/selectors"
import Card from "./Card"
import Pagination from "./Pagination"
import AsyncWrapper from "./AsyncWrapper"

import "./List.css"

const List = () => {
  const pokemonList = useRecoilValue(fetchPokemonListSelector)

  return (
    <>
      <div className="list-item-container">
        {pokemonList?.results.map((pokemon) => {
          return (
            <AsyncWrapper key={pokemon.url}>
              <Card key={pokemon.url} pokemon={pokemon} />
            </AsyncWrapper>
          )
        })}
      </div>
      <Pagination
        count={pokemonList.count}
        next={pokemonList.next}
        previous={pokemonList.previous}
      />
    </>
  )
}

export default List
