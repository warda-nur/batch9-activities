import React from "react";

const Field = ({ label, type }) => {
  return (
    <div className="wholeStyle">
      <label className="labelStyle">{label}</label>
      <input type={type} className="inputStyle" />
    </div>
  );
};

export default Field;
