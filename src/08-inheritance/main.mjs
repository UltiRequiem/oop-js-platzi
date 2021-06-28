// eslint-disable-next-line import/extensions
import { BasicStudent, FreeStudent, ExpertStudent } from './Student.mjs';

// Basic Student
const JUAN = new BasicStudent({
  name: 'Juan',
  lastname: 'Bocaroja',
  email: 'juan@email.net',
});

JUAN.present();
// ---------------------

// Expert Student
const ZERO = new ExpertStudent({
  name: 'Eliaz',
  lastname: 'Bobadilla',
  email: 'eliaz.bobadilladev@gmail.com',
});

ZERO.study();
// --------------------

// Free Student
const JANNET = new FreeStudent({
  name: 'Jannet',
  lastname: 'Bocanegra',
  id: 12345,
  email: 'jannet@bocanegra.org',
});

JANNET.study();
JANNET.present();
// --------------------
