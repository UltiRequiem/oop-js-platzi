class Student {
  constructor(name, age, approvedCourses) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
  }

  approveCourse(course) {
    this.approvedCourses.push(course);
  }
}

const JUAN = new Student('Juan David Castro', 18, [
  'Cómo Conseguir Trabajo en Programación',
  'Curso Básico de Programación Orientada a Objetos con JavaScript',
]);

console.log(JUAN)
