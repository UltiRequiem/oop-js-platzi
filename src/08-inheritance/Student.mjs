class BaseStudent {
  constructor({ name, lastname, id, email }) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.id = id;
  }

  study() {
    console.log(`${this.name} is studying hard.`);
  }

  present() {
    console.log(`Hi, I'm ${this.name}, and my email is "${this.email}".`);
  }
}

class ExpertStudent extends BaseStudent {}
class BasicStudent extends BaseStudent {}
class FreeStudent extends BaseStudent {}

export { ExpertStudent, BasicStudent, FreeStudent };
