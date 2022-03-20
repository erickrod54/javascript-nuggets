//Filter - returns a new array can manipulate 
//the size of the new array (unlike map) based
//on a condition

const people = [
    {name:'Christina', age:45, position:'OR Scrub Tech'}
    ,
    {name:'Terry', age:40, position:'Robotics Tech'}
    ,
    {name:'Cesar', age:25, position:'Robotics Tech'}
    ,
    {name:'Pete', age:30, position:'Robotics Tech'}
    ,
    {name:'Joseph', age:47, position:'Surgical Tech'}
]

//Array to test 'find' for strings
const fruits = ['lemon','pineapple','strawberry','orange','berry'] 

//filter
const youngPeople = people.filter((person) => {
    if (person.age < 40) {
        return person;
    }
} )
console.log(youngPeople)

/** 
 * result - return an array with two objects --> 
 * 
 * [{name:'Cesar', age:25, position:'Robotics Tech'} ,
 * {name:'Pete', age:30, position:'Robotics Tech'}]
 * 
*/

/**now i'll get the position */

const getPosition = people.filter((person) => {
    if (person.position === 'Surgical Tech') {
        return person;
    }
} )
console.log(getPosition)

/** 
 * result - return an array with one objects --> 
 * 
 * [{name:'Joseph', age:47, position:'Surgical Tech'}]
 * 
*/

//no match

/**now i'll get the position that does not exist in my data*/

const getPositionNoExist = people.filter((person) => {
    if (person.position === 'Manager') {
        return person;
    }
} )
console.log(getPositionNoExist)
/** 
 * result - return an empty array --> 
 * 
 * []
 * 
 * Note: this is very important, with filter i'll always
 * get a return
*/

//find 
/**Lets find 'cesar' */
const findCesar = people.filter((person) => {
    if (person.name === 'Cesar') {
        return person;
    }
} )
console.log(findCesar)
/** 
 * result - return a single object --> 
 * 
 * {name:'Cesar', age:25, position:'Robotics Tech'}
 * 
 * Note: this is very important, with filter i'll always
 * get a return
*/

/**Lets find 'berry' - this method can work also with strings and other data types*/
const findBerry = fruits.filter((fruit) => fruit === 'berry')
console.log(findBerry)
/** 
 * result - return a single string --> 
 * 
 * 'berry'
 * 
*/

//no match
const oldPeople = people.find((person) => {
    if (person.age > 47) {
        return person;
    }
} )
console.log(oldPeople)
/** 
 * result - return 'undefined' --> 
 * 
 * 'undefined'
 * 
 * Note: this is very important, with find if i get no match
 * i get undefined -this is big difference with filter-
 * */

//Multiple Matches - First match
const firstMatch = people.filter((person) => {
    if (person.age < 40) {
        return person;
    }
} )
console.log(firstMatch)

/** 
 * result - return an objects that first matches with the condition --> 
 * 
 *  {name:'Cesar', age:25, position:'Robotics Tech'}
 * 
 * Note: this case has the same condition as youngPeople 
 * but the result will be. different according with find
 * criteria
*/

/**Let's access to a specific postion using filter */

/**First i get the name that match */
const getAccessToPetePosition = people.filter((person) => {
    if (person.name === 'Peter') {
        return person;
    }
} )

//then i get by 'index' of the object the position
console.log(getAccessToPetePosition[3].position)
/** 
 * result - return a string with the position--> 
 * 
 * 'Robotics Tech'
 * 
 * Note: this is very important, with filter i have 
 * tricky access to the props instead with find 
 * will be directly
*/