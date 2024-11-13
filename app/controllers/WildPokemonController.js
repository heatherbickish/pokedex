import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { api } from "../services/AxiosService.js"
import { wildpokemonService } from "../services/WildPokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


export class WildPokemonController {
  constructor() {
    console.log('👹🎮')
    this.fetchWildPokemon()
    AppState.on('wildPokemon', this.drawWildPokemonList)
  }



  async fetchWildPokemon() {
    try {
      await wildpokemonService.fetchWildPokemon()
    } catch (error) {
      console.error(error)
      Pop.toast("Oh no! Could'nt find em")

    }
  }

  drawWildPokemonList() {
    const pokemon = AppState.wildPokemon
    let wildPokemonContent = ''
    pokemon.forEach(poke => wildPokemonContent += Pokemon.wildListTemplate(poke))
    setHTML('wild-pokemon-list', wildPokemonContent)
  }

  async fetchActivePokemon(pokeName) {
    try {
      console.log('👈👹', pokeName)
      await wildpokemonService.fetchActivePokemon(pokeName)
    } catch (error) {
      console.error(error)
      Pop.toast('Uh oh! Could not snag em')
    }
  }

  drawActivePokemon() {
    console.log('🖋️👈👹')
  }



}