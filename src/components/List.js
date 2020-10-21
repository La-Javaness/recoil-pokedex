import React from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {
  deletePokemonInListSelector,
  editPokemonInListSelector,
  pokemonListFilteredSelector,
} from "../state/selectors"
import { editPokemonNameAtom, pokemonNameAtom } from "../state/atoms"

import "./List.css"

const List = () => {
  const [isEditMode, setIsEditMode] = useRecoilState(editPokemonNameAtom)
  const [newName, setNewName] = useRecoilState(pokemonNameAtom)

  const pokemonList = useRecoilValue(pokemonListFilteredSelector)

  const setDeletePokemonInList = useSetRecoilState(deletePokemonInListSelector)
  const setEditPokemonInList = useSetRecoilState(editPokemonInListSelector)

  const onDeleteClick = (pokemonName) => {
    setDeletePokemonInList({ name: pokemonName })
  }

  const onSaveClick = (pokemon, index) => {
    const newPokemon = {
      ...pokemon,
      name: newName,
    }

    newName !== ""
      ? setEditPokemonInList({ newPokemon, index })
      : setIsEditMode({ name: null, isActive: false })
  }

  return (
    <div className="list-item-container">
      {pokemonList.map((item, index) => {
        const isActive = isEditMode.name === item.name

        return (
          <div className="list-item-details" key={item.name}>
            <img className="list-item-image" src={item.image} alt={item.name} />
            {isActive ? (
              <input
                value={newName}
                placeholder="Enter a pokemon name"
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              <span>{item.name}</span>
            )}

            <span>{item.element}</span>
            <button
              className="list-item-delete-button"
              onClick={() => onDeleteClick(item.name)}
            >
              Delete
            </button>
            {!isActive ? (
              <button
                className="list-item-edit-button"
                onClick={() =>
                  setIsEditMode((prev) => ({
                    name: !prev.name ? item.name : null,
                    isActive: !prev.isActive,
                  }))
                }
              >
                Edit
              </button>
            ) : (
              <button
                className="list-item-edit-button"
                onClick={() => onSaveClick(item, index)}
              >
                Save
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default List
