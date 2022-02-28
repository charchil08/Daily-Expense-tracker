import styled from "styled-components";

export const StyledSection = styled.div`
    margin-top:2rem;

    & > h3 {
        padding-bottom:.5rem;
    }

    & > form {
        margin-top: 1rem;
        display:flex;
        flex-direction:column;
    }

    & > form > div {
        margin: .5rem 0;
    }

    label {
        font-weight: bold;
        font-size: 1.2rem;
    }

    label > span {
        font-weight: normal;
        font-size: .85rem;
    }

    input {
        margin-top: 0.5rem;
        padding: 0.25rem;
        font-size: .85rem;
        width: 100%;
    }

`