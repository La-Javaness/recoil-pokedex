import React, { useState } from "react"
import { useSetRecoilState } from "recoil"
import { pokemonListUrl } from "../state/atoms"

import "./Pagination.css"

const Pagination = ({ count }) => {
  const pageSize = 30

  const [activePage, setActivePage] = useState(0)
  const pages = Array.from(Array(count / pageSize).keys())

  const setPokemonUrl = useSetRecoilState(pokemonListUrl)

  const onPageClick = (url, page) => {
    setActivePage(page)
    setPokemonUrl(url)
  }

  return (
    <div className="pagination">
      {pages.map((page) => {
        const url = `${
          process.env.REACT_APP_BASE_URL
        }?limit=${pageSize}&offset=${page * pageSize}`
        return (
          <div
            className={`pagination-item ${
              page === activePage ? "pagination-item-active" : null
            }`}
            onClick={() => onPageClick(url, page)}
            key={page}
          >
            {page + 1}
          </div>
        )
      })}
    </div>
  )
}

export default Pagination
