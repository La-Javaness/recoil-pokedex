import { snapshot_UNSTABLE } from "recoil"
import { pokemonListUrl } from "../atoms"

describe("atom", () => {
  it("display the correct default value", () => {
    const initialSnapshot = snapshot_UNSTABLE()
    expect(initialSnapshot.getLoadable(pokemonListUrl).valueOrThrow()).toBe(
      `${process.env.REACT_APP_BASE_URL}?limit=30&offset=0`
    )
  })
})
