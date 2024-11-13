import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"

// @ts-ignore 
export const pokeApi = new axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 8000
})

class wildPokemonService {


  async fetchWildPokemon() {
    const response = await pokeApi.get('pokemon?limit=151')
    console.log('👹📡', response.data)
    const wild = response.data.results.map(wildData => new Pokemon(wildData))
    console.log('👹👹👹')
    AppState.wildPokemon = wild
    console.log('🗃️👹', AppState.wildPokemon)
  }

  async fetchActivePokemon(name) {

  }

}

export const wildpokemonService = new wildPokemonService()