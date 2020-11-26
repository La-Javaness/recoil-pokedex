import { snapshot_UNSTABLE } from "recoil"
import { rest } from "msw"
import { setupServer } from "msw/node"

import {
  fetchPokemonAbilitySelector,
  fetchPokemonDetailsSelector,
  fetchPokemonListSelector,
} from "../selectors"

const server = setupServer(
  rest.get(
    "https://pokeapi.co/api/v2/pokemon?offset=30&limit=30",
    (_, res, ctx) =>
      res(
        ctx.status(202, "Mocked status"),
        ctx.json({
          count: 1000,
          next: "my next URL",
          previous: "my previous URL",
          results: [{ foo: "bar" }],
        })
      )
  ),
  rest.get("https://pokeapi.co/api/v2/ability/65/", (_, res, ctx) =>
    res(
      ctx.status(202, "Mocked status"),
      ctx.json({
        id: 65,
      })
    )
  ),
  rest.get("https://pokeapi.co/api/v2/pokemon/1", (_, res, ctx) =>
    res(
      ctx.status(202, "Mocked status"),
      ctx.json({
        base_experience: 64,
      })
    )
  )
)

describe("selector", () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it("returns fetchPokemonListSelector value", async () => {
    const initialSnapshot = snapshot_UNSTABLE()

    const { count, next, previous, results } = await initialSnapshot.getPromise(
      fetchPokemonListSelector
    )

    expect({ count, next, previous, results }).toMatchObject({
      count: 1000,
      next: "my next URL",
      previous: "my previous URL",
      results: [{ foo: "bar" }],
    })
  })

  it("returns fetchPokemonDetailsSelector value", async () => {
    const initialSnapshot = snapshot_UNSTABLE()

    const {
      base_experience: baseExperience,
    } = await initialSnapshot.getPromise(fetchPokemonDetailsSelector(1))

    expect(baseExperience).toBe(64)
  })

  it("returns fetchPokemonAbilitySelector value", async () => {
    const initialSnapshot = snapshot_UNSTABLE()

    const { id } = await initialSnapshot.getPromise(
      fetchPokemonAbilitySelector("https://pokeapi.co/api/v2/ability/65/")
    )

    expect(id).toBe(65)
  })
})
