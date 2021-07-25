let fruit = {
    name: "Grape",
    description: "This is popular fruit",
    colors: ['purple', 'green'],
    isSmall: true,
    order: 1,
    owner: "Test"
}

console.log(fruit.isSmall)
console.log(fruit.owner || "Arief")

// Convert object to array
let keys = Object.keys(fruit)
console.log(keys)
let values = Object.values(fruit)
console.log(values)

let entries = Object.entries(fruit)
console.log(entries)

fruit.price = 10000
console.log(fruit)
// menghapus key & values pada object
delete fruit.price
console.log(fruit)