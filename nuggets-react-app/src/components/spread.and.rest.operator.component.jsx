import React, { useState } from "react";
import { useNuggetsContext } from "../context";
import { ArrayDestructuringWrapper } from "../styled.components";

/**JavaScript-Nuggets-app version 18 - 
 * SpreadAndRest - Features: 
 * 
 *       --> Building 'SpreadAndRest' in its
 *          own component. 
 * 
 * Note: By this version this data is going
 * to be use to refactor navBar Component
 *  
 */

const SpreadAndRest = () => {

    /**here i destructure the data that i need for the component */
    const { johnData, academy, boys, girls, bestFriend, workers, fruits } = useNuggetsContext()
    
    /**here i build the states to toggle functionalities */
    const [academyspread, setAcademy ] = useState(false)
    const [ mypeople, setMypeople ] = useState(false)
    const [ mynewpeople, setMynewpeople ] = useState(false)
    const [ newworker, setNewworker ] = useState(false)
    const [ newworker1, setNewworker1 ] = useState(false)    
    const [ findfruit, setFindfruit ] = useState(false)
    
    /**reference for spread operator */
    const myPeople = [...boys, bestFriend, ...girls]
    const myNewPeople = [...myPeople]
    myNewPeople[0] = 'nancy';
    
    /**here i am adding a new 'city' prop 'newWorker' */
    const newWorker = {...workers, city:'chicago'}
    
    /**here i am changing the 'name' */
    const newWorker1 = {...workers, city:'chicago', name: 'thomas'}
    
    
    const letters = [...academy]
    //console.log('this is letters==>',letters)
    
    /**reference for destructure the 'rest' operator */
    const [ first, ...rest] = fruits;
    
    const [ primero, segundo, ...resto ] = fruits;
    
    const { name, ...restData} = johnData;

    
    /**here i can test how to access them directly */
    //const { lastName, job } = restData;
    
    
    /**here i build the toogle handlers */
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

    const handlefindFruit = () => {
        setFindfruit(!findfruit)
        console.log(findfruit)
    }
    
    

    const getAverage = (name, ...scores) => {
        console.log(name)
        console.log(scores)
        const average = scores.reduce((total,item5) => {
            return total += item5
        }, 0)/scores.length;
        console.log('the average is ==>', average)
    }


    return(
        <ArrayDestructuringWrapper>
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
                <p>{`name: ${johnData.name},`}</p>
                <p>{`lastName: ${johnData.lastName},`}</p>
                <p>{`job: ${johnData.job},`}</p>
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

export default SpreadAndRest;