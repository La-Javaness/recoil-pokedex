import React from "react"
import { useRecoilValue } from "recoil"
import { fetchPokemonAbilitySelector } from "../state/selectors"

const Ability = ({ ability }) => {
  const abilityDetails = useRecoilValue(
    fetchPokemonAbilitySelector(ability.url)
  )
  const englishEffects = abilityDetails.effect_entries.filter(
    ({ language }) => language.name === "en"
  )

  return (
    <div>
      <p>{ability.name}</p>
      <ul>
        {englishEffects.map(({ effect }, index) => (
          <li key={index}>{effect}</li>
        ))}
      </ul>
    </div>
  )
}

export default Ability
