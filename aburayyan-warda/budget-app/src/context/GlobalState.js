import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem("incomeTransactions")) || [],
  expenseTransactions:
    JSON.parse(localStorage.getItem("expenseTransactions")) || [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  //in order to get acces the state from other components i used children as a prop then i passed it also sa return
  const [state, dispatch] = useReducer(AppReducer, initialState); //passed the state to the AppReducer
  //instead of useState we will use useReducer hook

  useEffect(() => {
    localStorage.setItem(
      "incomeTransaction",
      JSON.stringify(state.incomeTransactions)
    );
  });
  useEffect(() => {
    localStorage.setItem(
      "expenseTransaction",
      JSON.stringify(state.expenseTransactions)
    );
  });
  //function that will dispatch the action to the reducer so that the newly created object will be added to the state
  const addIncome = (incomeTransaction) => {
    dispatch({
      // dispatch function that we grabbed from the context
      type: "ADD_INCOME", //action
      payload: incomeTransaction, //newly created income transaction in the add transaction component then i passed it sa depositform
    });
  };
  const addExpense = (expenseTransaction) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction,
    });
  };

  const deleteTransaction = (id) => {
    //new function for delete transaction
    dispatch({
      type: "DELETE_TRANSACTION", //action
      payload: id, //used id of the transaction
    });
  };

  return (
    // naka wrap  app so thats its accessible to other components
    <GlobalContext.Provider
      value={{
        // value property that includes the objects that we can use to pass the state and the method that will dispatch the action
        incomeTransactions: state.incomeTransactions, //data from state income transactions
        expenseTransactions: state.expenseTransactions, //data from state expense transactions
        addIncome,
        addExpense,
        deleteTransaction, // passed all function in the provider
      }}
    >
      ({children}){/*  yung children will be all the components in my app */}
    </GlobalContext.Provider>
  );
};
