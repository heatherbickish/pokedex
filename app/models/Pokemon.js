

export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName
    this.img = data.img
    this.backImg = data.backImg
    this.weight = data.weight
    this.height = data.height
    this.health = data.health
    this.defense = data.defense
    this.attack = data.attack
    this.speed = data.speed
    this.types = data.types
    this.creatorId = data.creatorId
  }


  // Pokemon.js
  static wildListTemplate(pokemon) {
    return `<div onclick="app.WildPokemonController.fetchActivePokemon('${pokemon.name}')" class="selectable text-warning rounded p-2" role="button">
    <div class="text-dark">${pokemon.name}</div>
    </div>   
        
    `
  }
}

export class DetailedPokemon extends Pokemon {
  constructor(data) {
    super()



  }

  get activePokemon() {
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









