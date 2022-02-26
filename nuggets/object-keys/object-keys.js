//This is the Object keys 
//Vanilla JavaScript 
//version

//first case: dot notation
const person = {
    name: 'john', 
}

console.log(person.name) //john

//i can set a new key to the previous object
person.age = 25;
console.log(person) // { name: 'john', age: 25 }

//second case: square bracket

items = {
    'featured-items': ['item1','item2']
}

console.log(items['featured-items']) //['item1','item2']
console.log(person['name']) // 'john'

//now to set a new key for square barcket 

