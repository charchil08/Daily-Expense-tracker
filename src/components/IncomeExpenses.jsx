import React, { useContext } from 'react'
import { Box, IncomeBox, ExpenseBox, LinearBox } from './styled/IncomeExpenses.styled'
import { GlobalContext } from '../context/GlobalState'


const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map((transaction) => transaction.amount)
  const income = amounts.filter((amount) => amount > 0).reduce((prev,current) =>prev+current,0).toFixed(2)
  const expense = amounts.filter((amount) => amount < 0).reduce((prev,current) =>prev-current,0).toFixed(2)

  return (
    <Box>
      <IncomeBox>
        <h4>INCOME</h4>
        <h3>${income}</h3>
      </IncomeBox>
      <LinearBox>

      </LinearBox>
      <ExpenseBox>
        <h4>EXPENSE</h4>
        <h3>${expense}</h3>
      </ExpenseBox>
    </Box>
  )
}

export default IncomeExpenses