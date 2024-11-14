import { DetailedPokemon, Pokemon } from "./models/Pokemon.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {{ name:string, url:string }[]} */
  wildPokemon = []

  /** @type {DetailedPokemon} */
  activePokemon = null

  user = null

  /**@type {import('./models/Account.js').Account | null} */
  account = null
}

export const AppState = createObservableProxy(new ObservableAppState())