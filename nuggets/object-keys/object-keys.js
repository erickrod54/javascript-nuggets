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

let appState = 'loading';

//-i can test to set appState value *uncomment to test*-
//appState = 'error'

/**here i set the key
 * -'[appState]' with the square notation-
 */

//i can set a new key with value and add it to
//the app 'object'

//here i set the key name for the second
//item for 'app' object
const keyName = 'computer';

const app = {
    [appState]: false
}

//here i set the value for the keyName
app[keyName] = 'apple'

console.log(app) //prompt me: { loading : true, computer : apple}

