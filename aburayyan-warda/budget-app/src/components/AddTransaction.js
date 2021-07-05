import React, { useState } from "react";
import "../App.css";
// import Login from "../context/Login";
import DepositForm from "./DepositForm";
import WithdrawForm from "./WithdrawForm";

const AddTransaction = (props) => {
  //deposit btn
  const [shown, setShown] = useState(false);

  const setShownHandler = () => {
    setShown(true);
  };
  const stopSetShownHandler = () => {
    setShown(false);
  };
  //withdraw btn
  const [show, setShow] = useState(false);

  const setShowHandler = () => {
    setShow(true);
  };
  const stopSetShowHandler = () => {
    setShow(false);
  };
  // // submit
  // const [submit, setSubmit] = useState(false);

  // const stopSetSubmitHandler = () => {
  //   setSubmit(false);
  // };

  return (
    <div className="from-wrapper">
      {/* deposit btn */}
      <div className="deposit">
        {!shown && (
          <button className="deposit-btn" onClick={setShownHandler}>
            <i className="fas fa-piggy-bank"></i>
            Deposit
          </button>
        )}
        {shown && <DepositForm onCancelShown={stopSetShownHandler} />}
      </div>
      {/* withdraw btn */}
      <div className="withdraw">
        {!show && (
          <button className="withdraw-btn" onClick={setShowHandler}>
            <i className="fas fa-money-bill-wave"></i>
            Withdraw
          </button>
        )}
        {show && <WithdrawForm onCancelshow={stopSetShowHandler} />}
      </div>
      {/* submit btn
      <div className="submit-btn">
        {show && <Login onCancelSubmit={stopSetSubmitHandler} />}
      </div> */}
    </div>
  );
};

export default AddTransaction;
