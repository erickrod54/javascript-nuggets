import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {

    const navigate = useNavigate();
    return(
        <>
            <h1>Something wrong -404-</h1>
            <button onClick={() => {
                navigate('/')
            }}>
                Back home
            </button>
        </>
    )

} 

export default Error