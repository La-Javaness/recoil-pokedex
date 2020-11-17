import React, { Suspense } from "react"
import { useRecoilValue } from "recoil"
import { fetchPokemonListSelector } from "../state/selectors"
import Card from "./Card"
import Loader from "./Loader"
import Pagination from "./Pagination"

import "./List.css"

const List = () => {
  const pokemonList = useRecoilValue(fetchPokemonListSelector())
  return (
    <>
      <div className="list-item-container">
        {pokemonList?.results.map((pokemon) => {
          return (
            <Suspense key={pokemon.url} fallback={<Loader />}>
              <Card key={pokemon.url} pokemon={pokemon} />
            </Suspense>
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
