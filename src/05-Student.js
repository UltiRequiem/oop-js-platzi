class LearningPath {
  constructor({ name, courses = [], teachers = [], category, description }) {
    this.name = name;
    this.teachers = teachers;
    this.category = category;
    this.description = description;
    this.courses = courses;
  }

  addCourse(course) {
    this.courses.push(course);
  }

  addTeacher(teacher) {
    this.teachers.push(teacher);
  }

}


class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    github = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      github,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const ELIAZ = new Student({
  name: 'Eliaz Bobadilla',
  username: 'UltiRequiem',
  email: 'eliaz.bobadilladev@gmail.com',
  twitter: 'UltiRequiem',
});

const JUAN = new Student({
  name: 'Juan David Castro',
  username: 'juandc',
  email: 'juan@dc.com',
  twitter: 'juandc',
  instagram: 'juandc',
});
