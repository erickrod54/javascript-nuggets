/**JavaScript-Nuggets-app version 16 - 
 * data js - Features: 
 * 
 *       --> Adding 'spread and rest' operators
 *          to 'linksData' 
 * 
 * Note: By this version this data is going
 * to be use to refactor navBar Component
 */

 export const linksData = [
    {
      id:1,
      url:'/map-method',
      name:'map method',
      description:'map method is like a \'for cycle\' in vainilla javaScript, but optimized'  
    },
    {
      id:2,
      url:'/unique-values',
      name:'unique values',
      description:'unique values creates a a new Set taking and array with duplicates and becoming it in a unique values array set'
    },
    {
      id:3,
      url:'/filter-and-find',
      name:'filter and find',
      description:'filter and find creates a new array from an old array based on the \'find\' and \'filter\' condidtions'
    },
    {
      id:4,
      url:'/reduce-method',
      name:'reduce method',
      description:'Reduce method takes two parameters, an \'accumulator\' and \'total\' to reduce a prop from an array to a single value (always remember to return the total )'
    },
    {
      id:5,
      url:'/array-destructuring',
      name:'array destructuring',
      description:'destructure arrays is a way to get props as data, objects and more from an array '
    },
    {
      id:6,
      url:'/spread-and-rest-operator',
      name:'spread and rest-operator',
      description:'very much alike but completely different in implementation.'
    }
 ]

 export const data = [
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
//I add Unique Values data
export const menu = [
    {
     id:1,
     name: 'pancakes',
     category: 'breakfast'
    },
    {
     id:2,
     name: 'burger',
     category: 'lunch'
    },
    {
     id:3,
     name: 'steak',
     category: 'dinner'
    },
    {
     id:4,
     name: 'bacon',
     category: 'breakfast'
    },
    {
     id:5,
     name: 'eggs',
     category: 'breakfast'
    },
    {
     id:6,
     name: 'pasta',
     category: 'dinner'
    }
];

export const OrSomePeople = [
    {
        name:'Christina', 
        age:45, 
        position:'OR Scrub Tech'
    }
    ,
    {
        name:'Terry', 
        age:40, 
        position:'Robotics Tech'
    }
    ,
    {
        name:'Cesar', 
        age:25, 
        position:'Robotics Tech'
    }
    ,
    {
        name:'Pete', 
        age:30, 
        position:'Robotics Tech'
    }
    ,
    {
        name:'Joseph', 
        age:47, 
        position:'Surgical Tech'
    }
]

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

export const fruits = ['orange','banana','lemon']

export const johnData = 
    {
        name:'john',
        lastName:'fonda',
        job:'developer'
    }


export const friends = ['john','peter','bob','anna','kelly']

export const bob = [
    {
    first:'bob',
    last:'sanders',
    city:'chicago',
    siblings:{
        sister:'jane',
        secondsister:'fonda'
    },
}
]