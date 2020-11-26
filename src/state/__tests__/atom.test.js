import { snapshot_UNSTABLE } from "recoil"
import { pokemonIdAtom, pokemonListUrlAtom } from "../atoms"

describe("atom", () => {
  describe("pokemonListUrlAtom", () => {
    it("display the correct default value", () => {
      const initialSnapshot = snapshot_UNSTABLE()
      expect(
        initialSnapshot.getLoadable(pokemonListUrlAtom).valueOrThrow()
      ).toBe(`${process.env.REACT_APP_BASE_URL}?limit=30&offset=0`)
    })

    it("display the correct default value", () => {
      const initialSnapshot = snapshot_UNSTABLE(({ set }) =>
        set(
          pokemonListUrlAtom,
          `${process.env.REACT_APP_BASE_URL}?limit=60&offset=30`
        )
      )
      expect(
        initialSnapshot.getLoadable(pokemonListUrlAtom).valueOrThrow()
      ).toBe(`${process.env.REACT_APP_BASE_URL}?limit=60&offset=30`)
    })
  })

  describe("pokemonIdAtom", () => {
    it("display the correct default value", () => {
      const initialSnapshot = snapshot_UNSTABLE()
      expect(initialSnapshot.getLoadable(pokemonIdAtom(1)).valueOrThrow()).toBe(
        1
      )
    })

    it("set the correct updated value", () => {
      const initialSnapshot = snapshot_UNSTABLE(({ set }) =>
        set(pokemonIdAtom(1), 2)
      )
      expect(initialSnapshot.getLoadable(pokemonIdAtom(1)).valueOrThrow()).toBe(
        2
      )
    })
  })
})
