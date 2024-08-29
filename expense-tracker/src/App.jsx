import "./App.css";
import React from 'react'
import Header from './Component/Header';
import Balance from './Component/Balance';
import IncomeExpenses from './Component/IncomeExpenses';
import TransactionList from "./Component/TransactionList";
import AddTransaction from "./Component/AddTransaction";

const App = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction />
      </div>
    </div>
  )
}

export default App;