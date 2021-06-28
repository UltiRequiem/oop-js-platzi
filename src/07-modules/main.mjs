// eslint-disable-next-line import/extensions
import { Gopher } from './gopher.mjs';

const GopherOne = new Gopher({ name: 'Jose', id: 4554 });
const GopherOneHouse = GopherOne.giveHouse();

console.log(GopherOne);
console.log(GopherOneHouse);
