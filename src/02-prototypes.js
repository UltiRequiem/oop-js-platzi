function Student(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;
}

// eslint-disable-next-line func-names
Student.prototype.aproveCourse = function (course) {
  this.approvedCourses.push(course);
};

const MAGI = new Student('Magi', 66, ['Curso de SQL y MySQL']);
console.log(MAGI.approvedCourses);
MAGI.aproveCourse('Curso de Computación Básica');
console.log(MAGI.approvedCourses);
