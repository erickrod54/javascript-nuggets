//Reduce
//iterates, callback function
//reduces to a single value - number, array, object

//1st parameter ('acc') - total of all calculations (kind of accumulator)

//2st parameter ('curr') - current iteration value ( this is the initial
// value, i can accumulate from zero or accumulate for 
//some different value - by this case i am starting at zero)

export const staff = [
    {
        name:'bob', 
        age:20, 
        position:'developer',
        salary:100
    }
    ,
    {
        name:'peter', 
        age:25, 
        position:'designer',
        salary:300
    }
    ,
    {
        name:'susy', 
        age:30, 
        position:'the boss',
        salary:400
    }
    ,
    {
        name:'anna', 
        age:35, 
        position:'intern',
        salary:10
    }
]

/**the first and seccond parameter is 'total' and 'person' 
 * i am calculating the total for person*/
const dailyTotal = staff.reduce((total, person) => {
    console.log(total);
    console.log(person.salary);
    total += person.salary
    return total
}, 0 )

console.log(dailyTotal)