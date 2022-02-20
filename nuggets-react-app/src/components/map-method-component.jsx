import React, { useState } from "react";
import data from '../data'

const MapMethod = () => {

    return(
        <>
        {data.map((person) => {
            const { name, age, position } = person
            return(
                <>
                <h1>{name}</h1>
                <h1>{age}</h1>
                <h1>{position}</h1>
                </>
            )
        })}
        </>
    )

}

export default MapMethod;