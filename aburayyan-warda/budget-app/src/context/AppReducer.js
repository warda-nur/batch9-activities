export default (state, action) => {
  //first parameter is the state na galing sa globalState useReducer hook
  // app reducer includes the switch statements that will define different cases
  switch (
    action.type //switch statement
  ) {
    case "ADD_INCOME": //if action type is add then return
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions], //action.payload holds a newly added income transaction then spread out the rest of the transaction
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          //filter looks through income transaction and it will filter through the array
          //if the id of the transaction does not match the id of the payload then it should be kept in the array
          (incomeTransaction) => incomeTransaction.id !== action.payload //current item in the array
          //if id transaction matches the id in payload it will be removed from the array
          //passed onClick in incomeTransaction delete button
        ),
        expenseTransactions: state.expenseTransactions.filter(
          (expenseTransaction) => expenseTransaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
