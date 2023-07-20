

let prompt = require("prompt-sync")({ sigint: true });

console.log(`welcome to our guessing game if you guess game
if you guess the right number in five trial you win the game`)
console.log('let us start')
let num_1 = 0


const value_input = []
console.log(value_input)
const lucky_num = [6, 2, 8, 10, 20,]


for(num_1; num_1 < 5; num_1++){
    let try_num = prompt('Write any numer of your choice:  ')
    value_input.push(try_num)
}
