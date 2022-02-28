import React, { useContext } from 'react'
import { ListContainer } from './styled/TransactionList.styled'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)
    return (
        <ListContainer >
            <h3>History</h3>
            <hr />

            <ul>
                {transactions.map((transaction) => (<Transaction transaction={transaction} key={transaction.id} />))}

            </ul>

        </ListContainer>
    )
}

export default TransactionList