//Unique Values data
const menu = [
    {
     name: 'pancakes',
     category: 'breakfast'
    },
    {
        name: 'burger',
        category: 'lunch'
    },
    {
        name: 'steak',
        category: 'dinner'
    },
    {
        name: 'bacon',
        category: 'breakfast'
    },
    {
        name: 'eggs',
        category: 'breakfast'
    },
    {
        name: 'pasta',
        category: 'dinner'
    }
];
/**i spread it, and send the new set to create an array
 * -otherwise if i do it like: 
 * 
 * 'new set(menu.map((item) => item.category))'
 * 
 * will be resulting an object
 */
const categories = [ all, ...new set(menu.map((item) => item.category))]
/**i spread all as a new category and then i map on menu to send the 
 * category
 */
console.log(categories)