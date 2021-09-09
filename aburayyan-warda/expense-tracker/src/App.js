import React, { useState } from "react";
import "./App.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "house Insurance",
    amount: "1000",
    date: new Date(2021, 7, 10),
  },
  {
    title: "phone Insurance",
    amount: "1000",
    date: new Date(2020, 8, 1),
  },
  {
    title: "car Insurance",
    amount: "1000",
    date: new Date(2020, 5, 18),
  },
  {
    title: "computer Insurance",
    amount: "1000",
    date: new Date(2019, 2, 19),
  },
  {
    title: "computer Insurance",
    amount: "1000",
    date: new Date(2018, 2, 19),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};
export default App;
