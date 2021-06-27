const ZERO = {
  name: 'Zero',
  age: 14,
  platziPoints: 15200,
  approvedCourses: [
    'Curso Básico de JavaScript',
    'Curso Básico de Programación en Go',
    'Curso Básico de Python',
    'Curso de Administración de Servidores Linux',
    'Curso de Economía Digital: Bitcoin y Criptomonedas 📜',
  ],
  approveCourse(course) {
    this.approvedCourses.push(course);
  },
  addPoints(points) {
    this.platziPoints += points;
  },
};

// Print current approved Courses
console.log(ZERO.approvedCourses);

// Approve a course...
ZERO.approveCourse('Curso de Introducción al Despliegue de Aplicaciones');

// Print current approved courses
console.log(ZERO.approvedCourses)

// Print current Platzi Points
console.log(ZERO.platziPoints);

// Make a good contribution to the community ⬇️

ZERO.addPoints(2400);

// Print current Platzi Points
console.log(ZERO.platziPoints);
