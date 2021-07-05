import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const WithdrawForm = (props) => {
  const { addExpense } = useContext(GlobalContext);

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };

      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  return (
    <form onSubmit={onSubmitExpense}>
      <div className="input-group expense">
        <input
          type="text"
          name="expenseText"
          value={expenseText}
          placeholder="Add Expense (withdraw)"
          autoComplete="off"
          onChange={onChangeExpense}
        />
        <input
          type="number"
          min="1"
          name="expenseAmount"
          value={expenseAmount}
          placeholder="amount"
          autoComplete="off"
          onChange={onChangeExpense}
        />
        <input type="submit" value="Submit" />
        <input
          type="submit"
          value="Cancel"
          className="withdraw-cancel"
          onClick={props.onCancelshow}
        />
      </div>
    </form>
  );
};

export default WithdrawForm;
