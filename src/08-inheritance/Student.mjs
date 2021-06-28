class BaseStudent {
  constructor({ name, lastname, id, email, approvedCourses }) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.id = id;
    this.approvedCourses = approvedCourses;
  }

  study() {
    console.log(`${this.name} is studying hard.`);
  }

  present() {
    console.log(`Hi, I'm ${this.name}, and my email is "${this.email}".`);
  }
}

class ExpertStudent extends BaseStudent {
  constructor(props) {
    super(props);
    this.membershipType = 'Expert';
  }

  approveCourse(course) {
    this.approvedCourses.push(course);
  }
}

class BasicStudent extends BaseStudent {
  constructor(props) {
    super(props);
    this.membershipType = 'Basic';
  }

  approveCourse(course) {
    if (course.lang !== 'english') {
      this.approvedCourses.push(course);
    } else {
      console.warn(`Nope ${this.name}.`);
    }
  }
}

class FreeStudent extends BaseStudent {
  constructor(props) {
    super(props);
    this.membershipType = 'Free';
  }

  approveCourse(course) {
    if (course.isFree) {
      this.approvedCourses.push(course);
    } else {
      console.warn(`Nope ${this.name}.`);
    }
  }
}

export { ExpertStudent, BasicStudent, FreeStudent };
