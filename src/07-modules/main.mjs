// eslint-disable-next-line import/named
import { Gopher } from './gopher.mjs'

const GopherOne = new Gopher({ name: 'Chunchumaru', id: 4554 })
const GopherOneHouse = GopherOne.giveHouse()
const GopherOneHug = GopherOne.giveHug(34)

// GopherOne.name = 'aj' // You cannot change the name of your Gopher!
// GopherOne.id = 'aj' // You cannot change the ID of your Gopher!

// GopherOne.name = 'Chunchumaru' // That is already the name of your Gopher!
// GopherOne.id = 4554 // That is already the ID of your Gopher!

// console.log(GopherOne); Gopher {}
// console.log(GopherOne.name) That's a secret!

console.log(GopherOneHug)
console.log(GopherOneHouse)
