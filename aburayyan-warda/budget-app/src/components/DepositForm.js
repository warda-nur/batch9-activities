import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const DepositForm = (props) => {
  const { addIncome } = useContext(GlobalContext); //adincome from global context

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1, //multiply income amount by 1 string value will now be a number
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  return (
    <form onSubmit={onSubmitIncome}>
      <div className="input-group income">
        <input
          type="text"
          name="incomeText"
          value={incomeText}
          placeholder="Add Income (deposit)"
          autoComplete="off"
          onChange={onChangeIncome}
        />
        <input
          type="number"
          min="1"
          name="incomeAmount"
          value={incomeAmount}
          placeholder="amount"
          autoComplete="off"
          onChange={onChangeIncome}
        />
        <input type="submit" value="Submit" />
        <input
          type="submit"
          value="Cancel"
          className="deposit-cancel"
          onClick={props.onCancelShown}
        />
      </div>
    </form>
  );
};

export default DepositForm;
