import React, { useState, useContext } from 'react'
import { StyledSection } from './styled/AddNewTransaction.styled'
import { StyledButton } from './styled/Button.styled'
import { GlobalContext } from '../context/GlobalState'

const AddNewTransaction = () => {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0)

  const {addTransaction} = useContext(GlobalContext)

  const handleSubmit = (event) => {
    event.preventDefault()

    if(amount === 0) {
      alert("Amount is not valid")
      return
    }

    const newTransaction = {
      id : Math.floor(Math.random() * 1000000),
      text : text,
      amount : parseInt(amount)
    }
    setText("")
    setAmount(0)
    addTransaction(newTransaction)
  }

  return (
    <StyledSection>
      <h3>Add New Transaction</h3>
      <hr />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Text">Text</label>
          <br />
          <input type="text"
            name="text"
            placeholder="Enter text ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Amount">
            Amount
            <br />
            <span>( negative - expense, positive - income )</span>
          </label>
          <br />
          <input type="number"
            name="amount"
            placeholder="Enter Amount..."
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <StyledButton type="submit" name="addTransaction">Add transaction</StyledButton>
        </div>
      </form>

    </StyledSection>
  )
}

export default AddNewTransaction