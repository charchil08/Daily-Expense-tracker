import styled from "styled-components";

export const Box = styled.div`
    margin-top: 2rem;
    padding: 1rem;

    display: flex;
    justify-content:space-between;
    align-items:center;

    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`

export const IncomeBox = styled.div`
    h3 {
        color:green;
        padding-top:0.5rem;
    }

`

export const LinearBox = styled.div`
    &:before {
        content:"";
        position:relative;
        border: 1px solid rgba(0,0,0,0.23);
    }
`

export const ExpenseBox = styled.div`
    h3 {
        color:red;
        padding-top:0.5rem;
    }
`