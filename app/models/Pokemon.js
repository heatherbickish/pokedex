

export class Pokemon {
  constructor(data) {
    this.name = data.name

  }


  // Pokemon.js
  static wildListTemplate(pokemon) {
    return `<div onclick="app.WildPokemonController.fetchActivePokemon('${pokemon.name}')" class="selectable text-warning rounded p-2 text-uppercase" role="button">
    <div class="text-dark">${pokemon.name}</div>
    </div>   
        
    `
  }
}

export class DetailedPokemon extends Pokemon {
  constructor(data) {
    super()
    this.id = data._id ?? ''
    this.nickName = data.nickName ?? ''
    this.img = data.img ?? data.sprites.front_default
    this.backImg = data.backImg ?? data.sprites.back_default
    this.weight = data.weight
    this.height = data.height
    this.health = data.health ?? data.stats[0].base_stat
    this.defense = data.defense ?? data.stats[2].base_stat
    this.attack = data.attack ?? data.stats[1].base_stat
    this.speed = data.speed ?? data.stats[5].base_stat
    this.types = data.types
  }

  get activePokemonTemplate() {
    return `
    <div class="card">
    <div class="card-body">
    <h3>${this.name}</h3>
    <hr>
    <div class="card-img">
    <img src="${this.img}" alt="">
    </div>
    </div>
    
    `
  }

}









