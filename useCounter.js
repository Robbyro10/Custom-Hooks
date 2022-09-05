import { useState } from "react"


export const useCounter = ( initialValue = 1 ) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = ( value = 1 ) => setCounter( counter + value )

    const decrement = ( value = 1 ) => setCounter( counter - value )

    const reset = () => setCounter( initialValue )

    const random = ( max ) => {
        max = Math.floor(max);
        return setCounter(Math.floor(Math.random() * (max - 1) + 1));
    }

    const hello = "string";

    return {
        counter,
        increment,
        decrement,
        random,
        reset,
    }

}
