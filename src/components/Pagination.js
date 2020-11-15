import React, { useState } from "react"
import { useRecoilCallback } from "recoil"
import { pokemonListUrl } from "../state/atoms"
import { fetchPokemonDetailsSelector } from "../state/selectors"

const Pagination = ({ count }) => {
  const [activePage, setActivePage] = useState(0)
  const pages = Array.from(Array(count / 10).keys())

  const onPageClick = useRecoilCallback(({ snapshot, set }) => (url, page) => {
    setActivePage(page)
    snapshot.getLoadable(fetchPokemonDetailsSelector(url))
    set(pokemonListUrl, url)
  })

  return (
    <div>
      {pages.map((page) => {
        const url = `${process.env.REACT_APP_BASE_URL}?limit=10&offset=${
          page * 10
        }`
        return (
          <div onClick={() => onPageClick(url, page)} key={page}>
            {page === activePage ? `| ${page + 1} |` : page + 1}
          </div>
        )
      })}
    </div>
  )
}

export default Pagination
