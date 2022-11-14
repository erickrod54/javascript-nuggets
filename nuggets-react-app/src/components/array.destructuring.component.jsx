import React, { useState } from "react";
import styled from "styled-components";
import { useNuggetsContext } from "../context";

/**Nuggets react version 17 - ArrayDestructuring  - 
 * Features: 
 *
 *     --> Finish to implementing 'rest' and 'spread'
 *          operator.
 * 
 * Note: This component will be refactored in later
 * versions, 'spread' and 'rest' operator will have
 * its own component in later versions.
 */

const ArrayDestructuring = () => {

    const { fruits, friends, bob, johnData, academy, boys, girls, bestFriend, workers } = useNuggetsContext()

    //console.log('th johnData ==>', johnData)    
    const [ regular, setRegular ] = useState(false)
    
    const [ bobobject, setBobobject ] = useState(false)
    const [ findfruit, setFindfruit ] = useState(false)
    
    //console.log('fruits array ==>', fruits)
    
    /**here i access the 'fruits' items i want */
    const fruit1 = fruits[0]
    const fruit2 = fruits[1]
    
    //console.log('single fruit 1 ==>', fruit1)
    //console.log('single fruit 2 ==>', fruit2)
    //console.log('friends array ==>', friends)
    
    /**this variables are made in order to swap them */
    let firstNmae = 'bob ';
    let second = ' john';
    
    /**spread and rest operator - start */
    
    /**here i destructure 'bob' data that has an object inside*/
    //const { first , last, city, siblings:{ sister } } = bob;
    
    //console.log('bob data ==>', first , last, city, sister)
    
    /**spread operator - data */
    
    const [academyspread, setAcademy ] = useState(false)
    const [ mypeople, setMypeople ] = useState(false)
    const [ mynewpeople, setMynewpeople ] = useState(false)
    const [ newworker, setNewworker ] = useState(false)
    const [ newworker1, setNewworker1 ] = useState(false)    

    const myPeople = [...boys, bestFriend, ...girls]
    const myNewPeople = [...myPeople]
    myNewPeople[0] = 'nancy';
    
    const newWorker = {...workers, city:'chicago'}

    const newWorker1 = {...workers, city:'chicago', name: 'thomas'}

    const letters = [...academy]
    //console.log('this is letters==>',letters)
    
    const handleNewWorker = () => {
        setNewworker(!newworker)
    }

    const handleNewWorker1 = () => {
        setNewworker1(!newworker1)
    }

    const handlemyNewPeople = () => {
        setMynewpeople(!mynewpeople)
        console.log(mynewpeople)
    }
    
    const  handleAcademy = () => {
        setAcademy(!academyspread)
        console.log(letters)
    }

    const handleMypeople = () => {
        setMypeople(!mypeople)
        console.log(myPeople)
    }
    
    
    /**reference for destructure the 'rest' operator */
    const [ first, ...rest] = fruits;
    
    const [ primero, segundo, ...resto ] = fruits;
    
    const { name, ...restData} = johnData;

    
    /**here i can test how to access them directly */
    //const { lastName, job } = restData;

    const getAverage = (name, ...scores) => {
        console.log(name)
        console.log(scores)
        const average = scores.reduce((total,item5) => {
            return total += item5
        }, 0)/scores.length;
        console.log('the average is ==>', average)
    }

    const handleBobRegular = () => {
        setRegular(!regular)
        console.log(regular)
    }

    const handleBobObject = () => {
        setBobobject(!bobobject)
        console.log(bobobject)
    }

    const handlefindFruit = () => {
        setFindfruit(!findfruit)
        console.log(findfruit)
    }
    
    /**spread and rest operator - end */
    return(
        <ArrayDestructuringWrapper>
            <h2>Array destructuring</h2>

            <p>array destructuring is the easiest way to access/unpack
                variables from arrays, and objects, for example i have
                the following array of 'fruits':
            </p>

            <section>
                {fruits.map((fruit) => {
                    return(
                        <div key={fruit}>
                            <h4>{fruit}</h4>
                        </div>
                    )
                })}
            </section>

            <p>array destructuring is the easiest way to access/unpack
                variables from arrays, and objects, for example i have
                the following array of 'friends':
            </p>

            <section>
                {friends.map((friend) => {
                    return(
                        <div key={friend}>
                           <h4>{friend}</h4>     
                        </div>
                    )
                })}
            </section>

            <p>let's take the following example, i need to access
                to the first two fruits of the 'fruit' array, i'll
                do it in the following way:
            </p>

            <section>
                <p>{`const fruit1 = fruit[0]`}</p>
                <p>{`const fruit2 = fruit[1]`}</p>
            </section>

            <p>using the index that starts at '0', 
               so this will result in:
            </p>

            <section>
                <h4>{fruit1}</h4>
                <h4>{fruit2}</h4>
            </section>

            <p>keep in mind as the variables 'fruit1' and
               'fruit2' are defined as 'const' i can modified
               them, but if i defined them as 'let' i can 
               modify them later.
            </p>

            <p>another way to access them is destructuring
                directly in the array as follows ( this 
                example is made using friends array, in 
                react i just filter them and i can get the same result ):
            </p>

            <section>
                <p>{`const ['bob', 'kelly'] = friends`}</p>
            </section>

            <p>when i want to perform operations to mofify the array
               as for example the 'friends' order, let's make a mini
               'friends' array to test it out:
            </p>
            <section className="code-block">
                <p>{`let first = 'bob' `}</p>
                <p>{`let second = 'john' `}</p>
                <p>{`[second, first] = [first, second] `}</p>
            </section>

            <p>'first' and 'second' will swap, as follows (the right
                side is the instruction to swap ):</p>

            <section>
                {[second, firstNmae] = [firstNmae, second ]}
            </section>    

            <h3>Array destructuring - Objects </h3>

            <p>i have the following object for 'bob' and this
            object has a second level of destructuring for
            bob 'siblings':</p>

            <section className="code-block">
                <p>{`first:'bob',`}</p>
                <p>{`last:'sanders',`}</p>
                <p>{`city:'chicago',`}</p>
                <p>{`siblings:{ `}</p>
                    <p>{`sister:'jane',`}</p>
                <p>{`}`}</p>
            </section>

            <p>for the regular properties i can access in 
                the folllowing way:
            </p>

            <section className="code-block">
                <p>{`const { first , last, city } = bob;`}</p>
            </section>     

            <button onClick={handleBobRegular}>access to 'bob' single data</button>

            <section className="code-block hide">
            { regular ?
             
             bob.map((data) => {
                 const { first , last, city } = data;
                 return(
                     <div>
                         <p>{`{`}</p>
                            <h3>{first},</h3>
                            <h3>{last},</h3>
                            <h3>{city}</h3>
                        <p>{`}`}</p>
                    </div>
                    )
                })
                :
                null
            }
            </section>   

            <p>and if i want to access the 'siblings' data
                i have to access to the object first by naming
                the object 'siblings' and then accesing by the
                braackets '{ }' and name of the data of that 
                object that i want it to access 'sister'
            </p>
            
            <section className="code-block">
                <p>{`const { first , last, city, siblings:{ sister } } = bob;`}</p>
            </section>

            <button onClick={handleBobObject}>access to 'bob' object data</button>

            <section className="code-block hide">
            { bobobject ?
             
             bob.map((data) => {
                const { first , last, city, zip, siblings:{ sister, secondsister, thirdsister } } = data;
                /**if i try with any data that does not exist
                 * i will get 'undefined'
                 *  */                
                console.log('bob data object ==>', first , last, city, zip,sister, secondsister, thirdsister )
                 return(
                     <div key={first}>
                         <p>{`{`}</p>
                            <h3>{first},</h3>
                            <h3>{last},</h3>
                            <h3>{city}</h3>
                            <h3>{sister}</h3>
                            <h3>{secondsister}</h3>
                            <h3>{zip}</h3>
                        <p>{`}`}</p>
                    </div>
                    )
                })
                :
                null
            }
            </section>

            <p>let's say that i have a 'React' component, this kind of
                destructuring is very useful to get data in components,
                and i got two flavors:
            </p>

            <ul>
                <li>destructure the object directly in the component</li>
                <li>destructure inside of the component</li>
            </ul>

            <p>if i destructure directly in the component would be like this:</p>

            <section className="code-block">
                <p>{`const BobComponent = `}</p>    
                <p>{`({ first , last, city, siblings:{ sister } }) => { ..`}</p>
            </section>

            <p>if i destructure inside of the component would be like this:</p>
            
            <section className="code-block">
                <p>{`const BobComponent = ( bob ) => { `}</p>    
                <p>{`const { first , last, city, siblings:{ sister } } = bob`}</p>
                <p>{`..`}</p>
            </section>

            <p>then i can render the props that i need</p>

            <h3>Array destructuring - Rest Operator</h3>

            <p>'rest' opertor and 'spread' operator have different 
                implementations 
            </p>

            <p>'rest' operator:</p>

            <ul>
                <li>gather/collects items</li>
                <li>destructuring functions</li>
                <li>get placed in a function</li>
            </ul>

            <p>'spread' opertor: </p>

            <ul>
                <li>spread when invoke the function</li>
            </ul>

            <p>they look the same but iimplemenatations
                are completely different so i have to
                be carefull depending on where is placed
                is 'rest' or 'spread'
            </p>

            <p>i have the array of 'fruits':</p>
            
            {/**reference to before the return
             * so i can se how i destructure with
             * 'rest' operator */}
            <section>
                <h3>first is: {first}</h3>
                <h3>rest is: {'' + rest}</h3>
            </section>

            <p>rest dynamicly gather/collect elements,
                for example in my rest i have included
                banana and lemon but if a keep adding 
                it will dinamicly updated the values:
            </p>
            <section>
                <h3>first is: {first}</h3>
                <h3>rest is: {'' + ['plumb', ...rest]}</h3>
            </section>
            <p>that will be in this way:</p>
            <section>
                <p>{`['plumb', ...rest]`}</p>
            </section>
            
            <p>the brackets because is an array</p>

            <p>the lenght of 'rest' can change not 
                only by adding elements to the rest, 
                also can change if i take elements 
                from the rest and add them to the first
            </p>

            <section>
                <h3>first: {primero} and {segundo}</h3>
                <h3>rest:{resto}</h3>
            </section>
            
            <p>also i can apply methods on while using
                'rest' operator for example let's apply
                'find' to find 'lemon'
            </p>

            <button onClick={handlefindFruit}>find 'lemon'</button>

            { findfruit ? 
            <section>
                <h3>
                 {resto.find((item3) => item3 === 'lemon')} found!!
                </h3>
            </section>
            :
            null
            }

            <p>Now i'll use rest with an object of 
              'johnData':</p>
            
            <section >
                <p>{`{`}</p>    
                <p>{`name:'john',`}</p>
                <p>{`lastName:'fonda',`}</p>
                <p>{`job:'developer',`}</p>
                <p>{`},`}</p>
            </section>

            <p>if i destructure it is the same way but using
                the curleys this time, because i am talking
                of objects:
            </p>

            <section className="code-block">
                <p>{`const { name, ...restData} = johnData`}</p>
                <p>and i can keep destructuring the object:</p>
                <p>{`const { lastName, job } = restData;`}</p>
                <p>so can access the properties directly</p>
            </section>

            <p>so this will result in:</p>

            <section className="code-block">
                <p>the first data by 'name':</p>
                <h3>name: {name}</h3>
                <p>and the rest of the data accesed
                    by 'restData':
                </p>
                <p>for example 'restData.lastName'</p>
                <h3>last name: {restData.lastName}</h3>
                <h3>job: {restData.job}</h3>
            </section>

            <h3>Array destructuring - Rest operator - functions:</h3>

            <p>i have a fuction to get the average 'score' value
                 from a footbal player (this is the case when i am
                 using spread when i am invoking the function):
            </p>

            <section className="code-block">
                <p>{`{`}</p>    
                <p>{`const getAverage = (name, ...scores) => {`}</p>
                <p>{`console.log(name),`}</p>
                <p>{`const average = scores.reduce((total,item4) => {`}</p>
                <p>{`return total += item4`}</p>
                <p>{`}, 0)/scores`}</p>
                <p>{`}`}</p>
            </section>

            <p>scores is initially an empty array (representing
            the rest) and i'll dinamicly filling it out
            with the player 'scores' let's say i have
            '86 96 87 97'
            </p>

            
            <section>
                <p>{`() => getAverage('david', 86, 96, 87, 97)`}</p>
            </section>
            
            <p>and the array can increase or decrease by the values that
                i remove or add to the rest in a dinamic way, the result of
                this operation is:
            </p>

            <button onClick={() => getAverage('david', 86, 96, 87, 97)}>get 'david' score</button>

            <section>
                <p>{`91.5`}</p>
            </section>
            
            <p>i can re-verify with the console prompt</p>

            <h3>Array destrcturing - spread operator:</h3>

            <p>About the 'spread' operator and its main difference with
                rest:
            </p>

            <ul>
                <li>allows and iterable to spread/expand individually inside the receiver</li>
                <li>split into a single item and copy them</li>
            </ul>

            <p>so when i use 'rest' i am referencing to the 
                memory space where the values or data 
                actually are, so any change i made on the
                'rest' will be reflected in the location data
            </p>

            <p>when i use 'spread' i split items an make a exact
                copy of the values or data, so i can change 
                keeping the original data intact            
            </p>

            <p>i have the data with the name academy:</p>

            <section>
                <p>{`const academy = 'academy'`}</p>
            </section>

            <p>
                let's spread the 'academy':
            </p>

            <section>
                <p>{`const letters = [...academy]`}</p>
            </section>

            <button onClick={handleAcademy}>spread academy</button>

            <p>checking in the console i can see how 'spread' makes
                from 'academy' collection of 7 'letters', so i can do
                what i need to do with this letters:
            </p>

            {academyspread ?
                <section className="code-block">
                    {letters.map((letter, index) => {
                        return(
                            <div key={index}>
                                <p>the index: {index} - and the letter - {letter}</p>
                            </div>
                        )
                    })}

                    <p>and the original 'academy' data remains intact:</p>
                    <h4>{academy}</h4>

                    <p>so in this case, i 'split' them and</p>
                    <p>'copy' them in a new array 'letters'</p>
                </section>
            :
            null
            }
        
        <p>i have the arrays 'boys', 'girls' and 'bestFriends' and i want to
            create a new 'myPeople' array where i can have values from this last three 
            arrays:
        </p>
            <section className="code-block">
                <p>{`const boys = ['john','peter','bob']`}</p>    
                <p>{`const girls = ['susan','anna']`}</p>
                <p>{`const bestFriend = 'arnold'`}</p>
            </section>
        
        <p>i can think fast and say mm i'll put everthing in
           'myPeople' array as this
        </p>

        <section>
            <p>{`const myPeople = [boys, girls, bestFriend] `}</p>
        </section>

        <p>but this will result in a nested array as this:</p>

        <section className="code-block">
            <p>{`const myPeopleNested  `}</p>
            <p>{`= [['john', 'peter', 'bob'], ['susan','anna'], 'arnold']  `}</p>
        </section>

        <p>and this is not the result that i want, i want a plain
            array with all the elements, so i have to do it this 
            way:
        </p>

        <section>
            <p>{`const myPeople = [...boys, bestFriend, ...girls] `}</p>
        </section>

        <button onClick={handleMypeople}>create 'myPeople' array</button>

        {mypeople ?
            <section>
                <p>{`[`}</p>
                {myPeople.map((person, index) => {
                    return(
                        <div key={index}>
                            <p>{person}</p>
                        </div>
                    )
                })}
                <p>{`]`}</p>
            </section>
        :
        null
        }

        <p>so i have this new array of 'myPeople' and i need
            to handle the 'reference' so i can change the first
            name on the 'myPeople' array, i do this way:
        </p>

        <section className="code-block">
            <p>{`const myNewPeople = [...myPeople] `}</p>
            <p>i have to spread/copy the array that 
                i built
            </p>
            <p>and then i can make the changes
                that i need</p>
        </section>

        <p>for example if i change the first name from 'john'
            to 'nancy' will be like this:
        </p>

        <section className="code-block">
            <p>{`const myNewPeople = [...myPeople]`}</p>
            <p>{`myNewPeople[0] = 'nancy';`}</p>
        </section>

        <button onClick={handlemyNewPeople}>change 'myPeople' to 'myNewPeople'</button>

        {mynewpeople ?
            <section>
                <p>{`[`}</p>
                {myNewPeople.map((newperson, index) => {
                    return(
                        <div key={index}>
                            <p>{newperson}</p>
                        </div>
                    )
                })}
                <p>{`]`}</p>
            </section>
        :
        null
        }
        <p>
            for ES2018 - ES8 Objects and after conventions
            it is a way to handle spread operator for objects,
            for example i have the object:
        </p>

        <section >
            <p>{`const worker = { name: ${workers.name}, job: ${workers.job} }`}</p>
        </section>

        <p>if i want to add more data for example 'city'
            i can do it like this:
        </p>

        <section>
            <p>{`const newWorker = {...workers, city:'chicago'}`}</p>
        </section>

        <button onClick={handleNewWorker}>build 'new worker'</button>

        {newworker ?
        <section>
            <p>name: {newWorker.name}</p>
            <p>job: {newWorker.job}</p>
            <p>city: {newWorker.city}</p>
        </section>
        :
        null
        }

        <p>if i want to to change the 'name' i can do it like
            this:
        </p>

        <section className="code-block">
            <p>{`const newWorker1 `}</p>
            <p>{`= {...workers, city:'chicago', name: 'thomas'}`}</p>
        </section>
        
        <button onClick={handleNewWorker1}>build 'new worker' with different 'name'</button>

        {newworker1 ?
            <section className="code-block"> 
                <p>new name: {newWorker1.name}</p>
                <p>job: {newWorker1.job}</p>
                <p>city: {newWorker1.city}</p>
            </section>
        :
        null
        }
        </ArrayDestructuringWrapper>
    )
}


const ArrayDestructuringWrapper = styled.div`
    section, .code-block{
        display: flex;
        justify-content: space-around;
        border: 1px solid black;
    }

    button{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .code-block{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .hide{ 
        display: flex;
        width: 400px;
        height: 100px;

        div{
            display: flex;
            padding: 1rem;
            h3{
                margin-left: 1rem;
            }
        }
    }

`

export default ArrayDestructuring;