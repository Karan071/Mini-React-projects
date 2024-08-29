import React from 'react'
import { useState } from 'react'


const AddTransaction = () => {
    const [text, setText] = useState(''); // for the text
    const [amount,setAmount] = useState(0); //for amount

  return (
    <div>
        <h3>Add new transaction</h3>
        <form action="">
            <div className="form-control">
                 <label htmlFor="text">Text</label>
                 <input type="text" placeholder='Enter the Text here' />
            </div>
            <div className="form-control">
                 <label htmlFor="amount">Amount <br/> (negative - expense, positive - income)</label>
                 <input type="text" placeholder='Enter Amount' />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction