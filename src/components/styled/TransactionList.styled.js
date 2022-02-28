import styled from "styled-components"

export const ListContainer = styled.div`
    margin-top: 2rem;

    & > ul {
        margin-top:1rem;
    }
    
    & > h3 {
        padding-bottom:.5rem;
    }
`

export const SingleTransaction = styled.li`
    list-style: none;
    display: flex;
    justify-content:space-between;
    padding: .45rem;
    border-radius:5px;
    margin-bottom: .75rem;
    box-shadow: 0 1px 5px rgb(0 0 0 / 0.2);
    border-right : 5px solid ${({sign}) => (sign==='+') ? 'green' : 'red'};        
`