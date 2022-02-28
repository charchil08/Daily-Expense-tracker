import React, { useState, useContext } from 'react'
import { SingleTransaction } from './styled/TransactionList.styled'
import { DeleteButton } from './styled/Button.styled'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {

    const [style, setStyle] = useState({ display: 'none' })
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = (transaction.amount < 0) ? '-' : '+'

    const handleMouseIn = (event) => {
        setStyle({ display: 'inline' })
    }
    const handleMouseOut = (event) => {
        setStyle({ display: 'none' })
    }

    return (
        <>
            <SingleTransaction sign={sign} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                <span>{transaction.text}</span>
                <span>{sign} ${Math.abs(transaction.amount)}</span>
            <DeleteButton type="submit" style={style} onClick={() => {deleteTransaction(transaction.id)}}>X</DeleteButton>
            </SingleTransaction>
        </>
    )
}

export default Transaction