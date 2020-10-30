import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { SHOW_FIRE, SHOW_PLANT, SHOW_WATER } from "../enums"
import { pokemonListStatsSelector } from "../state/selectors"
import { pokemonListFiltersAtom } from "../state/atoms"

import "./Filters.css"

const Filters = () => {
  const { length, fireLength, waterLength, plantLength } = useRecoilValue(
    pokemonListStatsSelector
  )
  const [filter, setFilter] = useRecoilState(pokemonListFiltersAtom)

  const onFilterClick = (filter) => {
    setFilter(filter)
  }

  return (
    <>
      <button className="filters-button" onClick={() => onFilterClick(filter)}>
        Show all ({length})
      </button>
      <button
        className="filters-button"
        onClick={() => onFilterClick(SHOW_FIRE)}
      >
        Show fire ({`${fireLength} / ${length}`})
      </button>
      <button
        className="filters-button"
        onClick={() => onFilterClick(SHOW_WATER)}
      >
        Show water ({`${waterLength} / ${length}`})
      </button>
      <button
        className="filters-button"
        onClick={() => onFilterClick(SHOW_PLANT)}
      >
        Show plant ({`${plantLength} / ${length}`})
      </button>
    </>
  )
}

export default Filters
