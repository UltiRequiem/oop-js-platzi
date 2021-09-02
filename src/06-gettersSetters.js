const hasCopyright = false

class Manga {
  #mangaka
  #name

  constructor({ name, mangaka }) {
    this.#name = name
    this.#mangaka = mangaka
  }

  get mangaka() {
    return this.#mangaka
  }

  get name() {
    return this.#name
  }

  set name(name) {
    if (hasCopyright) {
      console.log('This Manga name has copyright!')
    } else {
      this.#name = name
    }
  }
}

const REQUIEM_ADVENTURES = new Manga({
  name: 'Requiem Adventures',
  mangaka: 'UltiRequiem'
})

console.log(REQUIEM_ADVENTURES)
console.log(REQUIEM_ADVENTURES.mangaka)
console.log(REQUIEM_ADVENTURES.name)
REQUIEM_ADVENTURES.name = 'Adventures Requiem?'
console.log(REQUIEM_ADVENTURES.name)
