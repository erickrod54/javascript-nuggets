//MAP Method
const people = [
    {
        name: 'bob',
        age:20,
        position: 'developer'
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer'
    },
    {
        name: 'susy',
        age: 30,
        position: 'the boss'
    },
    {
        name: 'john',
        age: 26,
        position:  'intern'
    },
]



//Quokka.js - Extension
//returns a new array
//does not change the original size of the array
//--(unlike filter)
//uses values from original array when making a 
//new one
//this is a test

const getAges = (person) => person.age * 2

const ages = people.map(getAges)

console.log(ages)

const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge:item.age 
    }
})

console.log(newPeople)

const names = people.map((person) => { 
    return(
        
        `<h2>${person.name}</h2>`
    
        )
})

const result = document.querySelector('#result');

result.innerHTML = names.join('');