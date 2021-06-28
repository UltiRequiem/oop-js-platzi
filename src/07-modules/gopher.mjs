const giveHouse = (id) => `House ${id}`;

class Gopher {
  constructor({ name = 'Gopherin', id }) {
    this.name = name;
    this.id = id;
  }

  giveHouse() {
    return giveHouse(this.id);
  }
}

// eslint-disable-next-line import/prefer-default-export
export { Gopher };
