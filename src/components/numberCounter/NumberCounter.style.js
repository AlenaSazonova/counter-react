import styled from "styled-components";


export const CounterContainer = styled.div`
    
`;

export const CounterDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const CounterInput = styled.input`
    border-radius: 20px;
    border: 4px solid #007BFF;
    max-width: 150px;
    width: 100%;
    height: 150px;
    font-size: 80px;
    font-weight: 400;
    line-height: 262%;
    text-align: center;
`;

export const GroupCounterButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonIncreaseCounter = styled.button`
    border-radius: 20px;
    max-width: 150px;
    width: 100%;
    height: 84px;
    background: #007BFF;
    font-weight: 700;
    font-size: 30px;
    line-height: 247%;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;
    margin-right: 10px;

    &:hover {
        background: #052d59;
    }
`;

export const ButtonDecreaseCounter = styled.button`
    border-radius: 20px;
    max-width: 150px;
    width: 100%;
    height: 84px;
    background: #007BFF;
    font-weight: 700;
    font-size: 30px;
    line-height: 247%;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;
    margin-left: 10px;

    &:hover {
        background: #052d59;
    }
`;