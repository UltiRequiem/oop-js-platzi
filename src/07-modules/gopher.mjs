const giveHouse = (id, name) => `The ID of ${name}'s house is ${id}.`;
const giveHug = (name, times) => `${name} has give you a hug ${times} times!`;

class Gopher {
  #name;
  #id;
  constructor({ name = 'Gopherin', id }) {
    this.#name = name;
    this.#id = id;
  }

  giveHouse() {
    return giveHouse(this.#id, this.#name);
  }

  giveHug(times) {
    return giveHug(this.#name, times);
  }

  get id() {
    return `That's a secret!`;
  }

  get name() {
    return `That's a secret!`;
  }

  set name(name) {
    if (name === this.#name) {
      console.log(`That is already the name of your Gopher!`);
    } else {
      console.log(`You cannot change the name of your Gopher!`);
    }
  }

  set id(id) {
    if (id === this.#id) {
      console.log(`That is already the ID of your Gopher!`);
    } else {
      console.log(`You cannot change the ID of your Gopher!`);
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { Gopher };
