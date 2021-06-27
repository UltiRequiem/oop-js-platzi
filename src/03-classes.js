class Student {
  constructor({ name, age, approvedCourses, email }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.approvedCourses = approvedCourses;
  }

  approveCourse(course) {
    this.approvedCourses.push(course);
  }
}

const JUAN = new Student({
  name: 'Juan David Castro',
  age: 18,
  email: 'juan@platzi.com',
  approvedCourses: [
    'Cómo Conseguir Trabajo en Programación',
    'Curso Básico de Programación Orientada a Objetos con JavaScript',
  ],
});

console.log(JUAN);
