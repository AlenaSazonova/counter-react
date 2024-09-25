import React, { useState } from 'react';
import {
    CounterContainer,
    CounterDisplay,
    CounterInput,
    GroupCounterButton,
    ButtonIncreaseCounter,
    ButtonDecreaseCounter
}
    from './NumberCounter.style';


function NumberCounter() {

    const [counter, setCounter] = useState(0)


    const handleIncrease = () => { 
        setCounter(counter + 1)
    };


    const handleDecrease = () => { 
        setCounter(counter - 1)
    };


    return (
        <CounterContainer>
            <CounterDisplay>
                <CounterInput type="text" value={counter} readOnly />
            </CounterDisplay>
            <GroupCounterButton>
                <ButtonIncreaseCounter onClick={handleIncrease}>+</ButtonIncreaseCounter>
                <ButtonDecreaseCounter onClick={handleDecrease}>-</ButtonDecreaseCounter>
            </GroupCounterButton>
        </CounterContainer>
    );
}

export default NumberCounter;