import React, { useContext } from 'react'
import { StyledBalance } from './styled/Balance.styled'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {

  const {transactions} = useContext(GlobalContext)
  
  const amounts = transactions.map((transaction) => transaction.amount)
  const totalBalance = amounts.reduce((prev,cur)=>prev + cur,0).toFixed(2)

  return (
    <StyledBalance>
      <h4>Your Balance </h4>
      <h1>$ {totalBalance}</h1>
    </StyledBalance>
  )
}

export default Balance